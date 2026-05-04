import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  // Using Zephyr-7B which is open (non-gated) and highly reliable
  const model = "HuggingFaceH4/zephyr-7b-beta";
  const apiUrl = `https://api-inference.huggingface.co/models/${model}`;

  const prompt = `<|system|>
You are an expert ATS Resume Analyzer. Return ONLY valid JSON.<|user|>
Analyze this resume. ${jobDescription ? `Compare it to this job: ${jobDescription}` : ""}
Resume Text: ${resumeText.substring(0, 5000)}

Return JSON: { "ats_score": 85, "content_score": 90, "format_score": 80, "skills_match": 75, "strengths": ["list"], "weaknesses": ["list"], "suggestions": [{"original": "line", "improved": "new line"}], "missing_keywords": ["keyword"], "job_match_percentage": 70, "summary": "brief summary" }<|assistant|>`;

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

    const rawResponse = await response.text();
    
    if (!response.ok) {
      // If it's HTML, extract the title or first 100 chars
      if (rawResponse.includes("<!DOCTYPE") || rawResponse.includes("<html")) {
        const title = rawResponse.match(/<title>(.*?)<\/title>/)?.[1] || "HTML Error Page";
        throw new Error(`AI Server Error (${response.status}): ${title}`);
      }
      throw new Error(rawResponse || "AI Engine failed to respond.");
    }

    const data = JSON.parse(rawResponse);
    const text = Array.isArray(data) ? data[0].generated_text : data.generated_text;
    
    // Extract JSON
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}") + 1;
    const jsonStr = text.substring(start, end);
    
    return JSON.parse(jsonStr) as AnalysisResult;
  } catch (error: any) {
    console.error("Analysis Failure:", error);
    throw new Error(error.message || "Neural Engine Offline");
  }
}
