"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult } from "@/lib/types";
import { LayoutDashboard, FileText, ChevronRight } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";

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
    <div className="space-y-12">
      <header className="space-y-4 border-b border-white/5 pb-8">
        <div className="flex items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase tracking-widest font-bold">Standard / Diagnostics</span>
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-white">Project <span className="text-white/30 italic">Report.</span></h1>
      </header>

      {!result && !isAnalyzing && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="glass p-8 rounded-none border-l-2 border-l-white">
              <h2 className="text-xl font-bold mb-4">Input Parameters</h2>
              <p className="text-sm text-white/40 mb-8 leading-relaxed">
                Provide your document for precision analysis. We will evaluate structure, impact, and semantic alignment.
              </p>
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30">Target Role (Optional)</h3>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the target job description here for alignment diagnostics..."
                className="w-full h-48 bg-white/5 border border-white/5 p-6 text-sm focus:border-white/20 outline-none transition-all resize-none font-light"
              />
            </div>
          </div>
        </div>
      )}

      {isAnalyzing && <AnalysisSkeleton />}

      {result && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "ATS PARSEABILITY", val: result.ats_score },
              { label: "IMPACT DEPTH", val: result.content_score },
              { label: "STRUCTURAL FLOW", val: result.format_score },
              { label: "ROLE ALIGNMENT", val: result.job_match_percentage }
            ].map((stat, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02]">
                <span className="text-[9px] font-bold text-white/30 tracking-[0.2em] block mb-4">{stat.label}</span>
                <div className="text-4xl font-bold tracking-tighter">{stat.val}%</div>
              </div>
            ))}
          </div>

          <AnalysisPanel data={result} />
          <SuggestionsPanel suggestions={result.suggestions} />
          <KeywordsPanel keywords={result.missing_keywords} />

          <div className="flex justify-center pt-20">
            <button onClick={() => setResult(null)} className="button-outline">
              New Diagnostics
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
