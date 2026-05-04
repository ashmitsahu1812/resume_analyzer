import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  if (!apiKey) {
    throw new Error("HUGGINGFACE_API_KEY is missing in Vercel.");
  }

  // List of high-reliability models to try
  const models = [
    "mistralai/Mistral-7B-Instruct-v0.3",
    "mistralai/Mistral-7B-Instruct-v0.2",
    "HuggingFaceH4/zephyr-7b-beta",
    "microsoft/Phi-3-mini-4k-instruct"
  ];

  let lastError = "";

  for (const model of models) {
    try {
      console.log(`Trying model: ${model}`);
      const apiUrl = `https://api-inference.huggingface.co/models/${model}`;
      
      const prompt = `<|system|>
You are an expert ATS Resume Analyzer. Return ONLY valid JSON. Keep it concise.<|user|>
Analyze this resume. ${jobDescription ? `Compare it to this job: ${jobDescription}` : ""}
Resume Text: ${resumeText.substring(0, 4000)}

Return JSON format: { "ats_score": number, "content_score": number, "format_score": number, "skills_match": number, "strengths": string[], "weaknesses": string[], "suggestions": [{"original": string, "improved": string}], "missing_keywords": string[], "job_match_percentage": number, "summary": string }<|assistant|>`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: { max_new_tokens: 1200, return_full_text: false }
        }),
      });

      const rawResponse = await response.text();

      if (!response.ok) {
        lastError = `Model ${model} failed (${response.status}): ${rawResponse.substring(0, 50)}`;
        continue; // Try next model
      }

      const data = JSON.parse(rawResponse);
      const text = Array.isArray(data) ? data[0].generated_text : data.generated_text;
      
      if (!text) {
        lastError = `Model ${model} returned empty response`;
        continue;
      }

      const start = text.indexOf("{");
      const end = text.lastIndexOf("}") + 1;
      const jsonStr = text.substring(start, end);
      
      return JSON.parse(jsonStr) as AnalysisResult;
    } catch (err: any) {
      lastError = err.message;
      continue;
    }
  }

  throw new Error(`All AI models failed. Last error: ${lastError}`);
}
