"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
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
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <Zap className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-white">AURA.</span>
              <span className="text-[8px] uppercase tracking-[0.5em] text-emerald-500 font-black">Professional</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="#features" className="text-[11px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-white transition-colors">
              Platform
            </Link>
            <Link href="#how-it-works" className="text-[11px] uppercase tracking-[0.3em] font-black text-white/40 hover:text-white transition-colors">
              Intelligence
            </Link>
            <Link href="/dashboard" className="px-8 py-3 bg-white text-black rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:scale-110 active:scale-95 transition-all shadow-xl">
              Enter Interface
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
