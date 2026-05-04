"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Dynamic Floating Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/30 blur-[120px] rounded-full -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/30 blur-[150px] rounded-full -z-10" 
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass mb-12 border-primary/40 neo-shadow"
        >
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-black tracking-[0.2em] uppercase">The Future of Hiring</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-7xl md:text-[120px] font-black tracking-tight mb-8 leading-[0.9] font-heading"
        >
          Master the <br />
          <span className="gradient-text italic tracking-tighter">Hiring Game</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 mb-14 font-medium leading-relaxed font-body"
        >
          Sophisticated AI analysis that transforms your experience into a narrative recruiters can't ignore. Precision-engineered for modern ATS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            href="/dashboard"
            className="w-full sm:w-auto px-12 py-6 rounded-[2rem] gradient-bg font-black text-xl flex items-center justify-center gap-3 group shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 font-heading"
          >
            Start Analyzing
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link 
            href="#features"
            className="w-full sm:w-auto px-12 py-6 rounded-[2rem] glass font-black text-xl hover:bg-white/5 transition-all border-white/10 font-heading"
          >
            Explore Tech
          </Link>
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-50"
        >
          {["98% ATS Accuracy", "10k+ Resumes Analyzed", "4.9/5 User Rating"].map((stat, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">{stat}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements Animation Demo */}
      <div className="mt-20 max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-4 md:p-8 shadow-2xl relative z-10 border-white/10"
        >
           {/* Mock dashboard snippet */}
           <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="h-4 w-1/3 bg-muted rounded-full animate-pulse" />
                <div className="h-32 w-full bg-muted/50 rounded-2xl animate-pulse" />
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map(i => <div key={i} className="h-20 bg-muted/30 rounded-xl animate-pulse" />)}
                </div>
              </div>
              <div className="w-full md:w-64 h-64 bg-muted/20 rounded-2xl border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4" />
                 <p className="text-sm font-medium text-muted-foreground">AI is analyzing your experience...</p>
              </div>
           </div>
        </motion.div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
