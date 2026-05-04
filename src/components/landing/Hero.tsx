"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const perks = ["Free to start", "No signup required", "Results in 2 seconds"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-indigo-600/20 top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/15 top-[20%] right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-sky-600/10 bottom-[10%] left-[-50px]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[13px] font-medium mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          AI-powered resume analysis
          <span className="w-1 h-1 rounded-full bg-indigo-400" />
          Free
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display mb-6"
        >
          Your resume,<br />
          <span className="gradient-text">optimized by AI.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="subtitle max-w-[560px] mx-auto mb-10 text-[1.1rem]"
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
          <Link href="/dashboard" className="btn btn-primary btn-lg">
            Analyze my resume
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#features" className="btn btn-secondary btn-lg">
            See how it works
          </Link>
        </motion.div>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-20"
        >
          {perks.map((p) => (
            <span key={p} className="flex items-center gap-1.5 text-[13px] text-[#6e6e73]">
              <CheckCircle className="w-3.5 h-3.5 text-[#22c55e]" />
              {p}
            </span>
          ))}
        </motion.div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          {/* Glow behind image */}
          <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-3xl" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            {/* Browser chrome */}
            <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-[#2a2a2a] rounded-md px-4 py-1 text-[11px] text-[#666] max-w-[240px] w-full text-center">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute -right-5 top-20 card p-4 w-48 hidden lg:block shadow-2xl"
          >
            <p className="label-xs mb-2">ATS Score</p>
            <p className="text-3xl font-bold text-white mb-2">
              94<span className="text-base font-normal text-[#555]">/100</span>
            </p>
            <div className="progress-bar">
              <div className="progress-fill bg-[#22c55e]" style={{ width: "94%" }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-5 bottom-28 card p-4 w-56 hidden lg:block shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#22c55e]/15 flex items-center justify-center shrink-0">
                <CheckCircle className="w-4.5 h-4.5 text-[#22c55e]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white">Analysis complete</p>
                <p className="text-[11px] text-[#666] mt-0.5">12 improvements found</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
