"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";
import { useState } from "react";

const card: React.CSSProperties = {
  background: "rgba(24,24,27,0.5)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 16,
  padding: 24,
};

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="analysis-grid">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(34,197,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CheckCircle2 size={15} color="#22c55e" />
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Strengths</h3>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {data.strengths.map((s, i) => (
            <li key={i} style={{ display: "flex", gap: 12, fontSize: 13.5, color: "#a1a1aa", lineHeight: 1.6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(34,197,94,0.5)", marginTop: 7, flexShrink: 0 }} />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(245,158,11,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={15} color="#f59e0b" />
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Improvements</h3>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {data.weaknesses.map((w, i) => (
            <li key={i} style={{ display: "flex", gap: 12, fontSize: 13.5, color: "#a1a1aa", lineHeight: 1.6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(245,158,11,0.5)", marginTop: 7, flexShrink: 0 }} />
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
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(192,132,252,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Sparkles size={15} color="#c084fc" />
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "white" }}>AI Rewrites</h3>
        </div>
        <span style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", fontSize: 11, fontWeight: 500, color: "#a5b4fc" }}>
          {suggestions.length} suggestions
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {suggestions.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ background: "#18181b", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 8 }}>Original</p>
              <p style={{ fontSize: 13, color: "#52525b", fontStyle: "italic", lineHeight: 1.6 }}>"{s.original}"</p>
            </div>
            <div style={{ background: "rgba(39,39,42,0.5)", padding: "16px 20px", position: "relative" }}
              onMouseEnter={e => { const btn = e.currentTarget.querySelector('button') as HTMLElement; if (btn) btn.style.opacity = "1"; }}
              onMouseLeave={e => { const btn = e.currentTarget.querySelector('button') as HTMLElement; if (btn) btn.style.opacity = "0"; }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", marginBottom: 8 }}>Improved</p>
              <p style={{ fontSize: 13.5, color: "#d4d4d8", lineHeight: 1.6, paddingRight: 40 }}>{s.improved}</p>
              <button onClick={() => copy(s.improved, i)}
                style={{ position: "absolute", top: 16, right: 16, width: 32, height: 32, borderRadius: 8, background: "#27272a", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0, transition: "opacity 0.15s" }}>
                {copied === i ? <span style={{ fontSize: 10, color: "#22c55e", fontWeight: 700 }}>✓</span> : <Copy size={13} color="#71717a" />}
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
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(56,189,248,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Tag size={15} color="#38bdf8" />
          </div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: "white" }}>Missing Keywords</h3>
        </div>
        <span style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", fontSize: 11, fontWeight: 500, color: "#a5b4fc" }}>
          {keywords.length} found
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {keywords.map((kw, i) => (
          <span key={i} style={{ padding: "5px 14px", borderRadius: 999, background: "rgba(39,39,42,0.5)", border: "1px solid rgba(255,255,255,0.07)", fontSize: 12.5, fontWeight: 500, color: "#a1a1aa", cursor: "default" }}>
            {kw}
          </span>
        ))}
      </div>
      <p style={{ fontSize: 12.5, color: "#52525b", lineHeight: 1.6 }}>
        Add these keywords naturally to your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
