"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "nav-apple" : "bg-transparent"
    )}>
      <div className="max-w-[980px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">
          Aura
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href}
              className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="btn-primary text-[13px] py-2 px-5">
            Get started
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden text-[#1d1d1f]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden nav-apple border-t border-black/5 px-6 py-4 space-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="block py-2 text-[15px] text-[#1d1d1f]"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
