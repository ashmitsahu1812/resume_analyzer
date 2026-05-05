"use client";

import VelorahHero from "@/components/velorah/VelorahHero";
import Features from "@/components/landing/Features";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "98%", label: "ATS accuracy" },
  { value: "<2s", label: "Analysis time" },
  { value: "12+", label: "Improvements found" },
  { value: "Free", label: "To get started" },
];

export default function Home() {
  return (
    <main style={{ background: "#09090b" }}>
      {/* ── Velorah cinematic hero ── */}
      <VelorahHero />

      {/* ── Stats strip ── */}
      <section style={{ padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32, textAlign: "center" }}>
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <p style={{ fontSize: "2.4rem", fontWeight: 700, color: "white", letterSpacing: "-0.04em", marginBottom: 4 }}>{s.value}</p>
              <p style={{ fontSize: 13, color: "#52525b" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <Features />

      {/* ── CTA ── */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative", background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "80px 48px", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#818cf8", marginBottom: 16 }}>Get started today</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "white", marginBottom: 20, lineHeight: 1.15 }}>
                Ready to land<br />your dream job?
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#71717a", marginBottom: 40, maxWidth: 400, margin: "0 auto 40px", lineHeight: 1.7 }}>
                Upload your resume and get a full AI analysis in seconds. No account required.
              </p>
              <Link href="/dashboard" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", fontSize: 15, fontWeight: 600, color: "white",
                borderRadius: 12, background: "#6366f1", textDecoration: "none",
                boxShadow: "0 8px 25px rgba(99,102,241,0.35)",
              }}>
                Analyze my resume — it's free <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
