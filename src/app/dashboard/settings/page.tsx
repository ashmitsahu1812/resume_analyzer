"use client";

import { motion } from "framer-motion";
import { User, Shield, Key, CreditCard, ExternalLink, Zap } from "lucide-react";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";

const sections = [
  {
    title: "Profile Information", icon: User,
    description: "Manage your account identity and professional details.",
    fields: [
      { label: "Display Name", value: "Ashmit Sahu", type: "text" },
      { label: "Email Address", value: "ashmit@example.com", type: "email" },
      { label: "Professional Role", value: "Full Stack Engineer", type: "text" },
    ],
  },
  {
    title: "API Configuration", icon: Key,
    description: "Configure your neural engine parameters and access keys.",
    fields: [
      { label: "OpenAI API Key", value: "sk-••••••••••••••••••••", type: "password" },
      { label: "Analysis Model", value: "GPT-4o (Standard)", type: "select" },
    ],
  },
  {
    title: "Security & Access", icon: Shield,
    description: "Control your data residency and platform encryption settings.",
    fields: [
      { label: "Two-Factor Auth", value: "Enabled", type: "toggle" },
      { label: "Vault Encryption", value: "AES-256", type: "readonly" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 32px", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <Zap size={11} color={MUTED} />
          <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)" }}>
            System Configuration
          </p>
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#ffffff", marginBottom: 12 }}>
          Platform{" "}
          <em className="not-italic" style={{ color: MUTED }}>Settings.</em>
        </h1>
        <p style={{ fontSize: 13.5, color: MUTED, maxWidth: 440, lineHeight: 1.65, fontFamily: "var(--font-body)" }}>
          Adjust your neural analysis parameters and manage your secure credential vault.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 32, alignItems: "start" }} className="settings-grid">
        {/* Left — form sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              {/* Section header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, marginBottom: 20, borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <section.icon size={14} color={MUTED} />
                </div>
                <div>
                  <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", fontFamily: "var(--font-body)", fontWeight: 500 }}>{section.title}</p>
                  <p style={{ fontSize: 11, color: MUTED, fontFamily: "var(--font-body)", marginTop: 2 }}>{section.description}</p>
                </div>
              </div>

              {/* Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {section.fields.map((field, j) => (
                  <div key={j}>
                    <label style={{ display: "block", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", marginBottom: 8 }}>
                      {field.label}
                    </label>
                    <div className="liquid-glass" style={{ borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                      onMouseEnter={(e) => { const b = e.currentTarget.querySelector("button") as HTMLElement; if (b) b.style.opacity = "1"; }}
                      onMouseLeave={(e) => { const b = e.currentTarget.querySelector("button") as HTMLElement; if (b) b.style.opacity = "0"; }}>
                      <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}>{field.value}</span>
                      <button style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, background: "none", border: "none", cursor: "pointer", opacity: 0, transition: "opacity 0.15s", fontFamily: "var(--font-body)" }}>
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Save */}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 8 }}>
            <button className="liquid-glass" style={{ padding: "14px 40px", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#ffffff", background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")}>
              Save System State
            </button>
          </div>
        </div>

        {/* Right — billing + danger */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)", paddingBottom: 12, borderBottom: `1px solid ${BORDER}` }}>
            Billing & Tier
          </p>

          <div className="liquid-glass" style={{ borderRadius: 16, padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, fontFamily: "var(--font-body)" }}>Premium Tier</p>
              <CreditCard size={13} color={MUTED} />
            </div>
            <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "2rem", fontWeight: 400, color: "#ffffff", marginBottom: 10 }}>Executive</h3>
            <p style={{ fontSize: 12.5, color: MUTED, lineHeight: 1.65, marginBottom: 20, fontFamily: "var(--font-body)" }}>
              Your account is currently in the executive tier with unlimited neural matching capabilities.
            </p>
            <button className="liquid-glass" style={{ width: "100%", padding: "11px 0", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}>
              Manage Subscription <ExternalLink size={10} />
            </button>
          </div>

          {/* Danger zone */}
          <div style={{ borderRadius: 16, padding: 24, background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.06)` }}>
            <p style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,100,100,0.7)", fontFamily: "var(--font-body)", marginBottom: 10 }}>Danger Zone</p>
            <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.65, marginBottom: 16, fontFamily: "var(--font-body)" }}>
              Permanently delete your account and all analyzed resume data from the vault.
            </p>
            <button style={{ width: "100%", padding: "10px 0", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,100,100,0.7)", background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.15)", borderRadius: 9999, cursor: "pointer", fontFamily: "var(--font-body)", transition: "all 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,80,80,0.12)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,80,80,0.06)")}>
              Purge Data Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
