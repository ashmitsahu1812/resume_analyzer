"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { Zap, Trophy, BarChart3, Target, RotateCcw } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";

function scoreColor(v: number) {
  return v >= 80 ? "#22c55e" : v >= 60 ? "#f59e0b" : "#ef4444";
}

export default function Dashboard() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [jobDesc, setJobDesc] = useState("");

  const handleFile = async (file: File) => {
    setAnalyzing(true);
    setResult(null);
    try {
      let resumeText = "";
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      if (file.type === "application/pdf") {
        resumeText = await parsePDFOnClient(file);
      } else {
        resumeText = await parseDOCXOnClient(file);
      }
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription: jobDesc }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Analysis failed.");
      }
      setResult(await res.json());
    } catch (e: any) {
      alert(`Error: ${e.message}`);
    } finally {
      setAnalyzing(false);
    }
  };

  const scores = result ? [
    { label: "ATS Score", val: result.ats_score, icon: Zap, desc: "Applicant tracking" },
    { label: "Content", val: result.content_score, icon: Trophy, desc: "Impact & clarity" },
    { label: "Format", val: result.format_score, icon: BarChart3, desc: "Structure & layout" },
    { label: "Job Match", val: result.job_match_percentage, icon: Target, desc: "Role alignment" },
  ] : [];

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 32px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "white", letterSpacing: "-0.03em", marginBottom: 6 }}>
          Resume Analysis
        </h1>
        <p style={{ fontSize: 14, color: "#71717a" }}>
          Upload your resume to get an instant AI-powered analysis and optimization report.
        </p>
      </div>

      {/* Upload state */}
      {!result && !analyzing && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 20 }} className="upload-grid">
          <div style={{ background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 4 }}>Upload Resume</p>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>PDF or DOCX · Max 10MB</p>
            <FileUpload onFileSelect={handleFile} />
          </div>
          <div style={{ background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 4 }}>Job Description</p>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>Optional — enables match scoring</p>
            <textarea
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              placeholder="Paste the job description here to get a precise match score and targeted keyword analysis..."
              style={{
                flex: 1, minHeight: 200, width: "100%", background: "rgba(39,39,42,0.5)",
                border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10,
                padding: "12px 16px", fontSize: 13.5, color: "#d4d4d8",
                fontFamily: "inherit", outline: "none", resize: "none", lineHeight: 1.6,
                transition: "border-color 0.2s",
              }}
              onFocus={e => (e.target.style.borderColor = "rgba(99,102,241,0.5)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.07)")}
            />
          </div>
        </motion.div>
      )}

      {analyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Score cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="score-grid">
            {scores.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b" }}>{s.label}</p>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${scoreColor(s.val)}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <s.icon size={14} color={scoreColor(s.val)} />
                  </div>
                </div>
                <p style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 4, color: scoreColor(s.val) }}>
                  {s.val}<span style={{ fontSize: "1rem", fontWeight: 400, color: "#3f3f46" }}>%</span>
                </p>
                <p style={{ fontSize: 11, color: "#52525b", marginBottom: 12 }}>{s.desc}</p>
                <div style={{ height: 4, background: "#27272a", borderRadius: 2, overflow: "hidden" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: 2, background: scoreColor(s.val) }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.val}%` }}
                    transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <AnalysisPanel data={result} />
          <SuggestionsPanel suggestions={result.suggestions} />
          <KeywordsPanel keywords={result.missing_keywords} />

          <div style={{ display: "flex", justifyContent: "center", paddingTop: 24, paddingBottom: 40 }}>
            <button onClick={() => setResult(null)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", fontSize: 13, fontWeight: 500, color: "#71717a", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, cursor: "pointer", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#71717a"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
              <RotateCcw size={15} /> Start new analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
