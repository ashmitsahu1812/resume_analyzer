"use client";

import { motion } from "framer-motion";
import { Activity, Target, MessageSquare, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Activity,
    id: "01",
    title: "ATS Diagnostics",
    desc: "Deep-scan your resume against 50+ ATS parsing rules. Identify formatting issues, keyword gaps, and structural problems before they cost you the interview.",
    tags: ["Parsing", "Keywords", "Format"],
  },
  {
    icon: Target,
    id: "02",
    title: "Neural Job Match",
    desc: "Semantic similarity analysis between your resume and any job description. Get a precise match score with actionable gap analysis.",
    tags: ["Semantic AI", "Gap Analysis", "Scoring"],
  },
  {
    icon: MessageSquare,
    id: "03",
    title: "Interview Simulator",
    desc: "AI-generated behavioral and technical questions based on your resume and target role. Practice with real-time feedback.",
    tags: ["STAR Method", "Behavioral", "Technical"],
  },
  {
    icon: Zap,
    id: "04",
    title: "Smart Rewrites",
    desc: "Bullet-by-bullet AI rewrites that inject impact metrics, action verbs, and quantifiable achievements into your experience.",
    tags: ["GPT-4", "Impact", "Metrics"],
  },
  {
    icon: Shield,
    id: "05",
    title: "Keyword Injection",
    desc: "Identify missing industry keywords and get contextual suggestions for naturally integrating them into your resume.",
    tags: ["NLP", "Industry Terms", "Context"],
  },
  {
    icon: BarChart3,
    id: "06",
    title: "Score Tracking",
    desc: "Track your resume score across multiple versions and job applications. See exactly what changes moved the needle.",
    tags: ["Analytics", "Versioning", "Trends"],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="cyber-label text-cyan-400/70 mb-4"
          >
            // Core Modules
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none"
          >
            System<br />
            <span className="neon">Capabilities</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cyan-400/10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#020408] p-8 group hover:bg-[#060d14] transition-colors relative"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-4 h-px bg-cyan-400/60" />
              <div className="absolute top-0 left-0 w-px h-4 bg-cyan-400/60" />

              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 border border-cyan-400/20 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                  <f.icon className="w-5 h-5 text-cyan-400/60 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="font-mono text-xs text-slate-700 group-hover:text-slate-500 transition-colors">{f.id}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{f.desc}</p>

              <div className="flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span key={t} className="tag-cyber">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
