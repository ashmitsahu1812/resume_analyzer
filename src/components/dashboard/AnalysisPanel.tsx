"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Sparkles, Copy, ChevronRight } from "lucide-react";
import { AnalysisResult, Suggestion } from "@/lib/types";

export function AnalysisPanel({ data }: { data: AnalysisResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Strengths */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-500">
          <CheckCircle2 className="w-6 h-6" />
          Strengths
        </h3>
        <ul className="space-y-4">
          {data.strengths.map((s, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Weaknesses */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-[2rem] bg-rose-500/5 border border-rose-500/10"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-rose-500">
          <AlertCircle className="w-6 h-6" />
          Areas for Improvement
        </h3>
        <ul className="space-y-4">
          {data.weaknesses.map((w, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              {w}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function SuggestionsPanel({ suggestions }: { suggestions: Suggestion[] }) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="space-y-6 mb-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="text-primary" />
          Smart Rewrites
        </h3>
        <span className="px-4 py-1.5 rounded-full glass text-xs font-bold uppercase tracking-wider text-primary border-primary/20">
          AI Generated
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {suggestions.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-[2rem] glass overflow-hidden border-white/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-r border-white/5 bg-white/[0.02]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Original</span>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "{s.original}"
                </p>
              </div>
              <div className="p-8 relative group">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Improved Version</span>
                <p className="text-sm font-medium leading-relaxed pr-10">
                  {s.improved}
                </p>
                <button 
                  onClick={() => handleCopy(s.improved)}
                  className="absolute top-8 right-8 p-2 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function KeywordsPanel({ keywords }: { keywords: string[] }) {
  return (
    <div className="p-8 rounded-[2rem] glass border-white/5 mb-12">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <ChevronRight className="text-primary" />
        Missing Keywords
      </h3>
      <div className="flex flex-wrap gap-3">
        {keywords.map((kw, i) => (
          <span 
            key={i} 
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
          >
            {kw}
          </span>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground italic">
        Include these keywords naturally in your experience or skills section to improve your ATS score.
      </p>
    </div>
  );
}
