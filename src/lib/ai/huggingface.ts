import { HfInference } from "@huggingface/inference";
import { AnalysisResult } from "../types";

export async function analyzeResumeWithAI(
  resumeText: string, 
  jobDescription?: string
): Promise<AnalysisResult> {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  if (!apiKey) {
    throw new Error("HUGGINGFACE_API_KEY is missing. Check Vercel Environment Variables.");
  }

  const hf = new HfInference(apiKey);
  
  // Using a powerful instruction model
  const model = "mistralai/Mistral-7B-Instruct-v0.2";

  const prompt = `<s>[INST] You are an expert ATS Resume Analyzer.
Analyze the resume and return a JSON object.
${jobDescription ? `Job: ${jobDescription}` : ""}
Resume: ${resumeText}

Return ONLY JSON:
{ 
  "ats_score": number, 
  "content_score": number, 
  "format_score": number, 
  "skills_match": number, 
  "strengths": string[], 
  "weaknesses": string[], 
  "suggestions": [{"original": string, "improved": string}], 
  "missing_keywords": string[], 
  "job_match_percentage": number, 
  "summary": string 
} [/INST]`;

  try {
    const response = await hf.textGeneration({
      model: model,
      inputs: prompt,
      parameters: {
        max_new_tokens: 2000,
        return_full_text: false,
      },
    });

    const text = response.generated_text;
    
    // Clean up response
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    try {
      // Find the first { and last } to extract JSON if there's surrounding text
      const start = jsonStr.indexOf("{");
      const end = jsonStr.lastIndexOf("}") + 1;
      const cleanJson = jsonStr.substring(start, end);
      
      return JSON.parse(cleanJson) as AnalysisResult;
    } catch (parseError) {
      console.error("HF JSON PARSE ERROR. Raw Content:", text);
      throw new Error("Failed to parse Hugging Face response into a valid analysis format.");
    }
  } catch (error: any) {
    console.error("Hugging Face Analysis error:", error);
    throw new Error(`AI Analysis failed: ${error.message || "Unknown error"}`);
  }
}
