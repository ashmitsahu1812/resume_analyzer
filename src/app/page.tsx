"use client";

import VelorahHero from "@/components/velorah/VelorahHero";
import Features from "@/components/landing/Features";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const stats = [
  { value: "98%", label: "ATS accuracy" },
  { value: "<2s", label: "Analysis time" },
  { value: "12+", label: "Improvements found" },
  { value: "Free", label: "To get started" },
];

const BG = "hsl(201 100% 13%)";
const MUTED = "rgba(255,255,255,0.45)";
const BORDER = "rgba(255,255,255,0.08)";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 20, fontFamily: "var(--font-body)" }}>
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", marginBottom: 20 }}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main style={{ background: BG }}>
      <VelorahHero />

      {/* Stats */}
      <section style={{ padding: "64px 24px", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="stats-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{ textAlign: "center", padding: "0 20px", borderRight: i < 3 ? `1px solid ${BORDER}` : "none" }}
            >
              <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>
                {s.value}
              </p>
              <p style={{ fontSize: 10, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* About */}
      <section id="about" className="section-pad" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="about-grid">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <Eyebrow>Our story</Eyebrow>
              <Heading>
                Built for the ones who{" "}
                <em className="not-italic" style={{ color: MUTED }}>refuse to be filtered out.</em>
              </Heading>
              <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.8, fontFamily: "var(--font-body)", marginBottom: 20 }}>
                Aura was born from a simple frustration — brilliant people losing opportunities not because of their skills, but because an algorithm couldn't read their resume. We set out to change that.
              </p>
              <p style={{ fontSize: "1rem", color: MUTED, lineHeight: 1.8, fontFamily: "var(--font-body)", marginBottom: 36 }}>
                We're a small team of engineers, designers, and career coaches who believe your next role shouldn't depend on whether you used the right buzzword. Our AI doesn't just score your resume — it understands it, rewrites it, and aligns it with what hiring systems actually look for.
              </p>
              <Link href="/dashboard" style={{ textDecoration: "none" }}>
                <button className="liquid-glass" style={{ borderRadius: 9999, padding: "13px 32px", fontSize: "0.9rem", color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", cursor: "pointer", transition: "transform 0.2s", fontFamily: "var(--font-body)", display: "inline-flex", alignItems: "center", gap: 8 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}>
                  Try it free <ArrowRight size={14} />
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { title: "Precision over noise", desc: "Every suggestion we make is grounded in real ATS data and recruiter patterns — not generic advice." },
                { title: "Speed without compromise", desc: "Full analysis in under 2 seconds. Because your time is the most valuable resource you have." },
                { title: "Human at the core", desc: "AI handles the heavy lifting, but every feature is designed around how real humans read and hire." },
              ].map((v, i) => (
                <div key={i} className="liquid-glass" style={{ borderRadius: 16, padding: "24px 28px", transition: "background 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}>
                  <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.1rem", fontWeight: 400, color: "#ffffff", marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.7, fontFamily: "var(--font-body)" }}>{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reach Us */}
      <section id="reach-us" className="section-pad" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <Eyebrow>Get in touch</Eyebrow>
              <Heading>We'd love to <em className="not-italic" style={{ color: MUTED }}>hear from you.</em></Heading>
              <p style={{ fontSize: "1rem", color: MUTED, maxWidth: 460, margin: "0 auto", lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
                Whether you have a question, a partnership idea, or just want to say hello — our inbox is always open.
              </p>
            </motion.div>
          </div>

          <div className="contact-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
            {/* Info cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: Mail, label: "Email us", value: "hello@aura.ai", sub: "We reply within 24 hours" },
                { icon: MapPin, label: "Based in", value: "San Francisco, CA", sub: "Remote-first team worldwide" },
                { icon: Clock, label: "Support hours", value: "Mon – Fri, 9am – 6pm PST", sub: "AI analysis available 24/7" },
              ].map((item, i) => (
                <div key={i} className="liquid-glass" style={{ borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16, transition: "background 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={16} color="rgba(255,255,255,0.6)" />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1rem", color: "#ffffff", marginBottom: 2 }}>{item.value}</p>
                    <p style={{ fontSize: 12, color: MUTED, fontFamily: "var(--font-body)" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="liquid-glass" style={{ borderRadius: 20, padding: "36px 32px" }}>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.4rem", fontWeight: 400, color: "#ffffff", marginBottom: 24 }}>Send a message</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Your name", placeholder: "Jane Smith", type: "text" },
                  { label: "Email address", placeholder: "jane@example.com", type: "email" },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ display: "block", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "11px 14px", fontSize: 14, color: "#ffffff", fontFamily: "var(--font-body)", outline: "none", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                      onBlur={(e) => (e.target.style.borderColor = BORDER)} />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 6 }}>Message</label>
                  <textarea placeholder="Tell us what's on your mind..." rows={4} style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "11px 14px", fontSize: 14, color: "#ffffff", fontFamily: "var(--font-body)", outline: "none", resize: "none", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.25)")}
                    onBlur={(e) => (e.target.style.borderColor = BORDER)} />
                </div>
                <button className="liquid-glass" style={{ borderRadius: 9999, padding: "13px 0", width: "100%", fontSize: "0.9rem", color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", marginTop: 4, transition: "background 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}>
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding: "120px 24px", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Eyebrow>Begin your ascent</Eyebrow>
            <Heading>Ready to rise <em className="not-italic" style={{ color: MUTED }}>through the noise?</em></Heading>
            <p style={{ fontSize: "1rem", color: MUTED, marginBottom: 40, lineHeight: 1.75, fontFamily: "var(--font-body)" }}>
              Upload your resume and get a full AI analysis in seconds. No account required.
            </p>
            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <button className="liquid-glass cta-card" style={{ borderRadius: 9999, padding: "16px 48px", fontSize: "0.95rem", color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", cursor: "pointer", transition: "transform 0.2s", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}>
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
