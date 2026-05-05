"use client";

import { motion } from "framer-motion";
import { Zap, Target, MessageSquare, BarChart3, Shield, Sparkles } from "lucide-react";

const features = [
  { icon: Zap, color: "rgba(255,255,255,0.9)", title: "Instant ATS Scoring", desc: "Get a precise ATS compatibility score in seconds. Know exactly how automated systems rank your resume before a human ever sees it." },
  { icon: Target, color: "rgba(255,255,255,0.9)", title: "Job Match Analysis", desc: "Paste any job description and see a semantic match score. Understand exactly which skills and keywords are missing." },
  { icon: Sparkles, color: "rgba(255,255,255,0.9)", title: "AI Bullet Rewrites", desc: "Our AI rewrites your experience bullets to be more impactful — adding quantifiable metrics, stronger action verbs, and clarity." },
  { icon: MessageSquare, color: "rgba(255,255,255,0.9)", title: "Interview Simulator", desc: "Generate tailored behavioral and technical questions based on your resume and target role. Practice with real AI feedback." },
  { icon: Shield, color: "rgba(255,255,255,0.9)", title: "Keyword Injection", desc: "Identify missing industry keywords and get contextual suggestions to integrate them naturally into your resume." },
  { icon: BarChart3, color: "rgba(255,255,255,0.9)", title: "Score Tracking", desc: "Track your resume score across multiple versions. See exactly which edits moved the needle on your ATS compatibility." },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "140px 24px", background: "hsl(201 100% 13%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 96 }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(240 4% 66%)",
              marginBottom: 24,
              fontFamily: "var(--font-body)",
            }}
          >
            What we build
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "hsl(0 0% 100%)",
              marginBottom: 24,
            }}
          >
            Everything you need<br />
            <em className="not-italic" style={{ color: "hsl(240 4% 66%)" }}>
              to land the interview.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "1rem",
              color: "hsl(240 4% 66%)",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.75,
              fontFamily: "var(--font-body)",
            }}
          >
            Aura combines multiple AI models to give you the most comprehensive resume analysis available anywhere.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 1,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          overflow: "hidden",
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="liquid-glass"
              style={{
                padding: "40px 36px",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                background: "rgba(255,255,255,0.04)",
              }}>
                <f.icon size={18} color="rgba(255,255,255,0.7)" />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.2rem",
                fontWeight: 400,
                color: "hsl(0 0% 100%)",
                marginBottom: 12,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
              }}>
                {f.title}
              </h3>

              {/* Desc */}
              <p style={{
                fontSize: 13.5,
                color: "hsl(240 4% 55%)",
                lineHeight: 1.7,
                fontFamily: "var(--font-body)",
              }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
