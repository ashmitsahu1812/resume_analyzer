"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "nav-blur" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[15px] font-bold text-white tracking-tight">Aura</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[["#features", "Features"], ["#how-it-works", "How it works"]].map(([href, label]) => (
            <Link key={href} href={href}
              className="px-4 py-2 text-[13.5px] font-medium text-[#a0a0a0] hover:text-white rounded-lg hover:bg-white/5 transition-all">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="btn btn-secondary text-[13px] py-2 px-4">
            Sign in
          </Link>
          <Link href="/dashboard" className="btn btn-primary text-[13px] py-2 px-4">
            Get started free
          </Link>
        </div>

        <button className="md:hidden text-[#a0a0a0] hover:text-white transition-colors p-1"
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden nav-blur border-t border-white/5 px-6 py-4 space-y-1">
          {[["#features", "Features"], ["#how-it-works", "How it works"], ["/dashboard", "Dashboard"]].map(([href, label]) => (
            <Link key={href} href={href}
              className="block py-2.5 text-[14px] text-[#a0a0a0] hover:text-white transition-colors"
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link href="/dashboard" className="btn btn-primary w-full justify-center text-[14px]"
              onClick={() => setOpen(false)}>
              Get started free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
