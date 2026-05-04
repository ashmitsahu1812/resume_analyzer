"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { LayoutDashboard, FileText, ChevronRight, Zap, Trophy, ShieldCheck, BarChart3 } from "lucide-react";
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
        throw new Error(errorData.error || "Diagnostics failed.");
      }

      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      console.error("DIAGNOSTICS ERROR:", error);
      alert(`Diagnostics Failed: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 md:px-10 pb-20">
      <header className="pt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-black">Professional Grade</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Project <span className="opacity-30">Analysis.</span></h1>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="glass-card px-6 py-3 rounded-2xl">
            <span className="text-[9px] text-white/30 block mb-1 uppercase font-bold tracking-widest">System Status</span>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OPERATIONAL
            </span>
          </div>
        </div>
      </header>

      {!result && !isAnalyzing && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="text-emerald-400" />
                Source File
              </h2>
              <p className="text-white/40 mb-10 leading-relaxed text-sm">
                Upload your curriculum vitae for deep structural analysis. Our engine evaluates impact, semantic density, and alignment.
              </p>
              <FileUpload onFileSelect={handleFileSelect} />
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <div className="glass-card p-10 rounded-[2.5rem] space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">Target Alignment (Optional)</h3>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target job description here for precision alignment..."
                className="w-full h-64 bg-white/5 border border-white/5 rounded-3xl p-8 text-sm focus:border-white/20 outline-none transition-all resize-none font-medium leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {isAnalyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "ATS PARSEABILITY", val: result.ats_score, icon: Zap, color: "text-amber-400" },
              { label: "IMPACT DEPTH", val: result.content_score, icon: Trophy, color: "text-emerald-400" },
              { label: "STRUCTURAL FLOW", val: result.format_score, icon: BarChart3, color: "text-blue-400" },
              { label: "ROLE ALIGNMENT", val: result.job_match_percentage, icon: Trophy, color: "text-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-8 rounded-[2rem] relative group">
                <div className={cn("absolute top-8 right-8", stat.color)}>
                  <stat.icon className="w-5 h-5 opacity-40" />
                </div>
                <span className="text-[10px] font-bold text-white/30 tracking-[0.2em] block mb-4">{stat.label}</span>
                <div className="text-5xl font-bold tracking-tighter text-white">{stat.val}%</div>
                <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: `${stat.val}%` }} 
                    className={cn("h-full bg-current", stat.color.replace('text-', 'bg-'))} 
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
            <button onClick={() => setResult(null)} className="btn-glass">
              Restart Diagnostics
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
