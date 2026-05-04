"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/5 pb-6 bg-background/50 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-1.5 h-10 bg-primary gold-glow" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter uppercase font-heading">Aura</span>
            <span className="mono text-[7px] text-white/30 tracking-[0.4em] -mt-1">Neural Labs</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="#features" className="mono text-white/40 hover:text-primary transition-colors">
            Analysis
          </Link>
          <Link href="/dashboard" className="px-8 py-3 button-primary text-[10px] uppercase tracking-[0.2em]">
            Enter
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
        >
          <Link href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-lg font-medium" onClick={() => setIsOpen(false)}>How it Works</Link>
          <Link href="/dashboard" className="px-5 py-3 rounded-xl gradient-bg text-center font-bold" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
