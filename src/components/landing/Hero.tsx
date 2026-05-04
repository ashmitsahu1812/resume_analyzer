"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Cpu, Activity } from "lucide-react";

const stats = [
  { label: "Accuracy Rate", value: "98.4%" },
  { label: "Avg. Score Boost", value: "+34pts" },
  { label: "Models Active", value: "7" },
  { label: "Latency", value: "<2s" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* System status bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-6 mb-16 flex-wrap"
        >
          <div className="status-online">
            <div className="status-dot" />
            System Online
          </div>
          <div className="cyber-divider w-8 h-px" />
          <span className="cyber-label text-slate-600">v4.2.1 // Neural Engine Active</span>
          <div className="cyber-divider w-8 h-px" />
          <span className="cyber-label text-slate-600">7 AI Models Loaded</span>
        </motion.div>

        {/* Main heading */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="cyber-label text-cyan-400/70 mb-4">// Resume Intelligence Platform</p>
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.85] tracking-tighter text-white uppercase">
              Analyze.<br />
              <span className="neon animate-flicker">Optimize.</span><br />
              <span className="text-slate-600">Dominate.</span>
            </h1>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed"
        >
          AI-powered resume analysis that decodes ATS systems, maps skill gaps,
          and generates precision rewrites — in under 2 seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <Link href="/dashboard" className="btn-cyber-solid">
            <Zap className="w-4 h-4" />
            Run Analysis
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#features" className="btn-cyber">
            <Cpu className="w-4 h-4" />
            View System
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cyan-400/10 border border-cyan-400/10 mb-20"
        >
          {stats.map((s, i) => (
            <div key={i} className="bg-[#020408] px-6 py-5">
              <div className="text-2xl font-black text-white mb-1 font-mono">{s.value}</div>
              <div className="cyber-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="panel rounded-sm overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-400/10 bg-cyan-400/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="cyber-label">aura.ai // dashboard</span>
              <div className="status-online text-[9px]">
                <div className="status-dot" />
                Live
              </div>
            </div>
            <Image
              src="/premium_dashboard_mockup_1777913264636.png"
              alt="AURA Dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating metric */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -right-4 top-16 panel px-5 py-4 hidden lg:block"
          >
            <div className="cyber-label mb-2">ATS Score</div>
            <div className="text-3xl font-black text-cyan-400 font-mono">94<span className="text-lg text-slate-500">/100</span></div>
            <div className="progress-track mt-2 w-32">
              <div className="progress-fill" style={{ width: "94%" }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-4 bottom-24 panel px-5 py-4 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="cyber-label mb-1">Analysis Complete</div>
                <div className="text-xs text-white font-semibold">12 improvements found</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
