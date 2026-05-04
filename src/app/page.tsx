"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// Aura v4.1 - Production Release
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
        
        <div className="max-w-6xl mx-auto rounded-[4rem] glass-panel p-16 md:p-32 text-center relative overflow-hidden group">
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
            className="btn-action"
          >
            Ignite Engine
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
