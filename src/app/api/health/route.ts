import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    hasApiKey: !!process.env.OPENAI_API_KEY,
    keyPrefix: process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.substring(0, 7) : "none",
    environment: process.env.NODE_ENV
  });
}
