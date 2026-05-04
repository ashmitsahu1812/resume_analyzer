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

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, bottom: 0, width: 224,
      background: "#111113", borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column", zIndex: 40,
    }}>
      {/* Logo */}
      <div style={{ padding: "20px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8, background: "#6366f1",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Zap size={15} color="white" fill="white" />
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, color: "white", letterSpacing: "-0.02em" }}>Aura</span>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: 2 }}>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", padding: "8px 12px 4px" }}>
          Navigation
        </p>
        {nav.map((item) => {
          const active = path === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "9px 12px", borderRadius: 8, textDecoration: "none",
              fontSize: 13.5, fontWeight: 500, transition: "all 0.15s",
              background: active ? "rgba(99,102,241,0.12)" : "transparent",
              color: active ? "#a5b4fc" : "#71717a",
            }}>
              <item.icon size={15} color={active ? "#818cf8" : "#52525b"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Credits */}
      <div style={{ padding: 16, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{
          background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: 16,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "#71717a", fontWeight: 500 }}>Credits</span>
            <span style={{ fontSize: 12, color: "white", fontWeight: 600 }}>97/100</span>
          </div>
          <div style={{ height: 4, background: "#27272a", borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: "97%", height: "100%", background: "#6366f1", borderRadius: 2 }} />
          </div>
          <p style={{ fontSize: 10, color: "#52525b", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>
            Free plan
          </p>
        </div>
      </div>
    </aside>
  );
}
