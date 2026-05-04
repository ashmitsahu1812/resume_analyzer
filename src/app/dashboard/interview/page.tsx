"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, BookOpen, Brain, Terminal, ShieldCheck } from "lucide-react";

export default function InterviewPrepPage() {
  return (
    <div className="space-y-16 pb-20">
      <header className="border-b border-white/5 pb-10">
        <div className="mono text-primary mb-2 flex items-center gap-2">
            <Terminal className="w-3 h-3" />
            Interview Simulation Mode
        </div>
        <h1 className="text-5xl font-bold tracking-tighter font-heading">
          Interview <br /> Readiness.
        </h1>
        <p className="text-white/40 max-w-md mt-4">
          Generate custom interview questions and high-impact responses based on your analyzed resume profile.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Question List Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
               <span className="mono text-[10px] text-white/20 uppercase tracking-widest">Predicted Questions // Batch 01</span>
               <span className="px-3 py-1 bg-primary/10 rounded-full text-[9px] mono text-primary font-bold">Top Match</span>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Can you walk me through a technical challenge where you demonstrated leadership?",
                  category: "Behavioral",
                  focus: "Leadership & Impact"
                },
                {
                  q: "How would you explain the architecture of your most recent project to a non-technical stakeholder?",
                  category: "Communication",
                  focus: "Clarity & Translation"
                },
                {
                  q: "Describe a situation where you had to manage conflicting priorities from multiple managers.",
                  category: "Adaptability",
                  focus: "Resilience"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-xl glass border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="mono text-[9px] text-primary bg-primary/5 px-2 py-1 rounded-sm">{item.category}</span>
                    <span className="mono text-[9px] text-white/20">Ref: 01-{i}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4 leading-tight group-hover:text-primary transition-colors">
                    "{item.q}"
                  </h3>
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Focus Area:</span>
                    <span className="text-[10px] text-white/60 font-black tracking-widest uppercase">{item.focus}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-1 border-b border-white/5 pb-4">
             <span className="mono text-[10px] text-white/20 uppercase tracking-widest">Aura Intelligence</span>
          </div>

          <div className="p-8 rounded-xl bg-primary relative overflow-hidden group">
             <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
             <div className="relative z-10 text-black">
                <Brain className="w-8 h-8 mb-6 text-black/40" />
                <h3 className="text-lg font-black font-heading mb-4 uppercase tracking-tight leading-none">Response <br /> Strategy</h3>
                <p className="text-sm font-bold opacity-80 leading-relaxed mb-8">
                  Focus on the **STAR** method (Situation, Task, Action, Result). For your profile, emphasize quantifying the "Result" to align with your high data-score.
                </p>
                <button className="w-full py-3 bg-black text-white rounded-sm text-[10px] mono uppercase tracking-widest font-bold group-hover:scale-105 transition-transform">
                  View Full Playbook
                </button>
             </div>
          </div>

          <div className="p-8 rounded-xl glass border-white/5 space-y-6">
             <div className="flex items-center gap-3">
                <ShieldCheck className="text-secondary w-5 h-5" />
                <h3 className="font-bold font-heading uppercase text-xs tracking-widest">Confidence Score</h3>
             </div>
             <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-3/4 rounded-full" />
             </div>
             <p className="text-[10px] text-white/30 leading-relaxed">
               Based on your current resume alignment, we predict a **75%** success rate for these behavioral modules.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
