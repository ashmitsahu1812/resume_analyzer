import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  const geminiKey = process.env.GEMINI_API_KEY;
  let availableModels: string[] = [];
  let geminiError: string | null = null;

  if (geminiKey) {
    try {
      const genAI = new GoogleGenerativeAI(geminiKey);
      // We can't easily list models in the edge-compatible SDK without a specific method, 
      // but we can try a dummy call or just report the key status.
    } catch (e: any) {
      geminiError = e.message;
    }
  }

  return NextResponse.json({
    status: "online",
    hasGeminiKey: !!geminiKey,
    geminiKeyPrefix: geminiKey ? geminiKey.substring(0, 7) : "none",
    hasOpenAIKey: !!process.env.OPENAI_API_KEY,
    geminiError,
    environment: process.env.NODE_ENV
  });
}
