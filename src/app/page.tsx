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
  { value: "2s", label: "Analysis time" },
  { value: "12+", label: "Improvements per resume" },
  { value: "Free", label: "To get started" },
];

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />

      {/* Stats strip */}
      <section className="bg-white border-y border-black/5 py-16">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}>
                <p className="text-[2.5rem] font-bold text-[#1d1d1f] tracking-tight mb-1">{s.value}</p>
                <p className="text-[14px] text-[#6e6e73]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* CTA section */}
      <section className="section bg-[#f5f5f7]">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-4">Get started today</p>
            <h2 className="headline mb-5">
              Ready to land<br />your dream job?
            </h2>
            <p className="subheadline mb-10" style={{ fontSize: "1.1rem" }}>
              Upload your resume and get a full AI analysis in seconds. No account required.
            </p>
            <Link href="/dashboard" className="btn-primary text-[15px] px-8 py-4">
              Analyze my resume for free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
