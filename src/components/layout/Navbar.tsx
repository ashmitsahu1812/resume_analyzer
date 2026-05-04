"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Gem, ArrowRight } from "lucide-react";
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
        "max-w-5xl mx-auto glass-nav transition-all duration-500 overflow-hidden",
        scrolled ? "px-6 py-4" : "px-10 py-6"
      )}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Gem className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white">Aura.</span>
              <span className="text-[7px] uppercase tracking-[0.4em] text-white/40 font-black">Professional</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#features" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-white transition-colors">
              Platform
            </Link>
            <Link href="#how-it-works" className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 hover:text-white transition-colors">
              Intelligence
            </Link>
            <Link href="/dashboard" className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all">
              Launch Dashboard
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white/60" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 bento-card p-8 flex flex-col gap-6 shadow-2xl"
        >
          <Link href="#features" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Platform</Link>
          <Link href="#how-it-works" className="text-sm font-bold uppercase tracking-widest" onClick={() => setIsOpen(false)}>Intelligence</Link>
          <Link href="/dashboard" className="btn-action text-center" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
