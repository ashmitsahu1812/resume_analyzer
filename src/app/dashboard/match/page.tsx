"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, FileText, ArrowRight, CheckCircle, AlertTriangle, Cpu } from "lucide-react";
import FileUpload from "@/components/dashboard/FileUpload";
import { AnalysisResult, mockAnalysisData } from "@/lib/types";

export default function JobMatchPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleMatch = async () => {
    if (!file || !jobDescription) return;
    
    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("jobDescription", jobDescription);

      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Match analysis failed");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult(mockAnalysisData);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 pb-20">
      <header className="border-b border-white/5 pb-10">
        <div className="mono text-primary mb-2 flex items-center gap-2">
            <Cpu className="w-3 h-3" />
            Neural Match Engine
        </div>
        <h1 className="text-5xl font-bold tracking-tighter font-heading">
          Job <br /> Alignment.
        </h1>
        <p className="text-white/40 max-w-md mt-4">
          Upload your resume and paste the target job description to calculate your structural alignment score.
        </p>
      </header>

      {!result ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-1 border-b border-white/5 pb-4">
              <span className="mono text-[10px] text-white/20 uppercase tracking-widest">Step 01 // Credentials</span>
            </div>
            <FileUpload onFileSelect={(f) => setFile(f)} isLoading={isAnalyzing} />
          </div>

          <div className="space-y-8">
            <div className="p-1 border-b border-white/5 pb-4">
              <span className="mono text-[10px] text-white/20 uppercase tracking-widest">Step 02 // Target Parameters</span>
            </div>
            <div className="p-8 rounded-xl glass border-white/5 space-y-6">
               <div className="flex items-center justify-between">
                  <h3 className="font-bold font-heading uppercase text-sm">Job Description</h3>
                  <Target className="w-4 h-4 text-primary" />
               </div>
               <textarea 
                 value={jobDescription}
                 onChange={(e) => setJobDescription(e.target.value)}
                 placeholder="Paste the full job description here..."
                 className="w-full h-64 bg-white/[0.02] border border-white/5 rounded-lg p-6 text-sm focus:outline-none focus:border-primary/30 transition-all font-body resize-none"
               />
               <button 
                 onClick={handleMatch}
                 disabled={!file || !jobDescription || isAnalyzing}
                 className="w-full py-5 button-primary rounded-sm text-xs uppercase tracking-[0.2em] disabled:opacity-30 flex items-center justify-center gap-3"
               >
                 {isAnalyzing ? "Processing..." : "Execute Alignment"}
                 <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Match Score Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 p-12 rounded-xl gradient-bg flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
               <div className="relative z-10 space-y-4">
                  <span className="mono text-[10px] text-primary">Compatibility Rating</span>
                  <div className="text-8xl font-black font-heading tracking-tighter gold-glow">
                    {result.skills_match}%
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Highly Compatible</p>
               </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-8 rounded-xl glass border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle className="text-emerald-500 w-4 h-4" />
                    </div>
                    <h3 className="font-bold font-heading">Key Strengths</h3>
                  </div>
                  <ul className="space-y-4">
                    {result.summary.split(". ").slice(0, 3).map((point, i) => (
                      <li key={i} className="text-sm text-white/50 flex gap-3">
                        <span className="text-emerald-500 font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="p-8 rounded-xl glass border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="text-amber-500 w-4 h-4" />
                    </div>
                    <h3 className="font-bold font-heading">Missing Links</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.missing_keywords.map((kw, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] mono uppercase text-white/60">
                        {kw}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Detailed Analysis Section */}
          <div className="p-10 rounded-xl glass border-white/5 space-y-8">
             <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <h3 className="text-xl font-bold font-heading uppercase tracking-tight">Alignment Methodology</h3>
                <span className="mono text-[10px] text-white/20">Analysis Hash: 0X7F2A...</span>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-4">
                   <h4 className="mono text-[11px] text-primary">01 // Semantic Match</h4>
                   <p className="text-sm text-white/40 leading-relaxed">Our AI parses the semantic intent of your experience against the job responsibilities to ensure conceptual alignment.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="mono text-[11px] text-primary">02 // Keyword Density</h4>
                   <p className="text-sm text-white/40 leading-relaxed">Analysis of technical keyword occurrences and their context within your resume compared to the job description.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="mono text-[11px] text-primary">03 // Role Proximity</h4>
                   <p className="text-sm text-white/40 leading-relaxed">Calculating the distance between your current career trajectory and the requirements of the target position.</p>
                </div>
             </div>
             
             <div className="pt-8 flex justify-center">
                <button 
                  onClick={() => setResult(null)}
                  className="px-10 py-4 button-secondary rounded-sm text-xs uppercase tracking-[0.2em] font-bold"
                >
                  Analyze New Alignment
                </button>
             </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
