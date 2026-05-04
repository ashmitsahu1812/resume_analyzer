import OpenAI from "openai";
import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key",
  });
  
  const prompt = `
    You are an expert recruiter and ATS (Applicant Tracking System) specialist. 
    Analyze the following resume text and provide a detailed, professional evaluation.
    
    ${jobDescription ? `Compare the resume against this job description: \n\n${jobDescription}\n\n` : "Analyze the resume for general professional quality and ATS compatibility."}

    RESUME TEXT:
    ${resumeText}

    Return the analysis in the following STICKT JSON format:
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
      "job_match_percentage": number (0-100)
    }

    Rules:
    1. Suggestions should be high-impact, using action verbs and quantifying achievements where possible.
    2. Strengths and weaknesses should be actionable and specific.
    3. If no job description is provided, job_match_percentage and missing_keywords should reflect general industry standards for the identified role.
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Using gpt-4o for best results
      messages: [
        { role: "system", content: "You are a senior executive recruiter." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return result as AnalysisResult;
  } catch (error) {
    console.error("AI Analysis error:", error);
    throw new Error("Failed to analyze resume with AI");
  }
}
