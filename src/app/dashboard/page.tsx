"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { Zap, Trophy, BarChart3, Target, RotateCcw } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";
const CARD = "rgba(255,255,255,0.03)";

function scoreColor(v: number) {
  return v >= 80 ? "rgba(255,255,255,0.9)" : v >= 60 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)";
}

export default function Dashboard() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleFile = async (file: File) => {
    setAnalyzing(true); setResult(null);
    try {
      let resumeText = "";
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      resumeText = file.type === "application/pdf"
        ? await parsePDFOnClient(file)
        : await parseDOCXOnClient(file);
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription: jobDesc }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      setResult(await res.json());
    } catch (e: any) { alert(`Error: ${e.message}`); }
    finally { setAnalyzing(false); }
  };

  const scores = result ? [
    { label: "ATS Score", val: result.ats_score, icon: Zap, desc: "Applicant tracking" },
    { label: "Content", val: result.content_score, icon: Trophy, desc: "Impact & clarity" },
    { label: "Format", val: result.format_score, icon: BarChart3, desc: "Structure" },
    { label: "Job Match", val: result.job_match_percentage, icon: Target, desc: "Role alignment" },
  ] : [];

  return (
    <div className="dash-pad" style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
        <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 12 }}>
          Neural System / Analysis
        </p>
        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
          fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.05,
          color: "#ffffff", marginBottom: 10,
        }}>
          Resume{" "}
          <em className="not-italic" style={{ color: MUTED }}>Analysis.</em>
        </h1>
        <p style={{ fontSize: 13.5, color: MUTED, fontFamily: "var(--font-body)" }}>
          Upload your resume to get an instant AI-powered analysis and optimization report.
        </p>
      </div>

      {/* Upload state */}
      {!result && !analyzing && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 20 }} className="upload-grid">
          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24 }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.05rem", color: "#ffffff", marginBottom: 4 }}>Upload Resume</p>
            <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20, fontFamily: "var(--font-body)" }}>PDF or DOCX · Max 10MB</p>
            <FileUpload onFileSelect={handleFile} />
          </div>
          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24, display: "flex", flexDirection: "column" }}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.05rem", color: "#ffffff", marginBottom: 4 }}>Job Description</p>
            <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: 20, fontFamily: "var(--font-body)" }}>Optional — enables match scoring</p>
            <textarea
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              placeholder="Paste the job description here to get a precise match score and targeted keyword analysis..."
              style={{
                flex: 1, minHeight: 200, width: "100%",
                background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`,
                borderRadius: 10, padding: "12px 16px", fontSize: 13.5,
                color: "#ffffff", fontFamily: "var(--font-body)",
                outline: "none", resize: "none", lineHeight: 1.65, transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
          </div>
        </motion.div>
      )}

      {analyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Score cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }} className="score-grid">
            {scores.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="liquid-glass"
                style={{ padding: 20, borderRadius: 0 }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)" }}>{s.label}</p>
                  <s.icon size={13} color={MUTED} />
                </div>
                <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2.2rem", fontWeight: 400, color: scoreColor(s.val), lineHeight: 1, marginBottom: 4 }}>
                  {s.val}<span style={{ fontSize: "1rem", color: MUTED }}>%</span>
                </p>
                <p style={{ fontSize: 11, color: MUTED, marginBottom: 12, fontFamily: "var(--font-body)" }}>{s.desc}</p>
                <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 1, overflow: "hidden" }}>
                  <motion.div style={{ height: "100%", background: "rgba(255,255,255,0.4)", borderRadius: 1 }}
                    initial={{ width: 0 }} animate={{ width: `${s.val}%` }}
                    transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }} />
                </div>
              </motion.div>
            ))}
          </div>

          <AnalysisPanel data={result} />
          <SuggestionsPanel suggestions={result.suggestions} />
          <KeywordsPanel keywords={result.missing_keywords} />

          <div style={{ display: "flex", justifyContent: "center", paddingTop: 24, paddingBottom: 40 }}>
            <button onClick={() => setResult(null)} className="liquid-glass"
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 28px", fontSize: 12, color: MUTED, background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.05em", transition: "all 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}>
              <RotateCcw size={13} /> New Analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
