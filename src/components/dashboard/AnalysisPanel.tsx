"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";
import { useState } from "react";

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="card p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-[#22c55e]/12 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Strengths</h3>
        </div>
        <ul className="space-y-3">
          {data.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-[13.5px] text-[#a0a0a0] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]/60 mt-2 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="card p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/12 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-[#f59e0b]" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Improvements</h3>
        </div>
        <ul className="space-y-3">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="flex gap-3 text-[13.5px] text-[#a0a0a0] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/60 mt-2 shrink-0" />
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
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#a78bfa]/12 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#a78bfa]" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">AI Rewrites</h3>
        </div>
        <span className="badge badge-purple">{suggestions.length} suggestions</span>
      </div>

      <div className="space-y-3">
        {suggestions.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-white/5 overflow-hidden"
          >
            <div className="bg-[#161616] px-5 py-4 border-b border-white/5">
              <p className="label-xs mb-2">Original</p>
              <p className="text-[13px] text-[#555] italic leading-relaxed">"{s.original}"</p>
            </div>
            <div className="px-5 py-4 relative group bg-[#1a1a1a]">
              <p className="label-xs mb-2 text-indigo-400">Improved</p>
              <p className="text-[13.5px] text-[#d0d0d0] leading-relaxed pr-10">{s.improved}</p>
              <button
                onClick={() => copy(s.improved, i)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] border border-white/5 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                {copied === i
                  ? <span className="text-[10px] text-[#22c55e] font-bold">✓</span>
                  : <Copy className="w-3.5 h-3.5 text-[#555]" />
                }
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
    <div className="card p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/12 flex items-center justify-center">
            <Tag className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Missing Keywords</h3>
        </div>
        <span className="badge badge-purple">{keywords.length} found</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((kw, i) => (
          <span key={i} className="tag text-[12.5px]">{kw}</span>
        ))}
      </div>
      <p className="text-[12.5px] text-[#444] mt-4 leading-relaxed">
        Add these keywords naturally to your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
