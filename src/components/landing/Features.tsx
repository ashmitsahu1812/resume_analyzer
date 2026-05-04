"use client";

import { motion } from "framer-motion";
import { Zap, Target, MessageSquare, BarChart3, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Zap, color: "#818cf8", bg: "rgba(99,102,241,0.12)", title: "Instant ATS Scoring", desc: "Get a precise ATS compatibility score in seconds. Know exactly how automated systems rank your resume before a human ever sees it." },
  { icon: Target, color: "#fbbf24", bg: "rgba(251,191,36,0.12)", title: "Job Match Analysis", desc: "Paste any job description and see a semantic match score. Understand exactly which skills and keywords are missing from your resume." },
  { icon: Sparkles, color: "#c084fc", bg: "rgba(192,132,252,0.12)", title: "AI Bullet Rewrites", desc: "Our AI rewrites your experience bullets to be more impactful — adding quantifiable metrics, stronger action verbs, and clarity." },
  { icon: MessageSquare, color: "#34d399", bg: "rgba(52,211,153,0.12)", title: "Interview Simulator", desc: "Generate tailored behavioral and technical questions based on your resume and target role. Practice with real AI feedback." },
  { icon: Shield, color: "#f87171", bg: "rgba(248,113,113,0.12)", title: "Keyword Injection", desc: "Identify missing industry keywords and get contextual suggestions to integrate them naturally into your resume." },
  { icon: BarChart3, color: "#38bdf8", bg: "rgba(56,189,248,0.12)", title: "Score Tracking", desc: "Track your resume score across multiple versions. See exactly which edits moved the needle on your ATS compatibility." },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-[#09090b]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400 mb-4">
            Features
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Everything you need<br />to land the interview.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-[480px] mx-auto leading-relaxed">
            Aura combines multiple AI models to give you the most comprehensive resume analysis available.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-2xl border border-white/8 bg-zinc-900/50 p-7 hover:border-white/15 hover:bg-zinc-900 transition-all duration-300"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: f.bg }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2.5 tracking-tight">{f.title}</h3>
              <p className="text-[13.5px] text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
