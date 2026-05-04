"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Link from "next/link";
import { ArrowRight, Crown, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Features />

      {/* Luxury CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-400/10 via-yellow-500/15 to-yellow-400/10 blur-[150px] -z-10 rounded-full" />

        <div className="max-w-6xl mx-auto card-premium p-16 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-black/40 -z-10 group-hover:scale-110 transition-transform duration-700" />

          {/* Luxury Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Crown className="w-8 h-8 text-yellow-400" />
            <span className="text-sm uppercase tracking-[0.4em] font-black gold-text-static">Elite Invitation</span>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-luxury font-black mb-10 tracking-tighter leading-[0.9]"
          >
            <span className="gold-text">Join the</span><br />
            <span className="text-white italic font-light">Elite 1%</span>
          </motion.h2>

          <p className="text-white/70 text-xl md:text-2xl mb-14 max-w-3xl mx-auto font-elegant leading-relaxed">
            Experience the pinnacle of AI-powered career optimization. Where luxury meets intelligence, and excellence becomes standard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/dashboard"
              className="btn-action group"
            >
              <Crown className="w-6 h-6" />
              Begin Your Ascent
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <div className="flex items-center gap-4 text-sm text-white/50">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="font-elegant">No commitment required</span>
            </div>
          </div>

          {/* Luxury Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-yellow-400/20">
            <div className="text-center">
              <div className="text-3xl font-luxury font-black gold-text mb-2">500K+</div>
              <div className="text-sm text-white/50 font-elegant">Elite Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-luxury font-black gold-text mb-2">98%</div>
              <div className="text-sm text-white/50 font-elegant">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-luxury font-black gold-text mb-2">24/7</div>
              <div className="text-sm text-white/50 font-elegant">Premium Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
