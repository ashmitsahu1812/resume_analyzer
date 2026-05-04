import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing. Check Vercel Environment Variables.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  
  // Try the most stable model names
  const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];
  let lastError = null;

  for (const modelName of modelsToTry) {
    try {
      console.log(`Starting analysis with: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });

      const prompt = `
        Act as an ATS Resume Analyzer.
        ${jobDescription ? `Compare against this Job: ${jobDescription}` : "General analysis."}
        Resume Text: ${resumeText}
        
        IMPORTANT: Return ONLY a JSON object. No extra text.
        Format: { "ats_score": number, "content_score": number, "format_score": number, "skills_match": number, "strengths": string[], "weaknesses": string[], "suggestions": [{"original": string, "improved": string}], "missing_keywords": string[], "job_match_percentage": number, "summary": string }
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Clean up the response if it contains markdown code blocks
      const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(jsonStr) as AnalysisResult;
    } catch (error: any) {
      console.warn(`${modelName} failed:`, error.message);
      lastError = error;
      continue;
    }
  }

  throw new Error(`CRITICAL: All Gemini models failed. This usually means the API Key is invalid or restricted in your region. Last error: ${lastError?.message}`);
}
