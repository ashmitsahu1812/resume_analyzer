"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";
import { useState } from "react";

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/12 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Strengths</h3>
        </div>
        <ul className="space-y-3">
          {data.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-[13.5px] text-zinc-400 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mt-2 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-lg bg-amber-500/12 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-amber-400" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Improvements</h3>
        </div>
        <ul className="space-y-3">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="flex gap-3 text-[13.5px] text-zinc-400 leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-2 shrink-0" />
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
    <div className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-violet-500/12 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-violet-400" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">AI Rewrites</h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/12 border border-indigo-500/20 text-[11px] font-medium text-indigo-400">
          {suggestions.length} suggestions
        </span>
      </div>

      <div className="space-y-3">
        {suggestions.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-white/5 overflow-hidden">
            <div className="bg-zinc-900 px-5 py-4 border-b border-white/5">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-2">Original</p>
              <p className="text-[13px] text-zinc-500 italic leading-relaxed">"{s.original}"</p>
            </div>
            <div className="bg-zinc-800/50 px-5 py-4 relative group">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-indigo-400 mb-2">Improved</p>
              <p className="text-[13.5px] text-zinc-200 leading-relaxed pr-10">{s.improved}</p>
              <button onClick={() => copy(s.improved, i)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-700 hover:bg-zinc-600 border border-white/8 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                {copied === i
                  ? <span className="text-[10px] text-emerald-400 font-bold">✓</span>
                  : <Copy className="w-3.5 h-3.5 text-zinc-400" />
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
    <div className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-500/12 flex items-center justify-center">
            <Tag className="w-4 h-4 text-sky-400" />
          </div>
          <h3 className="text-[14px] font-semibold text-white">Missing Keywords</h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-indigo-500/12 border border-indigo-500/20 text-[11px] font-medium text-indigo-400">
          {keywords.length} found
        </span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((kw, i) => (
          <span key={i}
            className="px-3 py-1.5 rounded-full border border-white/8 bg-zinc-800/50 text-[12.5px] font-medium text-zinc-400 hover:border-white/15 hover:text-zinc-200 transition-all cursor-default">
            {kw}
          </span>
        ))}
      </div>
      <p className="text-[12.5px] text-zinc-600 leading-relaxed">
        Add these keywords naturally to your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
