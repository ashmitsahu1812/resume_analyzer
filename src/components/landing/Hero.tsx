"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[180vh] flex flex-col pt-60 px-6 overflow-hidden bg-black">
      {/* Liquid Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[800px] h-[800px] bg-violet-500/10 blur-[150px] rounded-full" />

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full text-center space-y-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-4 px-10 py-4 glass-panel rounded-full border-emerald-500/20"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[14px] uppercase tracking-[0.6em] font-black text-emerald-400">The Final Standard</span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12rem] md:text-[22rem] font-bold leading-[0.7] tracking-tighter metallic-text py-10 uppercase"
          >
            Aura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-3xl md:text-5xl text-white/50 font-light leading-tight tracking-tight px-10"
          >
            Precision engineering for high-stakes career transitions. Where neural matching meets institutional excellence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-16"
        >
          <Link href="/dashboard" className="group relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="px-16 py-8 bg-white text-black text-xl font-black uppercase tracking-[0.3em] rounded-[2rem] flex items-center gap-6 shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all group-hover:scale-105 group-hover:-translate-y-2">
              Launch Interface
              <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
            </div>
          </Link>

          <div className="flex items-center gap-16 text-[12px] font-black uppercase tracking-[0.5em] text-white/30">
            <span className="flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
              Verified Engine
            </span>
            <span className="flex items-center gap-4">
              <Zap className="w-6 h-6 text-emerald-500" />
              Realtime Synapse
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Parallax Visual Mask */}
      <motion.div 
        style={{ y: y1 }}
        className="max-w-8xl mx-auto w-full mt-60 relative z-20 px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="luxury-card rounded-[5rem] overflow-hidden border border-white/10 shadow-[0_100px_200px_rgba(0,0,0,1)]"
        >
          <Image 
            src="/premium_dashboard_mockup_1777913264636.png" 
            alt="Dominant Dashboard" 
            width={1920} 
            height={1080} 
            className="w-full h-auto scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </motion.div>
        
        {/* Floating Power Card */}
        <motion.div 
          style={{ y: y2 }} 
          className="absolute -top-40 right-20 luxury-card p-16 rounded-[4rem] border-emerald-500/30 hidden lg:block"
        >
          <div className="text-8xl font-black text-emerald-500 mb-2">98%</div>
          <div className="text-sm font-black uppercase tracking-[0.5em] text-white/40">Role Alignment</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
