"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] -z-10 rounded-full" />
        
        <div className="max-w-6xl mx-auto rounded-[4rem] gradient-bg p-16 md:p-32 text-center relative overflow-hidden neo-shadow group">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xl -z-10 group-hover:scale-110 transition-transform duration-700" />
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-white uppercase leading-[0.9]"
          >
            Phase 1: <br />
            <span className="italic">Ascend</span>
          </motion.h2>
          <p className="text-white/80 text-xl mb-14 max-w-2xl mx-auto font-medium">
            Join the elite 1% of job seekers who use AI to bypass traditional gatekeepers. Your evolution starts now.
          </p>
          <Link 
            href="/dashboard"
            className="inline-flex items-center gap-4 bg-white text-black px-14 py-7 rounded-[2rem] font-black text-2xl hover:scale-110 transition-all duration-300 neo-shadow active:scale-95"
          >
            Ignite Engine
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              Resume<span className="gradient-text">AI</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 ResumeAI. Built for the modern job seeker.
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
