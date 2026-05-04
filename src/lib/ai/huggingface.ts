import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  const model = "mistralai/Mistral-7B-Instruct-v0.2";
  const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

  const prompt = `<s>[INST] You are a Resume Analyzer. 
  Resume: ${resumeText.substring(0, 4000)}
  ${jobDescription ? `Job: ${jobDescription}` : ""}
  
  Return ONLY a JSON object:
  { "ats_score": number, "content_score": number, "format_score": number, "skills_match": number, "strengths": string[], "weaknesses": string[], "suggestions": [{"original": string, "improved": string}], "missing_keywords": string[], "job_match_percentage": number, "summary": string } [/INST]`;

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
