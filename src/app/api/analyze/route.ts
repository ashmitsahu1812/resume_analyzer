import { NextRequest, NextResponse } from "next/server";
import { analyzeResumeWithAI } from "@/lib/ai/huggingface";

export async function POST(req: NextRequest) {
  try {
    const { resumeText, jobDescription } = await req.json();

    if (!resumeText) {
      return NextResponse.json({ error: "No resume text provided" }, { status: 400 });
    }

    console.log("Analyzing with AI, text length:", resumeText.length);
    const analysis = await analyzeResumeWithAI(resumeText, jobDescription);

    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error("CRITICAL API ERROR:", error);
    return NextResponse.json(
      { 
        error: error.message || "Something went wrong during analysis",
        details: error.stack || "No stack trace available"
      }, 
      { status: 500 }
    );
  }
}
