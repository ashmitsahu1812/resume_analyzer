"use client";

import { motion } from "framer-motion";
import { Zap, Target, MessageSquare, BarChart3, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Zap, color: "#818cf8", bg: "rgba(99,102,241,0.12)", title: "Instant ATS Scoring", desc: "Get a precise ATS compatibility score in seconds. Know exactly how automated systems rank your resume before a human ever sees it." },
  { icon: Target, color: "#fbbf24", bg: "rgba(251,191,36,0.12)", title: "Job Match Analysis", desc: "Paste any job description and see a semantic match score. Understand exactly which skills and keywords are missing." },
  { icon: Sparkles, color: "#c084fc", bg: "rgba(192,132,252,0.12)", title: "AI Bullet Rewrites", desc: "Our AI rewrites your experience bullets to be more impactful — adding quantifiable metrics, stronger action verbs, and clarity." },
  { icon: MessageSquare, color: "#34d399", bg: "rgba(52,211,153,0.12)", title: "Interview Simulator", desc: "Generate tailored behavioral and technical questions based on your resume and target role. Practice with real AI feedback." },
  { icon: Shield, color: "#f87171", bg: "rgba(248,113,113,0.12)", title: "Keyword Injection", desc: "Identify missing industry keywords and get contextual suggestions to integrate them naturally into your resume." },
  { icon: BarChart3, color: "#38bdf8", bg: "rgba(56,189,248,0.12)", title: "Score Tracking", desc: "Track your resume score across multiple versions. See exactly which edits moved the needle on your ATS compatibility." },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "120px 24px", background: "#09090b" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", marginBottom: 16 }}>
            Features
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", marginBottom: 20, lineHeight: 1.15 }}>
            Everything you need<br />to land the interview.
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}
            style={{ fontSize: "1.05rem", color: "#71717a", maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Aura combines multiple AI models to give you the most comprehensive resume analysis available.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              style={{ background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28, transition: "all 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; (e.currentTarget as HTMLElement).style.background = "rgba(24,24,27,0.9)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.background = "rgba(24,24,27,0.5)"; }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: f.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <f.icon size={20} color={f.color} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 10, letterSpacing: "-0.02em" }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: "#71717a", lineHeight: 1.65 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
