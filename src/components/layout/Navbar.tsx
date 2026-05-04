"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Crown, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-6">
      <div className={cn(
        "max-w-6xl mx-auto glass-nav transition-all duration-700",
        scrolled ? "px-8 py-4 rounded-[2rem]" : "px-12 py-8 rounded-[3rem]"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] luxury-glow">
              <Crown className="w-7 h-7 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-luxury font-black tracking-tighter gold-text-static">AURA</span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-yellow-400/80 font-black">Luxury Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#features" className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-yellow-400 transition-colors relative group">
              Platform
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="#how-it-works" className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-yellow-400 transition-colors relative group">
              Intelligence
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link href="/dashboard" className="btn-gold text-[11px] flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Elite Access
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-3 text-white hover:text-yellow-400 transition-colors rounded-2xl hover:bg-yellow-400/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-8 pt-8 border-t border-yellow-400/20"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="#features"
                className="text-sm uppercase tracking-[0.2em] font-bold text-white/60 hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Platform
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm uppercase tracking-[0.2em] font-bold text-white/60 hover:text-yellow-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Intelligence
              </Link>
              <Link
                href="/dashboard"
                className="btn-gold text-sm flex items-center gap-2 justify-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Crown className="w-4 h-4" />
                Elite Access
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
