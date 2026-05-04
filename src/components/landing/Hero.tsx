"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-60 pb-40 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="text-left space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="h-[1px] w-12 bg-secondary" />
            <span className="mono text-secondary font-bold">Ver 4.2 // Human-Centric AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] font-heading"
          >
            Precision <br />
            <span className="text-secondary italic">Engineering</span> <br />
            for your career.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg text-white/50 leading-relaxed font-body"
          >
            Aura is a designer-led resume optimization platform. We combine structural data analysis with high-impact storytelling to ensure your profile resonates with top-tier executives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              href="/dashboard"
              className="w-full sm:w-auto px-10 py-5 button-primary rounded-sm text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 group"
            >
              Analyze Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features"
              className="w-full sm:w-auto px-10 py-5 button-secondary rounded-sm text-sm uppercase tracking-[0.2em] font-bold"
            >
              Documentation
            </Link>
          </motion.div>
        </div>

        {/* Graphical Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="w-[500px] h-[500px] border border-white/5 relative p-8">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary/50" />
             <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/50" />
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/50" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary/50" />
             
             <div className="space-y-6 opacity-30">
                <div className="h-8 w-1/3 bg-white/10 rounded-sm" />
                <div className="h-4 w-full bg-white/5 rounded-sm" />
                <div className="h-4 w-5/6 bg-white/5 rounded-sm" />
                <div className="h-4 w-full bg-white/5 rounded-sm" />
                <div className="h-4 w-2/3 bg-white/5 rounded-sm" />
                <div className="grid grid-cols-2 gap-4 mt-12">
                   <div className="h-32 bg-secondary/10 rounded-sm border border-secondary/20" />
                   <div className="h-32 bg-white/5 rounded-sm border border-white/10" />
                </div>
             </div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border-[0.5px] border-white/10 rounded-full border-dashed" 
                />
                <div className="absolute flex flex-col items-center">
                   <span className="mono text-secondary text-[10px] mb-2">Platform Status</span>
                   <span className="text-3xl font-black font-heading">ACTIVE</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>

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
