"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ShieldCheck, Zap, Crown, Sparkles } from "lucide-react";

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
    <section ref={containerRef} className="relative min-h-[180vh] flex flex-col pt-60 px-6 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-7xl mx-auto w-full text-center space-y-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-4 px-10 py-4 glass-card rounded-full border-2"
        >
          <Crown className="w-4 h-4 text-yellow-400" />
          <span className="text-[14px] uppercase tracking-[0.6em] font-black gold-text-static">Premium Intelligence</span>
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </motion.div>

        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[8rem] md:text-[16rem] lg:text-[20rem] font-luxury font-bold leading-[0.7] tracking-tighter gold-text py-10"
          >
            AURA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto text-2xl md:text-4xl lg:text-5xl text-white/70 font-elegant font-light leading-tight tracking-wide px-10"
          >
            Where <span className="gold-text-static font-medium italic">sophistication</span> meets artificial intelligence.
            <br />
            The pinnacle of career optimization.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-16"
        >
          <Link href="/dashboard" className="group relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/20 via-yellow-500/30 to-yellow-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="btn-action relative z-10">
              <Crown className="w-6 h-6" />
              Enter the Elite
              <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-300" />
            </div>
          </Link>

          <div className="flex items-center gap-16 text-[12px] font-black uppercase tracking-[0.5em] text-white/40">
            <span className="flex items-center gap-4">
              <ShieldCheck className="w-6 h-6 text-yellow-400" />
              <span className="gold-text-static">Verified Excellence</span>
            </span>
            <span className="flex items-center gap-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="gold-text-static">Neural Precision</span>
            </span>
            <span className="flex items-center gap-4">
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="gold-text-static">Luxury Standard</span>
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Dashboard Preview */}
      <motion.div
        style={{ y: y1 }}
        className="max-w-8xl mx-auto w-full mt-60 relative z-20 px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium overflow-hidden shadow-[0_100px_200px_rgba(0,0,0,1)]"
        >
          <div className="relative">
            <Image
              src="/premium_dashboard_mockup_1777913264636.png"
              alt="Luxury Dashboard Interface"
              width={1920}
              height={1080}
              className="w-full h-auto scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Golden Accent */}
            <div className="absolute top-8 right-8 glass-card p-4 rounded-2xl border-2 border-yellow-400/30">
              <div className="flex items-center gap-3">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-bold gold-text-static">PREMIUM</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Statistics Card */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -top-40 right-20 card-premium p-16 border-2 border-yellow-400/30 hidden lg:block"
        >
          <div className="text-center space-y-4">
            <div className="text-8xl font-luxury font-black gold-text">98%</div>
            <div className="text-sm font-black uppercase tracking-[0.5em] text-white/60">Success Rate</div>
            <div className="flex justify-center">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Floating Element */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -bottom-20 left-20 glass-card p-8 rounded-3xl border border-yellow-400/20 hidden lg:block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="text-lg font-bold gold-text-static">AI Powered</div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Next Generation</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
