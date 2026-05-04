"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="panel p-16 rounded-sm relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent pointer-events-none" />

            <p className="cyber-label text-cyan-400/70 mb-6">// Ready to begin?</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-6">
              Run Your First<br />
              <span className="neon">Analysis Free</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto">
              Upload your resume and get a full diagnostic report in under 2 seconds. No signup required.
            </p>
            <Link href="/dashboard" className="btn-cyber-solid inline-flex">
              <Zap className="w-4 h-4" />
              Start Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
