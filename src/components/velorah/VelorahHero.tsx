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
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "hsl(201 100% 13%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Video Background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
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

      {/* ── Navigation ── */}
      <nav
        style={{
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
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.875rem",
              letterSpacing: "-0.025em",
              color: "hsl(0 0% 100%)",
              lineHeight: 1,
            }}
          >
            Aura<sup style={{ fontSize: "0.75rem", verticalAlign: "super" }}>®</sup>
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                color: link.active ? "hsl(0 0% 100%)" : "hsl(240 4% 66%)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 100%)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = link.active ? "hsl(0 0% 100%)" : "hsl(240 4% 66%)")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/dashboard" style={{ textDecoration: "none" }}>
          <button
            className="liquid-glass"
            style={{
              borderRadius: 9999,
              padding: "10px 24px",
              fontSize: "0.875rem",
              color: "hsl(0 0% 100%)",
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

      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "90px 24px",
        }}
      >
        {/* H1 */}
        <h1
          className="animate-fade-rise"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(2.8rem, 8vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-2.46px",
            fontWeight: 400,
            maxWidth: 1280,
            color: "hsl(0 0% 100%)",
          }}
        >
          Where{" "}
          <em className="not-italic" style={{ color: "hsl(240 4% 66%)" }}>
            your career
          </em>{" "}
          rises{" "}
          <em className="not-italic" style={{ color: "hsl(240 4% 66%)" }}>
            through the noise.
          </em>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-rise-delay"
          style={{
            color: "hsl(240 4% 66%)",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            maxWidth: 672,
            marginTop: 32,
            lineHeight: 1.7,
            fontFamily: "var(--font-body)",
          }}
        >
          AI-powered resume analysis for deep thinkers and bold creators. Upload your resume, get an instant ATS score, keyword gaps, and AI-rewritten bullet points — in seconds.
        </p>

        {/* Hero CTA */}
        <Link href="/dashboard" style={{ textDecoration: "none", marginTop: 48 }}>
          <button
            className="liquid-glass animate-fade-rise-delay-2"
            style={{
              borderRadius: 9999,
              padding: "20px 56px",
              fontSize: "1rem",
              color: "hsl(0 0% 100%)",
              background: "rgba(255,255,255,0.01)",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s",
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
