import mammoth from "mammoth";

export async function parseResume(buffer: Buffer, fileType: string): Promise<string> {
  console.log(`Processing file type: ${fileType}`);
  try {
    if (fileType === "application/pdf") {
      // Use pdf-parse-fork for better serverless compatibility
      const pdf = require("pdf-parse-fork");
      const data = await pdf(buffer);
      return data.text;
    } else if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      // DOCX parsing
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else {
      throw new Error(`Unsupported file type: ${fileType}`);
    }
  } catch (error: any) {
    console.error("Parsing error:", error);
    throw new Error(`Document parsing failed: ${error.message || "Unknown error"}`);
  }
}
