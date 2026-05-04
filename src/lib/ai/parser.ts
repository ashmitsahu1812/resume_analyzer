import mammoth from "mammoth";

export async function parseResume(buffer: Buffer, fileType: string): Promise<string> {
  try {
    if (fileType === "application/pdf") {
      const pdf = require("pdf-parse");
      const data = await pdf(buffer);
      return data.text;
    } else if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else {
      throw new Error("Unsupported file type");
    }
  } catch (error) {
    console.error("Parsing error:", error);
    throw new Error("Failed to parse document");
  }
}
