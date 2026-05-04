"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Strengths */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
        className="panel rounded-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span className="cyber-label text-cyan-400">Strengths</span>
        </div>
        <ul className="space-y-3">
          {data.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span className="text-cyan-400/40 font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Weaknesses */}
      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
        className="panel rounded-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <AlertCircle className="w-4 h-4 text-orange-400" />
          <span className="cyber-label text-orange-400">Improvements</span>
        </div>
        <ul className="space-y-3">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
              <span className="text-orange-400/40 font-mono text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              {w}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function SuggestionsPanel({ suggestions }: { suggestions: Suggestion[] }) {
  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div className="panel rounded-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span className="cyber-label text-cyan-400">AI Rewrites</span>
        <span className="ml-auto tag-cyber">{suggestions.length} suggestions</span>
      </div>

      <div className="space-y-px bg-cyan-400/10">
        {suggestions.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 bg-[#020408]"
          >
            <div className="p-5 border-r border-cyan-400/10">
              <p className="cyber-label mb-2 text-slate-700">Original</p>
              <p className="text-sm text-slate-600 italic leading-relaxed">"{s.original}"</p>
            </div>
            <div className="p-5 relative group">
              <p className="cyber-label mb-2 text-cyan-400/60">Improved</p>
              <p className="text-sm text-slate-300 leading-relaxed pr-8">{s.improved}</p>
              <button onClick={() => copy(s.improved)}
                className="absolute top-5 right-5 w-7 h-7 border border-cyan-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-cyan-400/50">
                <Copy className="w-3 h-3 text-cyan-400" />
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
    <div className="panel rounded-sm p-6">
      <div className="flex items-center gap-2 mb-5">
        <Tag className="w-4 h-4 text-cyan-400" />
        <span className="cyber-label text-cyan-400">Missing Keywords</span>
        <span className="ml-auto tag-cyber">{keywords.length} found</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((kw, i) => (
          <span key={i} className="tag-cyber cursor-default">{kw}</span>
        ))}
      </div>
      <p className="text-xs text-slate-700 mt-4">
        Integrate these keywords naturally into your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
