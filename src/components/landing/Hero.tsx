"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 px-6 overflow-hidden bg-[#09090b]">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[12px] font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          AI-powered resume analysis · Free to start
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] text-white mb-6"
        >
          Your resume,{" "}
          <span style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            perfected.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-[560px] mx-auto mb-10 leading-relaxed"
        >
          Upload your resume, paste a job description, and get an instant AI analysis — ATS score, keyword gaps, and rewritten bullet points.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <Link href="/dashboard"
            className="flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl bg-indigo-500 hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
            Analyze my resume
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#features"
            className="flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-zinc-300 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
            See how it works
          </Link>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-20"
        >
          {["Free to start", "No signup required", "Results in 2 seconds"].map((p) => (
            <span key={p} className="flex items-center gap-1.5 text-[13px] text-zinc-500">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              {p}
            </span>
          ))}
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-8 rounded-3xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)", filter: "blur(40px)" }} />

          <div className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)" }}>
            {/* Browser bar */}
            <div className="bg-zinc-900 px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-zinc-800 rounded-md px-4 py-1 text-[11px] text-zinc-500 max-w-[220px] w-full text-center">
                  aura.ai/dashboard
                </div>
              </div>
            </div>
            <Image
              src="/premium_dashboard_mockup_1777913264636.png"
              alt="Aura Dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating ATS card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute -right-4 top-16 hidden lg:block rounded-xl border border-white/10 bg-zinc-900/90 p-4 w-44"
            style={{ backdropFilter: "blur(20px)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
          >
            <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-2">ATS Score</p>
            <p className="text-3xl font-bold text-white mb-2">
              94<span className="text-base font-normal text-zinc-600">/100</span>
            </p>
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "94%" }} />
            </div>
          </motion.div>

          {/* Floating complete card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-4 bottom-24 hidden lg:block rounded-xl border border-white/10 bg-zinc-900/90 p-4 w-52"
            style={{ backdropFilter: "blur(20px)", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">Analysis complete</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">12 improvements found</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
