"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-10 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter uppercase font-heading gold-glow">Aura</span>
            <span className="mono text-[8px] -mt-1 text-primary font-black opacity-80">Resume Engine</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="mono hover:text-primary transition-colors">
            Analysis
          </Link>
          <Link href="#how-it-works" className="mono hover:text-primary transition-colors">
            Methodology
          </Link>
          <Link href="/dashboard" className="px-6 py-2.5 button-primary rounded-sm text-xs uppercase tracking-widest">
            Enter Platform
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
