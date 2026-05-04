"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "98%", label: "ATS accuracy" },
  { value: "<2s", label: "Analysis time" },
  { value: "12+", label: "Improvements found" },
  { value: "Free", label: "To get started" },
];

export default function Home() {
  return (
    <main className="bg-[#09090b]">
      <Navbar />
      <Hero />

      {/* Stats */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}>
              <p className="text-4xl font-bold text-white tracking-tight mb-1">{s.value}</p>
              <p className="text-[13px] text-zinc-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Features />

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/8 bg-zinc-900/50 p-16 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-indigo-400 mb-4">Get started today</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
                Ready to land<br />your dream job?
              </h2>
              <p className="text-lg text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
                Upload your resume and get a full AI analysis in seconds. No account required.
              </p>
              <Link href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl bg-indigo-500 hover:bg-indigo-400 transition-all shadow-xl shadow-indigo-500/30 hover:-translate-y-0.5">
                Analyze my resume — it's free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
