"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[15px] font-semibold text-white tracking-tight">Aura</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {[["#features", "Features"], ["#how-it-works", "How it works"]].map(([href, label]) => (
            <Link key={href} href={href}
              className="px-4 py-2 text-[13px] font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard"
            className="px-4 py-2 text-[13px] font-medium text-zinc-300 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all">
            Sign in
          </Link>
          <Link href="/dashboard"
            className="px-4 py-2 text-[13px] font-semibold text-white rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-all shadow-lg shadow-indigo-500/25">
            Get started free
          </Link>
        </div>

        <button className="md:hidden text-zinc-400 hover:text-white p-1 transition-colors"
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 space-y-1 border-t border-white/5"
          style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(20px)" }}>
          {[["#features", "Features"], ["#how-it-works", "How it works"], ["/dashboard", "Dashboard"]].map(([href, label]) => (
            <Link key={href} href={href}
              className="block py-2.5 text-[14px] text-zinc-400 hover:text-white transition-colors"
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link href="/dashboard"
              className="block w-full text-center py-3 text-[14px] font-semibold text-white rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-all"
              onClick={() => setOpen(false)}>
              Get started free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
