"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { LayoutDashboard, FileText, ChevronRight, Zap, Trophy, ShieldCheck, BarChart3, Crown, Sparkles, Award } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    setResult(null);

    try {
      let resumeText = "";
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");

      if (file.type === "application/pdf") {
        resumeText = await parsePDFOnClient(file);
      } else {
        resumeText = await parseDOCXOnClient(file);
      }

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Analysis failed.");
      }

      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      console.error("ANALYSIS ERROR:", error);
      alert(`Analysis Failed: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-10 pb-20">
      <header className="pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-yellow-400/20 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-yellow-400">
            <Crown className="w-5 h-5" />
            <span className="text-[10px] uppercase tracking-widest font-black">Premium Intelligence</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-luxury font-bold tracking-tighter">
            <span className="gold-text">Elite</span> <span className="text-white/30 font-light italic">Analysis</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="glass-card px-6 py-4 rounded-2xl border border-yellow-400/30">
            <span className="text-[9px] text-white/40 block mb-1 uppercase font-bold tracking-widest">System Status</span>
            <span className="text-sm font-bold gold-text-static flex items-center gap-2">
              <div className="status-dot" />
              OPERATIONAL
            </span>
          </div>
          <div className="glass-card px-6 py-4 rounded-2xl border border-yellow-400/30">
            <span className="text-[9px] text-white/40 block mb-1 uppercase font-bold tracking-widest">Premium Tier</span>
            <span className="text-sm font-bold gold-text-static flex items-center gap-2">
              <Award className="w-4 h-4" />
              ACTIVE
            </span>
          </div>
        </div>
      </header>

      {!result && !isAnalyzing && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card-premium p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-yellow-400 w-6 h-6" />
                  <h2 className="text-2xl font-luxury font-bold gold-text-static">Document Upload</h2>
                </div>
                <p className="text-white/60 mb-10 leading-relaxed text-sm font-elegant">
                  Upload your professional document for comprehensive AI analysis. Our luxury-grade algorithms evaluate every nuance.
                </p>
                <FileUpload onFileSelect={handleFileSelect} />
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <div className="card-premium p-10 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-luxury font-bold gold-text-static">Target Position (Optional)</h3>
              </div>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target position description for precision alignment analysis..."
                className="input-luxury w-full h-64 resize-none font-elegant text-base leading-relaxed"
              />
              <div className="text-xs text-white/40 font-elegant">
                Providing a target position enhances our neural matching algorithms for superior results.
              </div>
            </div>
          </div>
        </div>
      )}

      {isAnalyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "ATS COMPATIBILITY", val: result.ats_score, icon: Zap, color: "text-yellow-400" },
              { label: "CONTENT EXCELLENCE", val: result.content_score, icon: Trophy, color: "text-yellow-500" },
              { label: "STRUCTURAL FLOW", val: result.format_score, icon: BarChart3, color: "text-yellow-300" },
              { label: "ROLE ALIGNMENT", val: result.job_match_percentage, icon: Crown, color: "text-yellow-600" }
            ].map((stat, i) => (
              <div key={i} className="card-premium p-8 relative group">
                <div className={cn("absolute top-8 right-8", stat.color)}>
                  <stat.icon className="w-6 h-6 opacity-60" />
                </div>
                <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] block mb-4 uppercase">{stat.label}</span>
                <div className="text-5xl font-luxury font-bold tracking-tighter gold-text mb-4">{stat.val}%</div>
                <div className="h-2 bg-black/40 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.val}%` }}
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10">
            <AnalysisPanel data={result} />
            <SuggestionsPanel suggestions={result.suggestions} />
            <KeywordsPanel keywords={result.missing_keywords} />
          </div>

          <div className="flex justify-center pt-20">
            <button onClick={() => setResult(null)} className="btn-outline-gold">
              <Crown className="w-5 h-5" />
              New Analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
