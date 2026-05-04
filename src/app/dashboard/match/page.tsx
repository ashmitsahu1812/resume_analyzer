"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Search, Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { parsePDFOnClient, parseDOCXOnClient } from "@/lib/utils/client-parser";

export default function JobMatchPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResult, setMatchResult] = useState<any>(null);

  const handleMatch = async () => {
    if (!resumeFile || !jobDescription) return;
    setIsAnalyzing(true);

    try {
      let resumeText = "";
      const { parsePDFOnClient, parseDOCXOnClient } = await import("@/lib/utils/client-parser");
      
      if (resumeFile.type === "application/pdf") {
        resumeText = await parsePDFOnClient(resumeFile);
      } else {
        resumeText = await parseDOCXOnClient(resumeFile);
      }

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, jobDescription }),
      });

      if (!response.ok) throw new Error("Match Engine failed");
      const data = await response.json();
      setMatchResult(data);
    } catch (error: any) {
      alert(`Matching failed: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-10">
      <header>
        <div className="flex items-center gap-3 text-amber-500 mb-4">
          <Target className="w-5 h-5" />
          <span className="mono text-xs uppercase tracking-[0.3em]">Neural System / Alignment</span>
        </div>
        <h1 className="text-6xl font-bold tracking-tighter text-white">Neural Job <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Matching.</span></h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-8">
          <div className="glass rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Upload className="w-5 h-5 text-amber-500" />
              Upload Resume
            </h3>
            <input
              type="file"
              id="match-resume"
              className="hidden"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
            />
            <label
              htmlFor="match-resume"
              className={cn(
                "w-full h-32 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all",
                resumeFile ? "border-amber-500/50 bg-amber-500/5" : "border-white/10 hover:border-amber-500/30 hover:bg-white/5"
              )}
            >
              <FileText className={cn("w-8 h-8 mb-2", resumeFile ? "text-amber-500" : "text-zinc-600")} />
              <span className="text-sm font-medium">{resumeFile ? resumeFile.name : "Select Resume (PDF/DOCX)"}</span>
            </label>
          </div>

          <div className="glass rounded-3xl p-8 border border-white/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-500" />
              Target Job Description
            </h3>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-64 bg-black/40 border border-white/10 rounded-2xl p-4 focus:border-amber-500/50 outline-none transition-all resize-none text-sm leading-relaxed"
            />
          </div>

          <button
            onClick={handleMatch}
            disabled={isAnalyzing || !resumeFile || !jobDescription}
            className="w-full py-4 button-primary uppercase tracking-[0.2em] font-bold text-xs disabled:opacity-50"
          >
            {isAnalyzing ? "Calculating Alignment..." : "Run Matching Engine"}
          </button>
        </div>

        {/* Results */}
        <div className="space-y-8">
          {matchResult ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="glass rounded-3xl p-10 border border-amber-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                  <div className="text-6xl font-black text-amber-500/10">MATCH</div>
                </div>
                <div className="relative z-10">
                  <div className="text-7xl font-bold tracking-tighter text-amber-500 mb-2">{matchResult.job_match_percentage}%</div>
                  <div className="text-zinc-400 font-medium">Neural Alignment Score</div>
                  
                  <div className="mt-10 h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${matchResult.job_match_percentage}%` }}
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Strengths</div>
                  <ul className="space-y-3">
                    {matchResult.strengths.slice(0, 3).map((s: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-2xl p-6 border border-white/5">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">Gaps</div>
                  <ul className="space-y-3">
                    {matchResult.missing_keywords.slice(0, 3).map((k: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                        <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/5 rounded-3xl">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-zinc-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Analysis Yet</h3>
              <p className="text-zinc-500 text-sm max-w-xs">Upload your resume and paste a job description to see your alignment score.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
