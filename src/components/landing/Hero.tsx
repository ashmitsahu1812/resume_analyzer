"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Silk */}
      <div className="silk-blob silk-1" />
      <div className="silk-blob silk-2" />

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 glass-card rounded-full"
        >
          <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/80">World Class Performance</span>
        </motion.div>

        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter text-gradient"
          >
            Aura <br />
            <span className="opacity-40">Intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl md:text-2xl text-white/50 font-light leading-relaxed px-4"
          >
            The premium standard for career optimization. Transform your professional narrative with institutional-grade diagnostics.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/dashboard" className="btn-rich group">
            Open Dashboard
            <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#features" className="btn-glass">
            Learn More
          </Link>
        </motion.div>

        {/* Floating Premium Badge */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pt-20 opacity-20"
        >
          <div className="text-[8px] uppercase tracking-[1em] font-black">Trusted by Executive Labs Worldwide</div>
        </motion.div>
      </div>
    </section>
  );
}
