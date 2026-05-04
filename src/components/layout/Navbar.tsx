"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "panel flex items-center justify-between px-6 py-4 transition-all",
          scrolled ? "rounded-none" : "rounded-sm"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-cyan-400/60 flex items-center justify-center relative">
              <Zap className="w-4 h-4 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
            </div>
            <div>
              <span className="text-sm font-black tracking-[0.3em] text-white uppercase">AURA</span>
              <span className="block text-[9px] tracking-[0.4em] text-cyan-400/60 uppercase font-mono">Neural Intelligence</span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {[["#features", "Platform"], ["#how-it-works", "System"]].map(([href, label]) => (
              <Link key={href} href={href}
                className="cyber-label text-slate-500 hover:text-cyan-400 transition-colors">
                {label}
              </Link>
            ))}
            <Link href="/dashboard" className="btn-cyber-solid text-xs px-6 py-3">
              <Zap className="w-3.5 h-3.5" />
              Launch
            </Link>
          </div>

          <button className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
            onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="panel mt-1 px-6 py-4 space-y-3 rounded-sm">
            {[["#features", "Platform"], ["#how-it-works", "System"], ["/dashboard", "Launch"]].map(([href, label]) => (
              <Link key={href} href={href}
                className="block cyber-label text-slate-400 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
