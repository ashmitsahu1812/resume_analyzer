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
    <div className="max-w-5xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white tracking-tight mb-1.5">Resume Analysis</h1>
        <p className="text-[14px] text-zinc-500">Upload your resume to get an instant AI-powered analysis and optimization report.</p>
      </div>

      {/* Upload state */}
      {!result && !analyzing && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-white/8 bg-zinc-900/50 p-6">
              <p className="text-[13px] font-semibold text-white mb-0.5">Upload Resume</p>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-600 mb-5">PDF or DOCX · Max 10MB</p>
              <FileUpload onFileSelect={handleFile} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-white/8 bg-zinc-900/50 p-6 flex flex-col">
              <p className="text-[13px] font-semibold text-white mb-0.5">Job Description</p>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-zinc-600 mb-5">Optional — enables match scoring</p>
              <textarea
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                placeholder="Paste the job description here to get a precise match score and targeted keyword analysis..."
                className="flex-1 min-h-[200px] w-full rounded-xl border border-white/8 bg-zinc-800/50 px-4 py-3 text-[13.5px] text-zinc-200 placeholder-zinc-600 outline-none resize-none leading-relaxed transition-all focus:border-indigo-500/50 focus:bg-zinc-800 focus:ring-2 focus:ring-indigo-500/15"
              />
            </div>
          </div>
        </motion.div>
      )}

      {analyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
          {/* Score cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {scores.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/8 bg-zinc-900/50 p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600">{s.label}</p>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${scoreColor(s.val)}18` }}>
                    <s.icon className="w-3.5 h-3.5" style={{ color: scoreColor(s.val) }} />
                  </div>
                </div>
                <p className="text-[2rem] font-bold tracking-tight leading-none mb-1"
                  style={{ color: scoreColor(s.val) }}>
                  {s.val}<span className="text-base font-normal text-zinc-700">%</span>
                </p>
                <p className="text-[11px] text-zinc-600 mb-3">{s.desc}</p>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: scoreColor(s.val) }}
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

          <div className="flex justify-center pt-6 pb-10">
            <button onClick={() => setResult(null)}
              className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-zinc-400 rounded-lg border border-white/8 hover:border-white/15 hover:text-white hover:bg-white/5 transition-all">
              <RotateCcw className="w-4 h-4" />
              Start new analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
