"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-[2rem] px-8 py-4 border-white/20 neo-shadow">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center shadow-xl group-hover:neo-shadow transition-all duration-500"
          >
            <FileSearch className="text-white w-6 h-6" />
          </motion.div>
          <span className="text-2xl font-black tracking-tight font-heading uppercase">
            Resume<span className="gradient-text">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </Link>
          <Link href="/dashboard" className="px-5 py-2.5 rounded-xl gradient-bg text-sm font-semibold hover:opacity-90 transition-all shadow-md">
            Get Started
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
