import mammoth from "mammoth";

export async function parseResume(buffer: Buffer, fileType: string): Promise<string> {
  console.log(`Processing file type: ${fileType}`);
  try {
    if (fileType === "application/pdf") {
      // PDF parsing
      const pdf = await import("pdf-parse/lib/pdf-parse.js");
      const data = await pdf.default(buffer);
      return data.text;
    } else if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
      // DOCX parsing
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else {
      throw new Error(`Unsupported file type: ${fileType}`);
    }
  } catch (error) {
    console.error("Parsing error:", error);
    throw new Error("Failed to parse document");
  }
}
