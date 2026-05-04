"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Ambient Light */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* Left: Content */}
        <div className="lg:col-span-6 space-y-10 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 glass-panel rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/60">Institutional Grade v2.4</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-gradient-rich"
            >
              Elite Career <br />
              <span className="text-emerald-500">Architecture.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-lg md:text-xl text-white/40 leading-relaxed font-medium mx-auto lg:mx-0"
            >
              Precision-engineered resume diagnostics and neural matching. Built for high-stakes professional transitions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/dashboard" className="btn-action w-full sm:w-auto">
              Access Engine
              <ArrowRight className="inline-block ml-3 w-5 h-5" />
            </Link>
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Verified Results
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-500" />
                Instant Response
              </span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="pt-10 flex flex-wrap items-center justify-center lg:justify-start gap-10 opacity-20 grayscale"
          >
            <span className="text-xs font-black tracking-widest uppercase">Trusted by</span>
            <div className="text-xl font-bold italic tracking-tighter">Goldman Sachs</div>
            <div className="text-xl font-bold italic tracking-tighter">McKinsey</div>
            <div className="text-xl font-bold italic tracking-tighter">Apple</div>
          </motion.div>
        </div>

        {/* Right: Product Visual */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            className="relative z-10 hero-visual-shadow rounded-[3rem] overflow-hidden border border-white/10"
          >
            <Image 
              src="/premium_dashboard_mockup_1777913264636.png" 
              alt="Aura Dashboard" 
              width={1024} 
              height={1024} 
              className="w-full h-auto"
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500/20 blur-[60px] rounded-full" />
        </div>
      </div>
    </section>
  );
}
