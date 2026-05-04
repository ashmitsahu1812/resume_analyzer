"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 96, paddingBottom: 0, paddingLeft: 24, paddingRight: 24, overflow: "hidden", background: "#09090b" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(99,102,241,0.25) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", right: 0, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", textAlign: "center", width: "100%" }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.1)", color: "#a5b4fc", fontSize: 12, fontWeight: 500, marginBottom: 32 }}>
          <Sparkles size={13} />
          AI-powered resume analysis · Free to start
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "white", marginBottom: 24 }}>
          Your resume,{" "}
          <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            perfected.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#71717a", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Upload your resume, paste a job description, and get an instant AI analysis — ATS score, keyword gaps, and rewritten bullet points.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 32 }}>
          <Link href="/dashboard" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 28px", fontSize: 15, fontWeight: 600, color: "white",
            borderRadius: 12, background: "#6366f1", textDecoration: "none",
            boxShadow: "0 8px 25px rgba(99,102,241,0.35)", transition: "all 0.2s",
          }}>
            Analyze my resume <ArrowRight size={16} />
          </Link>
          <Link href="#features" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "14px 28px", fontSize: 15, fontWeight: 500, color: "#d4d4d8",
            borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "all 0.2s",
          }}>
            See how it works
          </Link>
        </motion.div>

        {/* Perks */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 24, marginBottom: 80 }}>
          {["Free to start", "No signup required", "Results in 2 seconds"].map((p) => (
            <span key={p} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#52525b" }}>
              <CheckCircle size={13} color="#22c55e" />
              {p}
            </span>
          ))}
        </motion.div>

        {/* Screenshot */}
        <motion.div initial={{ opacity: 0, y: 60, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: -32, borderRadius: 32, background: "radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.7)" }}>
            <div style={{ background: "#1a1a1a", padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,95,87,0.7)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(254,188,46,0.7)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(40,200,64,0.7)" }} />
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ background: "#2a2a2a", borderRadius: 6, padding: "4px 16px", fontSize: 11, color: "#52525b", maxWidth: 220, width: "100%", textAlign: "center" }}>
                  aura.ai/dashboard
                </div>
              </div>
            </div>
            <Image src="/premium_dashboard_mockup_1777913264636.png" alt="Aura Dashboard" width={1920} height={1080} className="w-full h-auto" priority />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #09090b 0%, transparent 40%)", pointerEvents: "none" }} />
          </div>

          {/* Floating ATS */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
            style={{ position: "absolute", right: -16, top: 64, background: "rgba(20,20,22,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 16, width: 176, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            className="hidden lg:block">
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 8 }}>ATS Score</p>
            <p style={{ fontSize: 30, fontWeight: 700, color: "white", marginBottom: 8 }}>94<span style={{ fontSize: 14, fontWeight: 400, color: "#52525b" }}>/100</span></p>
            <div style={{ height: 6, background: "#27272a", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "94%", height: "100%", background: "#22c55e", borderRadius: 3 }} />
            </div>
          </motion.div>

          {/* Floating complete */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
            style={{ position: "absolute", left: -16, bottom: 96, background: "rgba(20,20,22,0.95)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 16, width: 208, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
            className="hidden lg:block">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <CheckCircle size={16} color="#22c55e" />
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "white" }}>Analysis complete</p>
                <p style={{ fontSize: 11, color: "#52525b", marginTop: 2 }}>12 improvements found</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
