import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  // Using Llama-3-8B which is very stable on the free tier
  const model = "meta-llama/Meta-Llama-3-8B-Instruct";
  const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

  const prompt = `<|begin_of_text|><|start_header_id|>system<|end_header_id|>
  You are an expert ATS Resume Analyzer. You only respond with valid JSON.
  <|eot_id|><|start_header_id|>user<|end_header_id|>
  Analyze this resume. ${jobDescription ? `Compare it to this job: ${jobDescription}` : ""}
  Resume Text: ${resumeText.substring(0, 5000)}
  
  Return a JSON object exactly like this:
  { "ats_score": 85, "content_score": 90, "format_score": 80, "skills_match": 75, "strengths": ["list"], "weaknesses": ["list"], "suggestions": [{"original": "line", "improved": "new line"}], "missing_keywords": ["keyword"], "job_match_percentage": 70, "summary": "brief summary" }
  <|eot_id|><|start_header_id|>assistant<|end_header_id|>`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_new_tokens: 1500, return_full_text: false }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Hugging Face API Error");
    }

    const data = await response.json();
    const text = Array.isArray(data) ? data[0].generated_text : data.generated_text;
    
    // Extract JSON
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;
    const jsonStr = text.substring(start, end);
    
    return JSON.parse(jsonStr) as AnalysisResult;
  } catch (error: any) {
    console.error("Analysis Failure:", error);
    throw new Error(`Neural Engine Offline: ${error.message}`);
  }
}
