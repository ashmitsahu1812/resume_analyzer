"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Sparkles, Settings, Zap } from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Job Match", href: "/dashboard/match" },
  { icon: Sparkles, label: "Interview Prep", href: "/dashboard/interview" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const BG = "hsl(201 100% 8%)";
const BG2 = "hsl(201 100% 11%)";
const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, bottom: 0, width: 224,
      background: BG, borderRight: `1px solid ${BORDER}`,
      display: "flex", flexDirection: "column", zIndex: 40,
    }}>
      {/* Logo */}
      <div style={{ padding: "22px 20px", borderBottom: `1px solid ${BORDER}` }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: "rgba(255,255,255,0.08)",
            border: `1px solid ${BORDER}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Zap size={14} color="rgba(255,255,255,0.7)" />
          </div>
          <span style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.2rem",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}>
            Aura
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
        <p style={{
          fontSize: 9, fontWeight: 500, letterSpacing: "0.18em",
          textTransform: "uppercase", color: MUTED,
          padding: "8px 10px 6px", fontFamily: "var(--font-body)",
        }}>
          Navigation
        </p>
        {nav.map((item) => {
          const active = path === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 10, textDecoration: "none",
              fontSize: 13, fontWeight: 400, transition: "all 0.15s",
              background: active ? "rgba(255,255,255,0.07)" : "transparent",
              color: active ? "#ffffff" : MUTED,
              borderLeft: active ? "2px solid rgba(255,255,255,0.4)" : "2px solid transparent",
              fontFamily: "var(--font-body)",
            }}>
              <item.icon size={14} color={active ? "rgba(255,255,255,0.8)" : MUTED} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Credits */}
      <div style={{ padding: 14, borderTop: `1px solid ${BORDER}` }}>
        <div className="liquid-glass" style={{ borderRadius: 12, padding: "14px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: MUTED, fontFamily: "var(--font-body)" }}>Credits</span>
            <span style={{ fontSize: 11, color: "#ffffff", fontFamily: "'Instrument Serif', serif" }}>97/100</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: "97%", height: "100%", background: "rgba(255,255,255,0.35)", borderRadius: 2 }} />
          </div>
          <p style={{ fontSize: 9, color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 8, fontFamily: "var(--font-body)" }}>
            Free plan
          </p>
        </div>
      </div>
    </aside>
  );
}
