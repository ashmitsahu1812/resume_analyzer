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

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    transition: "all 0.3s",
    background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(20px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Zap size={15} color="white" fill="white" />
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>Aura</span>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
          {[["#features", "Features"], ["#how-it-works", "How it works"]].map(([href, label]) => (
            <Link key={href} href={href} style={{
              padding: "8px 16px", fontSize: 13, fontWeight: 500, color: "#a1a1aa",
              borderRadius: 8, textDecoration: "none", transition: "all 0.15s",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "white"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#a1a1aa"; (e.target as HTMLElement).style.background = "transparent"; }}>
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
          <Link href="/dashboard" style={{
            padding: "8px 16px", fontSize: 13, fontWeight: 500, color: "#d4d4d8",
            borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "all 0.15s",
          }}>
            Sign in
          </Link>
          <Link href="/dashboard" style={{
            padding: "8px 16px", fontSize: 13, fontWeight: 600, color: "white",
            borderRadius: 8, background: "#6366f1", textDecoration: "none", transition: "all 0.15s",
            boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
          }}>
            Get started free
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#a1a1aa", cursor: "pointer", padding: 4 }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(9,9,11,0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px" }}
          className="md:hidden">
          {[["#features", "Features"], ["#how-it-works", "How it works"], ["/dashboard", "Dashboard"]].map(([href, label]) => (
            <Link key={href} href={href} style={{ display: "block", padding: "10px 0", fontSize: 14, color: "#a1a1aa", textDecoration: "none" }}
              onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/dashboard" style={{
            display: "block", marginTop: 12, padding: "12px 0", textAlign: "center",
            fontSize: 14, fontWeight: 600, color: "white", background: "#6366f1",
            borderRadius: 8, textDecoration: "none",
          }} onClick={() => setOpen(false)}>
            Get started free
          </Link>
        </div>
      )}
    </header>
  );
}
