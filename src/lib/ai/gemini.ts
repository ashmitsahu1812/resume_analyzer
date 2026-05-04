import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY or OPENAI_API_KEY is missing. Please check your .env.local or Vercel settings.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash-latest",
    generationConfig: {
      responseMimeType: "application/json",
    }
  });
  
  const prompt = `
    You are an expert recruiter and ATS (Applicant Tracking System) specialist. 
    Analyze the following resume text and provide a detailed, professional evaluation.
    
    ${jobDescription ? `Compare the resume against this job description: \n\n${jobDescription}\n\n` : "Analyze the resume for general professional quality and ATS compatibility."}

    RESUME TEXT:
    ${resumeText}

    Return the analysis in the following STRICT JSON format:
    {
      "ats_score": number (0-100),
      "content_score": number (0-100),
      "format_score": number (0-100),
      "skills_match": number (0-100),
      "strengths": string[],
      "weaknesses": string[],
      "suggestions": [
        {
          "original": string (the exact line from the resume),
          "improved": string (the improved, high-impact version)
        }
      ],
      "missing_keywords": string[],
      "job_match_percentage": number (0-100),
      "summary": string (a professional, 2-3 sentence overview)
    }

    Rules:
    1. Suggestions should be high-impact, using action verbs and quantifying achievements.
    2. Strengths and weaknesses should be actionable.
    3. Ensure the output is ONLY the JSON object.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      return JSON.parse(text) as AnalysisResult;
    } catch (parseError) {
      console.error("GEMINI JSON PARSE ERROR. Raw Content:", text);
      throw new Error("Failed to parse Gemini response into a valid analysis format.");
    }
  } catch (error: any) {
    console.error("Gemini Analysis error:", error);
    throw new Error(error.message || "Failed to analyze resume with Gemini");
  }
}
