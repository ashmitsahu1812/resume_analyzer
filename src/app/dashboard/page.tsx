"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { Zap, Trophy, BarChart3, Target, RotateCcw, Activity } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";
import { cn } from "@/lib/utils";
import { motion as m } from "framer-motion";

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
    { label: "ATS Score", val: result.ats_score, icon: Zap },
    { label: "Content", val: result.content_score, icon: Trophy },
    { label: "Format", val: result.format_score, icon: BarChart3 },
    { label: "Job Match", val: result.job_match_percentage, icon: Target },
  ] : [];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 pb-6 border-b border-cyan-400/10">
        <div>
          <p className="cyber-label text-cyan-400/60 mb-2">// Resume Intelligence</p>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">
            Analysis <span className="neon">Engine</span>
          </h1>
        </div>
        <div className="status-online">
          <div className="status-dot" />
          AI Ready
        </div>
      </div>

      {/* Upload state */}
      {!result && !analyzing && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="panel rounded-sm p-6 h-full">
              <p className="cyber-label mb-4">01 // Upload Resume</p>
              <FileUpload onFileSelect={handleFile} />
            </motion.div>
          </div>
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }} className="panel rounded-sm p-6 h-full">
              <p className="cyber-label mb-4">02 // Target Job Description <span className="text-slate-700 normal-case tracking-normal font-normal">(optional)</span></p>
              <textarea
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                placeholder="Paste the job description here for precision match scoring..."
                className="input-cyber rounded-sm h-48 font-mono text-sm"
              />
              <p className="text-xs text-slate-700 mt-3">
                Adding a job description enables semantic match scoring and targeted keyword analysis.
              </p>
            </motion.div>
          </div>
        </div>
      )}

      {analyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          {/* Score cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cyan-400/10 border border-cyan-400/10">
            {scores.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#020408] p-6 relative group hover:bg-[#060d14] transition-colors"
              >
                <div className="absolute top-0 left-0 w-3 h-px bg-cyan-400/50" />
                <div className="absolute top-0 left-0 w-px h-3 bg-cyan-400/50" />
                <div className="flex items-center justify-between mb-3">
                  <span className="cyber-label">{s.label}</span>
                  <s.icon className="w-3.5 h-3.5 text-cyan-400/40" />
                </div>
                <div className="text-4xl font-black font-mono text-white mb-3">
                  {s.val}<span className="text-lg text-slate-600">%</span>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${s.val}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Panels */}
          <AnalysisPanel data={result} />
          <SuggestionsPanel suggestions={result.suggestions} />
          <KeywordsPanel keywords={result.missing_keywords} />

          {/* Reset */}
          <div className="flex justify-center pt-8">
            <button onClick={() => setResult(null)} className="btn-cyber">
              <RotateCcw className="w-4 h-4" />
              New Analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
