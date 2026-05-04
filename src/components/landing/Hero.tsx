"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 architect-grid overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">Professional Analytics v2.0</span>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-bold tracking-tight leading-[0.85]"
          >
            Precision <br />
            <span className="italic text-white/40 font-serif">Career Labs.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-white/50 font-light leading-relaxed"
          >
            Advanced resume diagnostics and alignment engineering. We transform career documents into high-performance professional assets.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/dashboard" className="button-premium">
            Access Dashboard
          </Link>
          <Link href="#features" className="button-outline group">
            Explore Features
            <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Structured Architectural Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
      </div>
    </section>
  );
}
