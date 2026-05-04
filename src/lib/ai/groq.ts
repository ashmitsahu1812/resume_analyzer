import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing in Vercel.");
  }

  const model = "llama-3.1-8b-instant";
  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";

  const prompt = `You are an expert ATS Resume Analyzer. 
  Analyze this resume. ${jobDescription ? `Compare it to this job: ${jobDescription}` : "General analysis."}
  Resume Text: ${resumeText.substring(0, 8000)}

  Return ONLY a valid JSON object. No markdown, no intro.
  Format: { "ats_score": number, "content_score": number, "format_score": number, "skills_match": number, "strengths": string[], "weaknesses": string[], "suggestions": [{"original": string, "improved": string}], "missing_keywords": string[], "job_match_percentage": number, "summary": string }`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: "You always return valid JSON." },
          { role: "user", content: prompt }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Groq API Error");
    }

    const content = data.choices[0].message.content;
    return JSON.parse(content) as AnalysisResult;
  } catch (error: any) {
    console.error("Groq Analysis Failure:", error);
    throw new Error(`Groq Engine Offline: ${error.message}`);
  }
}
