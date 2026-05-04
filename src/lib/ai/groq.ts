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

  const prompt = `You are a Senior Executive Recruiter and ATS Optimization Expert. 
  Your goal is to provide a RUTHLESSLY PROFESSIONAL analysis of this resume.
  
  SCORING RUBRIC:
  1. ATS Score: Evaluate technical parseability, standard headers, and keyword density.
  2. Content Score: Evaluate "Impact vs. Activity". Does the candidate use numbers and percentages? (e.g. "Increased revenue by 15%" = High Score; "Helped with revenue" = Low Score).
  3. Format Score: Evaluate professional layout, contact info presence, and logical flow.
  4. Skills Match: Evaluate the depth of technical and soft skills relative to the industry.

  ${jobDescription ? `SPECIFIC JOB CONTEXT: ${jobDescription}` : "GENERAL INDUSTRY STANDARDS"}
  
  RESUME TEXT:
  ${resumeText.substring(0, 8000)}

  Return ONLY a valid JSON object. 
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
