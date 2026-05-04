"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FileUpload from "@/components/dashboard/FileUpload";
import ScoreCards from "@/components/dashboard/ScoreCards";
import { AnalysisPanel, SuggestionsPanel, KeywordsPanel } from "@/components/dashboard/AnalysisPanel";
import { AnalysisResult, mockAnalysisData } from "@/lib/types";
import { LayoutDashboard, Sparkles, Target, FileText } from "lucide-react";
import { AnalysisSkeleton } from "@/components/dashboard/Skeleton";

export default function Dashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    
    try {
      let resumeText = "";
      console.log("Loading parsers...");
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      
      console.log("Parsing on client...");
      
      if (file.type === "application/pdf") {
        resumeText = await parsePDFOnClient(file);
      } else {
        resumeText = await parseDOCXOnClient(file);
      }

      console.log("Text extracted, sending to AI...");

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeText,
          jobDescription
        }),
      });

      if (!response.ok) throw new Error("Neural Engine failed to respond.");

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred during analysis. Using mock data for demo.");
      setResult(mockAnalysisData);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-white/5 pb-10">
        <div>
          <div className="mono text-secondary mb-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            System / Dashboard / Live
          </div>
          <h1 className="text-5xl font-bold tracking-tighter font-heading mb-4">
            Analysis <br /> Terminal.
          </h1>
          <p className="text-white/40 max-w-md font-body">
            Central command for resume optimization. Upload your credentials below to begin structural analysis.
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <div className="px-6 py-3 border border-white/5 bg-white/[0.02] flex items-center gap-4">
            <span className="mono text-[10px] text-white/30">Auth Status</span>
            <span className="mono text-emerald-500 font-bold">Verified</span>
          </div>
          <div className="px-6 py-3 border border-white/5 bg-white/[0.02] flex items-center gap-4">
            <span className="mono text-[10px] text-white/30">Analysis Credits</span>
            <span className="mono text-white font-bold">03 // 100</span>
          </div>
        </div>
      </header>

      {!result ? (
        <>
          {isAnalyzing ? (
            <AnalysisSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-2">
                <FileUpload onFileSelect={handleFileSelect} isLoading={isAnalyzing} />
              </div>
              
              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] glass border-white/5 h-full">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Target className="text-primary w-5 h-5" />
                    Target Job (Optional)
                  </h3>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here for a tailored analysis..."
                    className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                  />
                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                    Adding a job description helps our AI identify missing keywords and specific role relevance.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-12"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="text-primary" />
              Analysis Results
            </h2>
            <button 
              onClick={() => setResult(null)}
              className="px-6 py-2.5 rounded-xl glass hover:bg-white/5 text-sm font-bold transition-all"
            >
              Analyze Another Resume
            </button>
          </div>

          <ScoreCards data={result} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnalysisPanel data={result} />
              <SuggestionsPanel suggestions={result.suggestions} />
            </div>
            <div className="lg:col-span-1">
              <KeywordsPanel keywords={result.missing_keywords} />
              
              {/* Additional Insights Card */}
              <div className="p-8 rounded-[2rem] gradient-bg relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                <div className="relative z-10 text-white">
                  <h3 className="text-lg font-bold mb-4">Pro Tip</h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-6">
                    Resumes with quantified achievements (e.g., "Increased sales by 20%") have a 3x higher interview rate than those that just list responsibilities.
                  </p>
                  <button className="w-full py-3 rounded-xl bg-white text-primary font-bold text-sm hover:scale-105 transition-transform">
                    Learn More Achieving Impact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
