import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    environment: process.env.NODE_ENV
  });
}
