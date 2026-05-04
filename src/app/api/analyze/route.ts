import { NextRequest, NextResponse } from "next/server";
import { parseResume } from "@/lib/ai/parser";
import { analyzeResumeWithAI } from "@/lib/ai/openai";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const jobDescription = formData.get("jobDescription") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    console.log("Converting file to buffer...");
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Parse the resume
    console.log("Parsing resume text...");
    const resumeText = await parseResume(buffer, file.type);
    console.log("Resume parsed, length:", resumeText.length);

    // Analyze with AI
    console.log("Analyzing with AI...");
    const analysis = await analyzeResumeWithAI(resumeText, jobDescription);
    console.log("AI Analysis complete");

    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error("CRITICAL API ERROR:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong during analysis" }, 
      { status: 500 }
    );
  }
}
