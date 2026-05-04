"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd] pt-28 pb-0">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fbfbfd] to-[#f5f5f7] pointer-events-none" />

      <div className="relative max-w-[980px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <Link href="/dashboard"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0071e3] hover:underline">
            Introducing AI Resume Analysis
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="headline-xl mb-6"
        >
          Your resume,<br />
          <span style={{ color: "#0071e3" }}>perfected by AI.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="subheadline max-w-[600px] mx-auto mb-10"
        >
          Aura analyzes your resume against any job description, scores it against ATS systems, and rewrites it — in seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link href="/dashboard" className="btn-primary text-[15px] px-7 py-3.5">
            Analyze my resume
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#features" className="btn-secondary text-[15px]">
            Learn more
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-[20px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/5">
            {/* Fake browser bar */}
            <div className="bg-[#f0f0f0] px-4 py-3 flex items-center gap-2 border-b border-black/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-[11px] text-[#6e6e73] text-center max-w-[300px] mx-auto">
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
          </div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -right-6 top-16 card p-4 w-44 hidden lg:block"
          >
            <p className="label mb-1">ATS Score</p>
            <p className="text-2xl font-bold text-[#1d1d1f] mb-2">94<span className="text-sm font-normal text-[#6e6e73]">/100</span></p>
            <div className="progress-track">
              <div className="progress-fill green" style={{ width: "94%" }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute -left-6 bottom-20 card p-4 w-52 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#34c759]/10 flex items-center justify-center shrink-0">
                <span className="text-[#34c759] text-lg">✓</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#1d1d1f]">Analysis complete</p>
                <p className="label">12 improvements found</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
