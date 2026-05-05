"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";
import { useState } from "react";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${BORDER}`,
  borderRadius: 16,
  padding: 24,
};

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="analysis-grid">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <CheckCircle2 size={14} color="rgba(255,255,255,0.5)" />
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", fontWeight: 400, color: "#ffffff" }}>Strengths</h3>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {data.strengths.map((s, i) => (
            <li key={i} style={{ display: "flex", gap: 12, fontSize: 13, color: MUTED, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", marginTop: 8, flexShrink: 0 }} />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <AlertCircle size={14} color="rgba(255,255,255,0.5)" />
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", fontWeight: 400, color: "#ffffff" }}>Improvements</h3>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {data.weaknesses.map((w, i) => (
            <li key={i} style={{ display: "flex", gap: 12, fontSize: 13, color: MUTED, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.2)", marginTop: 8, flexShrink: 0 }} />
              {w}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function SuggestionsPanel({ suggestions }: { suggestions: Suggestion[] }) {
  const [copied, setCopied] = useState<number | null>(null);
  const copy = (text: string, i: number) => {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={card}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Sparkles size={14} color="rgba(255,255,255,0.5)" />
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", fontWeight: 400, color: "#ffffff" }}>AI Rewrites</h3>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 999, border: `1px solid ${BORDER}`, fontSize: 10, color: MUTED, fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}>
          {suggestions.length} suggestions
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {suggestions.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            style={{ borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: "14px 18px", borderBottom: `1px solid ${BORDER}` }}>
              <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: 6, fontFamily: "var(--font-body)" }}>Original</p>
              <p style={{ fontSize: 12.5, color: MUTED, fontStyle: "italic", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>"{s.original}"</p>
            </div>
            <div style={{ padding: "14px 18px", position: "relative" }}
              onMouseEnter={(e) => { const b = e.currentTarget.querySelector("button") as HTMLElement; if (b) b.style.opacity = "1"; }}
              onMouseLeave={(e) => { const b = e.currentTarget.querySelector("button") as HTMLElement; if (b) b.style.opacity = "0"; }}>
              <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 6, fontFamily: "var(--font-body)" }}>Improved</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, paddingRight: 36, fontFamily: "var(--font-body)" }}>{s.improved}</p>
              <button onClick={() => copy(s.improved, i)}
                style={{ position: "absolute", top: 14, right: 14, width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0, transition: "opacity 0.15s" }}>
                {copied === i ? <span style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", fontWeight: 700 }}>✓</span> : <Copy size={11} color={MUTED} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function KeywordsPanel({ keywords }: { keywords: string[] }) {
  return (
    <div style={card}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Tag size={14} color="rgba(255,255,255,0.5)" />
          <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", fontWeight: 400, color: "#ffffff" }}>Missing Keywords</h3>
        </div>
        <span style={{ padding: "3px 12px", borderRadius: 999, border: `1px solid ${BORDER}`, fontSize: 10, color: MUTED, fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}>
          {keywords.length} found
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {keywords.map((kw, i) => (
          <span key={i} className="liquid-glass" style={{ padding: "5px 14px", borderRadius: 999, fontSize: 12, color: MUTED, fontFamily: "var(--font-body)", cursor: "default" }}>
            {kw}
          </span>
        ))}
      </div>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
        Add these keywords naturally to your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
