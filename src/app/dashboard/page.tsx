"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { Zap, Trophy, BarChart3, Target, RotateCcw } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";
import { cn } from "@/lib/utils";

const scoreColor = (v: number) => v >= 80 ? "#34c759" : v >= 60 ? "#ff9500" : "#ff3b30";

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
    <div className="max-w-4xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[28px] font-bold text-[#1d1d1f] tracking-tight mb-1">Resume Analysis</h1>
        <p className="text-[15px] text-[#6e6e73]">Upload your resume to get an instant AI-powered analysis.</p>
      </div>

      {/* Upload state */}
      {!result && !analyzing && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5"
        >
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6 h-full">
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">Upload Resume</p>
              <p className="label mb-5">PDF or DOCX, up to 10MB</p>
              <FileUpload onFileSelect={handleFile} />
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[18px] border border-black/5 shadow-sm p-6 h-full">
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">Job Description</p>
              <p className="label mb-5">Optional — improves match scoring</p>
              <textarea
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                placeholder="Paste the job description here..."
                className="input-apple h-52 text-[14px]"
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-[18px] border border-black/5 shadow-sm p-5"
              >
                <p className="label mb-3">{s.label}</p>
                <p className="text-[2rem] font-bold tracking-tight mb-0.5"
                  style={{ color: scoreColor(s.val) }}>
                  {s.val}<span className="text-[1rem] font-normal text-[#aeaeb2]">%</span>
                </p>
                <p className="text-[12px] text-[#aeaeb2]">{s.desc}</p>
                <div className="progress-track mt-3">
                  <motion.div
                    className="progress-fill"
                    style={{ background: scoreColor(s.val) }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.val}%` }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <AnalysisPanel data={result} />
          <SuggestionsPanel suggestions={result.suggestions} />
          <KeywordsPanel keywords={result.missing_keywords} />

          <div className="flex justify-center pt-6 pb-10">
            <button onClick={() => setResult(null)} className="btn-ghost">
              <RotateCcw className="w-4 h-4" />
              Start new analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
