"use client";

import VelorahHero from "@/components/velorah/VelorahHero";
import Features from "@/components/landing/Features";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "98%", label: "ATS accuracy" },
  { value: "<2s", label: "Analysis time" },
  { value: "12+", label: "Improvements found" },
  { value: "Free", label: "To get started" },
];

export default function Home() {
  return (
    <main style={{ background: "hsl(201 100% 13%)" }}>

      {/* ── Velorah cinematic hero ── */}
      <VelorahHero />

      {/* ── Stats strip ── */}
      <section style={{
        padding: "80px 24px",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        background: "hsl(201 100% 13%)",
      }}>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{
                textAlign: "center",
                padding: "0 24px",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "hsl(0 0% 100%)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 10,
              }}>
                {s.value}
              </p>
              <p style={{
                fontSize: 12,
                color: "hsl(240 4% 55%)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
              }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <Features />

      {/* ── CTA ── */}
      <section style={{ padding: "140px 24px", background: "hsl(201 100% 13%)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(240 4% 55%)",
              marginBottom: 28,
              fontFamily: "var(--font-body)",
            }}>
              Begin your ascent
            </p>

            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "hsl(0 0% 100%)",
              marginBottom: 24,
            }}>
              Ready to rise{" "}
              <em className="not-italic" style={{ color: "hsl(240 4% 66%)" }}>
                through the noise?
              </em>
            </h2>

            <p style={{
              fontSize: "1rem",
              color: "hsl(240 4% 55%)",
              marginBottom: 48,
              lineHeight: 1.75,
              fontFamily: "var(--font-body)",
            }}>
              Upload your resume and get a full AI analysis in seconds.<br />No account required.
            </p>

            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <button
                className="liquid-glass"
                style={{
                  borderRadius: 9999,
                  padding: "18px 52px",
                  fontSize: "0.95rem",
                  color: "hsl(0 0% 100%)",
                  background: "rgba(255,255,255,0.01)",
                  border: "none",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
              >
                Analyze My Resume
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
