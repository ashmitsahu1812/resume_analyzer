"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, Tag } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";
import { useState } from "react";

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-7 h-7 rounded-full bg-[#34c759]/10 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-[#34c759]" />
          </div>
          <h3 className="text-[15px] font-semibold text-[#1d1d1f]">Strengths</h3>
        </div>
        <ul className="space-y-3">
          {data.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-[14px] text-[#3a3a3c] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34c759] mt-2 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-7 h-7 rounded-full bg-[#ff9500]/10 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-[#ff9500]" />
          </div>
          <h3 className="text-[15px] font-semibold text-[#1d1d1f]">Improvements</h3>
        </div>
        <ul className="space-y-3">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="flex gap-3 text-[14px] text-[#3a3a3c] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff9500] mt-2 shrink-0" />
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
    <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#af52de]/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#af52de]" />
          </div>
          <h3 className="text-[15px] font-semibold text-[#1d1d1f]">AI Rewrites</h3>
        </div>
        <span className="tag tag-blue text-[12px]">{suggestions.length} suggestions</span>
      </div>

      <div className="space-y-4">
        {suggestions.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-[14px] border border-black/5 overflow-hidden"
          >
            <div className="bg-[#fbfbfd] px-5 py-4 border-b border-black/5">
              <p className="label mb-1.5">Original</p>
              <p className="text-[13px] text-[#6e6e73] italic leading-relaxed">"{s.original}"</p>
            </div>
            <div className="px-5 py-4 relative group">
              <p className="label mb-1.5 text-[#0071e3]">Improved</p>
              <p className="text-[14px] text-[#1d1d1f] leading-relaxed pr-10">{s.improved}</p>
              <button
                onClick={() => copy(s.improved, i)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
              >
                {copied === i
                  ? <span className="text-[10px] text-[#34c759] font-bold">✓</span>
                  : <Copy className="w-3.5 h-3.5 text-[#6e6e73]" />
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
    <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
            <Tag className="w-4 h-4 text-[#0071e3]" />
          </div>
          <h3 className="text-[15px] font-semibold text-[#1d1d1f]">Missing Keywords</h3>
        </div>
        <span className="tag tag-blue text-[12px]">{keywords.length} found</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((kw, i) => (
          <span key={i} className="tag text-[13px]">{kw}</span>
        ))}
      </div>
      <p className="text-[13px] text-[#aeaeb2] mt-3">
        Add these keywords naturally to your experience and skills sections to improve ATS compatibility.
      </p>
    </div>
  );
}
