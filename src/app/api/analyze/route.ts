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
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Parse the resume
    const resumeText = await parseResume(buffer, file.type);

    // Analyze with AI
    const analysis = await analyzeResumeWithAI(resumeText, jobDescription);

    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error("API Route error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" }, 
      { status: 500 }
    );
  }
}
