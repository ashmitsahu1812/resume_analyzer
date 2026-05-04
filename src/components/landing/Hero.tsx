"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-80 pb-60 px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="mono text-primary font-bold tracking-[0.4em] flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Neural Evolution v4.0
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-8xl md:text-[140px] font-bold tracking-tighter leading-[0.8] font-heading"
          >
            Engineering <br />
            <span className="gradient-text italic tracking-tighter">Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl mx-auto text-xl text-white/40 leading-relaxed font-body"
          >
            A high-fidelity analysis platform designed to refine your professional narrative and bypass initial automated gatekeepers with mathematical precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <Link 
              href="/dashboard"
              className="px-16 py-6 button-primary rounded-sm text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 group"
            >
              Analyze Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="#features"
              className="px-16 py-6 button-secondary rounded-sm text-xs uppercase tracking-[0.3em] font-bold"
            >
              Methodology
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Graphical Element - Centered and Subtle */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[800px] h-[800px] border border-white/5 relative">
           <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/20" />
           <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20" />
           <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20" />
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20" />
           
           <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
           >
              <div className="w-full h-full border border-dashed border-white/5 rounded-full" />
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
