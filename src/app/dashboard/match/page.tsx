"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Search, Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";
const CARD: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 16, padding: 24 };

export default function JobMatchPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDesc] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResult, setMatchResult] = useState<any>(null);

  const handleMatch = async () => {
    if (!resumeFile || !jobDescription) return;
    setIsAnalyzing(true);
    try {
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      const resumeText = resumeFile.type === "application/pdf"
        ? await parsePDFOnClient(resumeFile)
        : await parseDOCXOnClient(resumeFile);
      const res = await fetch("/api/analyze", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription }),
      });
      if (!res.ok) throw new Error("Match Engine failed");
      setMatchResult(await res.json());
    } catch (e: any) { alert(`Matching failed: ${e.message}`); }
    finally { setIsAnalyzing(false); }
  };

  return (
    <div className="dash-pad" style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 12 }}>
          Neural System / Alignment
        </p>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff" }}>
          Neural Job{" "}
          <em className="not-italic" style={{ color: MUTED }}>Matching.</em>
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="upload-grid">
        {/* Inputs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Upload */}
          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Upload size={13} color={MUTED} />
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", color: "#ffffff" }}>Upload Resume</p>
            </div>
            <input type="file" id="match-resume" style={{ display: "none" }}
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)} />
            <label htmlFor="match-resume" style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              height: 100, borderRadius: 10, cursor: "pointer", transition: "all 0.2s",
              border: `1.5px dashed ${resumeFile ? "rgba(255,255,255,0.2)" : BORDER}`,
              background: resumeFile ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
            }}>
              <FileText size={20} color={resumeFile ? "rgba(255,255,255,0.7)" : MUTED} style={{ marginBottom: 8 }} />
              <span style={{ fontSize: 12, color: resumeFile ? "rgba(255,255,255,0.8)" : MUTED, fontFamily: "var(--font-body)" }}>
                {resumeFile ? resumeFile.name : "Select Resume (PDF/DOCX)"}
              </span>
            </label>
          </div>

          {/* Job desc */}
          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24, flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <Search size={13} color={MUTED} />
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", color: "#ffffff" }}>Target Job Description</p>
            </div>
            <textarea value={jobDescription} onChange={(e) => setJobDesc(e.target.value)}
              placeholder="Paste the job description here..."
              style={{ width: "100%", height: 180, background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#ffffff", fontFamily: "var(--font-body)", outline: "none", resize: "none", lineHeight: 1.65, transition: "border-color 0.2s" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
              onBlur={(e) => (e.target.style.borderColor = BORDER)} />
          </div>

          {/* Run button */}
          <button onClick={handleMatch} disabled={isAnalyzing || !resumeFile || !jobDescription}
            className="liquid-glass"
            style={{ padding: "14px 0", width: "100%", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: isAnalyzing || !resumeFile || !jobDescription ? MUTED : "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.2s" }}>
            {isAnalyzing ? "Calculating Alignment..." : "Run Matching Engine"}
          </button>
        </div>

        {/* Results */}
        <div>
          {matchResult ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Score */}
              <div className="liquid-glass" style={{ borderRadius: 16, padding: 32 }}>
                <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 12 }}>Neural Alignment Score</p>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "4rem", fontWeight: 400, color: "#ffffff", lineHeight: 1, marginBottom: 16 }}>
                  {matchResult.job_match_percentage}<span style={{ fontSize: "1.5rem", color: MUTED }}>%</span>
                </p>
                <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 1, overflow: "hidden" }}>
                  <motion.div style={{ height: "100%", background: "rgba(255,255,255,0.4)", borderRadius: 1 }}
                    initial={{ width: 0 }} animate={{ width: `${matchResult.job_match_percentage}%` }}
                    transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }} />
                </div>
              </div>
              {/* Strengths / Gaps */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div style={CARD}>
                  <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 14 }}>Strengths</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {matchResult.strengths.slice(0, 3).map((s: string, i: number) => (
                      <li key={i} style={{ display: "flex", gap: 8, fontSize: 12.5, color: MUTED, lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                        <CheckCircle2 size={12} color="rgba(255,255,255,0.5)" style={{ marginTop: 2, flexShrink: 0 }} />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={CARD}>
                  <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 14 }}>Gaps</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {matchResult.missing_keywords.slice(0, 3).map((k: string, i: number) => (
                      <li key={i} style={{ display: "flex", gap: 8, fontSize: 12.5, color: MUTED, lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                        <AlertCircle size={12} color="rgba(255,255,255,0.35)" style={{ marginTop: 2, flexShrink: 0 }} />{k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="liquid-glass" style={{ height: "100%", minHeight: 300, borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 40 }}>
              <Target size={32} color="rgba(255,255,255,0.12)" style={{ marginBottom: 20 }} />
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.2rem", fontWeight: 400, color: "#ffffff", marginBottom: 10 }}>No Analysis Yet</h3>
              <p style={{ fontSize: 13, color: MUTED, maxWidth: 240, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
                Upload your resume and paste a job description to see your alignment score.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
