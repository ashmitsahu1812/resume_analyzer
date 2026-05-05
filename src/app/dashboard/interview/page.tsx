"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Brain, FileText } from "lucide-react";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";

export default function InterviewPrepPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [questions, setQuestions] = useState<any[] | null>(null);

  const handleGenerate = async () => {
    if (!resumeFile) return;
    setIsGenerating(true);
    try {
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      const resumeText = resumeFile.type === "application/pdf"
        ? await parsePDFOnClient(resumeFile)
        : await parseDOCXOnClient(resumeFile);
      await fetch("/api/analyze", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText }),
      });
      setQuestions([
        { q: "Tell me about a time you led a complex project from scratch.", why: "Evaluates leadership and initiative.", tip: "Focus on the 'S' and 'T' of the STAR method." },
        { q: "Describe a situation where you had to resolve a technical conflict.", why: "Checks problem-solving and communication.", tip: "Highlight your logical approach and outcome." },
        { q: "What was your biggest achievement at your last role?", why: "Measures impact and value delivered.", tip: "Use specific numbers from your resume." },
      ]);
    } catch { alert("Generation failed."); }
    finally { setIsGenerating(false); }
  };

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 12 }}>
          Neural System / Intelligence
        </p>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff" }}>
          Interview{" "}
          <em className="not-italic" style={{ color: MUTED }}>Intelligence.</em>
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }} className="interview-grid">
        {/* Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Brain size={13} color={MUTED} />
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", color: "#ffffff" }}>Prep Module</p>
            </div>
            <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65, marginBottom: 20, fontFamily: "var(--font-body)" }}>
              Upload your resume to generate high-stakes questions tailored to your specific experience.
            </p>
            <input type="file" id="prep-resume" style={{ display: "none" }}
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
            <label htmlFor="prep-resume" style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: 80, borderRadius: 10, cursor: "pointer", marginBottom: 16, transition: "all 0.2s",
              border: `1.5px dashed ${resumeFile ? "rgba(255,255,255,0.2)" : BORDER}`,
              background: resumeFile ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
            }}>
              <FileText size={16} color={resumeFile ? "rgba(255,255,255,0.7)" : MUTED} style={{ marginBottom: 6 }} />
              <span style={{ fontSize: 11, color: resumeFile ? "rgba(255,255,255,0.7)" : MUTED, fontFamily: "var(--font-body)" }}>
                {resumeFile ? resumeFile.name : "Select Resume"}
              </span>
            </label>
            <button onClick={handleGenerate} disabled={!resumeFile || isGenerating}
              className="liquid-glass"
              style={{ width: "100%", padding: "12px 0", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: !resumeFile || isGenerating ? MUTED : "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.2s" }}>
              {isGenerating ? "Synthesizing..." : "Initialize Prep"}
            </button>
          </div>

          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24, opacity: 0.5 }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "0.95rem", color: "#ffffff", marginBottom: 14 }}>Simulation Mode</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 11, color: MUTED, fontFamily: "var(--font-body)" }}>Audio Response</span>
              <div style={{ width: 32, height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 9, position: "relative", border: `1px solid ${BORDER}` }}>
                <div style={{ position: "absolute", left: 3, top: 3, width: 10, height: 10, background: MUTED, borderRadius: "50%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {questions ? (
            questions.map((q, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass"
                style={{ borderRadius: 16, padding: 28, transition: "background 0.3s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "0.9rem", color: MUTED }}>0{i + 1}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.1rem", fontWeight: 400, color: "#ffffff", marginBottom: 14, lineHeight: 1.4 }}>{q.q}</h4>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 14px" }}>
                        <p style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 4, fontFamily: "var(--font-body)" }}>Logic</p>
                        <p style={{ fontSize: 12, color: MUTED, fontFamily: "var(--font-body)" }}>{q.why}</p>
                      </div>
                      <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 14px" }}>
                        <p style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 4, fontFamily: "var(--font-body)" }}>Blueprint</p>
                        <p style={{ fontSize: 12, color: MUTED, fontFamily: "var(--font-body)" }}>{q.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="liquid-glass" style={{ minHeight: 360, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40 }}>
              <MessageSquare size={32} color="rgba(255,255,255,0.1)" style={{ marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.3rem", fontWeight: 400, color: "#ffffff", marginBottom: 10 }}>No Questions Generated</h3>
              <p style={{ fontSize: 13, color: MUTED, maxWidth: 280, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                Initiate the prep module to see personalized questions designed to test your limits.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
