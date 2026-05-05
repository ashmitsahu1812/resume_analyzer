"use client";

import Link from "next/link";

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
  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      overflow: "hidden",
      background: "hsl(201 100% 8%)",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* ── Video Background ── */}
      <video
        autoPlay loop muted playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* ── Dark overlay so text is always readable ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,10,20,0.72) 0%, rgba(0,10,20,0.55) 50%, rgba(0,10,20,0.80) 100%)",
      }} />

      {/* ── Navigation ── */}
      <nav style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.875rem",
            letterSpacing: "-0.025em",
            color: "#ffffff",
            lineHeight: 1,
          }}>
            Aura<sup style={{ fontSize: "0.65rem", verticalAlign: "super" }}>®</sup>
          </span>
        </Link>

        <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} style={{
              fontSize: "0.875rem",
              color: link.active ? "#ffffff" : "rgba(255,255,255,0.6)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = link.active ? "#ffffff" : "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/dashboard" style={{ textDecoration: "none" }}>
          <button className="liquid-glass" style={{
            borderRadius: 9999,
            padding: "10px 24px",
            fontSize: "0.875rem",
            color: "#ffffff",
            background: "rgba(255,255,255,0.01)",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            Analyze Resume
          </button>
        </Link>
      </nav>

      {/* ── Hero Content ── */}
      <section style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "90px 24px",
      }}>
        <h1 className="animate-fade-rise" style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(2.8rem, 8vw, 6rem)",
          lineHeight: 0.95,
          letterSpacing: "-2.46px",
          fontWeight: 400,
          maxWidth: 1000,
          color: "#ffffff",
          textShadow: "0 2px 40px rgba(0,0,0,0.5)",
        }}>
          Where{" "}
          <em className="not-italic" style={{ color: "rgba(255,255,255,0.55)" }}>
            your career
          </em>{" "}
          rises{" "}
          <em className="not-italic" style={{ color: "rgba(255,255,255,0.55)" }}>
            through the noise.
          </em>
        </h1>

        <p className="animate-fade-rise-delay" style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "clamp(1rem, 2vw, 1.125rem)",
          maxWidth: 600,
          marginTop: 32,
          lineHeight: 1.75,
          fontFamily: "var(--font-body)",
          textShadow: "0 1px 20px rgba(0,0,0,0.4)",
        }}>
          AI-powered resume analysis for deep thinkers and bold creators. Upload your resume, get an instant ATS score, keyword gaps, and AI-rewritten bullet points — in seconds.
        </p>

        <Link href="/dashboard" style={{ textDecoration: "none", marginTop: 48 }}>
          <button className="liquid-glass animate-fade-rise-delay-2" style={{
            borderRadius: 9999,
            padding: "20px 56px",
            fontSize: "1rem",
            color: "#ffffff",
            background: "rgba(255,255,255,0.01)",
            border: "none",
            cursor: "pointer",
            transition: "transform 0.2s",
            fontFamily: "var(--font-body)",
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
