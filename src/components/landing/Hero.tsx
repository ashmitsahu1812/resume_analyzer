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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] flex flex-col pt-40 px-6 overflow-hidden">
      {/* Liquid Elements */}
      <div className="liquid-blob w-[800px] h-[800px] bg-emerald-500/20 -top-40 -right-40" />
      <div className="liquid-blob w-[600px] h-[600px] bg-violet-500/20 bottom-40 -left-40" />

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full text-center space-y-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-4 px-8 py-3 luxury-card rounded-full"
        >
          <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
          <span className="text-[12px] uppercase tracking-[0.5em] font-black text-white">The Final Standard</span>
        </motion.div>

        <div className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl md:text-[14rem] font-bold leading-[0.75] tracking-tighter metallic-text py-10"
          >
            Aura <br />
            <span className="opacity-10 text-[0.8em]">Architect.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-2xl md:text-3xl text-white/40 font-light leading-relaxed tracking-tight"
          >
            Precision engineering for high-stakes career transitions. Where neural matching meets institutional excellence.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <Link href="/dashboard" className="btn-luxury group">
            Open Interface
            <ArrowRight className="inline-block ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            <span className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500/50" />
              Verified Engine
            </span>
            <span className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-violet-500/50" />
              Realtime Synapse
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Cinematic Parallax Visual */}
      <motion.div 
        style={{ y: y1 }}
        className="max-w-7xl mx-auto w-full mt-32 relative z-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="luxury-card rounded-[4rem] overflow-hidden border border-white/10 relative"
        >
          <Image 
            src="/premium_dashboard_mockup_1777913264636.png" 
            alt="Cinematic Dashboard" 
            width={1600} 
            height={900} 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </motion.div>
        
        {/* Floating Accents */}
        <motion.div style={{ y: y2 }} className="absolute -top-20 -right-20 w-80 h-80 luxury-card rounded-[3rem] p-10 hidden lg:block">
          <div className="text-4xl font-black mb-4">98%</div>
          <div className="text-xs font-black uppercase tracking-widest text-white/40">Alignment Accuracy</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
