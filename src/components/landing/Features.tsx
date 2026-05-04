"use client";

import { motion } from "framer-motion";
import { Zap, Target, MessageSquare, BarChart3, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    color: "#0071e3",
    bg: "rgba(0,113,227,0.08)",
    title: "Instant ATS Scoring",
    desc: "Get a precise ATS compatibility score in seconds. Understand exactly how recruiters' systems see your resume.",
  },
  {
    icon: Target,
    color: "#ff9500",
    bg: "rgba(255,149,0,0.08)",
    title: "Job Match Analysis",
    desc: "Paste any job description and see how well your resume aligns. Get a match percentage with gap analysis.",
  },
  {
    icon: Sparkles,
    color: "#af52de",
    bg: "rgba(175,82,222,0.08)",
    title: "AI-Powered Rewrites",
    desc: "Our AI rewrites your bullet points to be more impactful — adding metrics, action verbs, and clarity.",
  },
  {
    icon: MessageSquare,
    color: "#34c759",
    bg: "rgba(52,199,89,0.08)",
    title: "Interview Prep",
    desc: "Generate tailored interview questions based on your resume and target role. Practice with AI feedback.",
  },
  {
    icon: Shield,
    color: "#ff3b30",
    bg: "rgba(255,59,48,0.08)",
    title: "Keyword Optimization",
    desc: "Identify missing keywords from job descriptions and get suggestions to integrate them naturally.",
  },
  {
    icon: BarChart3,
    color: "#5ac8fa",
    bg: "rgba(90,200,250,0.08)",
    title: "Score Tracking",
    desc: "Track your resume score across versions. See exactly which changes improved your chances.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="eyebrow mb-3"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="headline mb-5"
          >
            Everything you need<br />to land the job.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="subheadline max-w-[500px] mx-auto"
            style={{ fontSize: "1.1rem" }}
          >
            Aura combines multiple AI models to give you the most comprehensive resume analysis available.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card p-8"
            >
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
                style={{ background: f.bg }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">{f.title}</h3>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
