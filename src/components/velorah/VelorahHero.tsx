"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Features", href: "#features", active: false },
  { label: "About", href: "#about", active: false },
  { label: "Dashboard", href: "/dashboard", active: false },
  { label: "Reach Us", href: "#reach-us", active: false },
];

export default function VelorahHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{
      position: "relative", minHeight: "100vh", width: "100%",
      overflow: "hidden", background: "hsl(201 100% 8%)",
      display: "flex", flexDirection: "column",
    }}>
      {/* Video */}
      <video autoPlay loop muted playsInline style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", zIndex: 0,
      }}>
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,10,20,0.75) 0%, rgba(0,10,20,0.55) 50%, rgba(0,10,20,0.85) 100%)",
      }} />

      {/* Nav */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "row",
        justifyContent: "space-between", alignItems: "center",
        padding: "20px 24px", maxWidth: 1280, margin: "0 auto", width: "100%",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "1.6rem",
            letterSpacing: "-0.025em", color: "#ffffff", lineHeight: 1,
          }}>
            Aura<sup style={{ fontSize: "0.6rem", verticalAlign: "super" }}>®</sup>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} style={{
              fontSize: "0.85rem", color: link.active ? "#ffffff" : "rgba(255,255,255,0.6)",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = link.active ? "#ffffff" : "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/dashboard" style={{ textDecoration: "none" }} className="hidden md:block">
            <button className="liquid-glass" style={{
              borderRadius: 9999, padding: "9px 22px", fontSize: "0.85rem",
              color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none",
              cursor: "pointer", transition: "transform 0.2s",
            }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
            >
              Analyze Resume
            </button>
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#ffffff", padding: 4 }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "relative", zIndex: 10,
          background: "rgba(0,10,20,0.92)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 24px 24px",
        }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} style={{
              display: "block", padding: "12px 0", fontSize: "1rem",
              color: link.active ? "#ffffff" : "rgba(255,255,255,0.6)",
              textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)",
            }} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/dashboard" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            <button className="liquid-glass" style={{
              marginTop: 16, width: "100%", borderRadius: 9999, padding: "12px 0",
              fontSize: "0.9rem", color: "#ffffff", background: "rgba(255,255,255,0.01)",
              border: "none", cursor: "pointer",
            }}>
              Analyze Resume
            </button>
          </Link>
        </div>
      )}

      {/* Hero content */}
      <section style={{
        position: "relative", zIndex: 10, flex: 1,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "60px 24px 80px",
      }}>
        <h1 className="animate-fade-rise" style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(2.4rem, 8vw, 6rem)",
          lineHeight: 1.0, letterSpacing: "-0.04em",
          fontWeight: 400, maxWidth: 900, color: "#ffffff",
          textShadow: "0 2px 40px rgba(0,0,0,0.5)",
        }}>
          Where{" "}
          <em className="not-italic" style={{ color: "rgba(255,255,255,0.5)" }}>your career</em>{" "}
          rises{" "}
          <em className="not-italic" style={{ color: "rgba(255,255,255,0.5)" }}>through the noise.</em>
        </h1>

        <p className="animate-fade-rise-delay" style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          maxWidth: 560, marginTop: 28, lineHeight: 1.75,
          fontFamily: "var(--font-body)",
          textShadow: "0 1px 20px rgba(0,0,0,0.4)",
        }}>
          AI-powered resume analysis for deep thinkers and bold creators. Upload your resume, get an instant ATS score, keyword gaps, and AI-rewritten bullet points — in seconds.
        </p>

        <Link href="/dashboard" style={{ textDecoration: "none", marginTop: 40 }}>
          <button className="liquid-glass animate-fade-rise-delay-2" style={{
            borderRadius: 9999, padding: "16px 48px", fontSize: "0.95rem",
            color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none",
            cursor: "pointer", transition: "transform 0.2s", fontFamily: "var(--font-body)",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            Analyze My Resume
          </button>
        </Link>
      </section>
    </div>
  );
}
