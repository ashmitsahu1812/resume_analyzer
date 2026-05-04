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
    <main>
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
              <p className="text-[2.4rem] font-bold text-white tracking-tight mb-1">{s.value}</p>
              <p className="text-[13px] text-[#555]">{s.label}</p>
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
            className="card p-16 relative overflow-hidden"
          >
            <div className="orb w-[400px] h-[400px] bg-indigo-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <p className="label-xs text-indigo-400 mb-4">Get started today</p>
              <h2 className="title mb-5">
                Ready to land<br />your dream job?
              </h2>
              <p className="subtitle mb-10 text-[1rem]">
                Upload your resume and get a full AI analysis in seconds. No account required.
              </p>
              <Link href="/dashboard" className="btn btn-primary btn-lg inline-flex">
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
