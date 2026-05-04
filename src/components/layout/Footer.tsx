"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 24px", background: "#09090b" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="grid-footer">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#6366f1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={15} color="white" fill="white" />
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: "white" }}>Aura</span>
            </div>
            <p style={{ fontSize: 13.5, color: "#52525b", lineHeight: 1.7, maxWidth: 280 }}>
              The smartest way to optimize your resume. Powered by AI, built for job seekers who want results.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>Product</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["#features", "Features"], ["/dashboard", "Dashboard"], ["/dashboard/interview", "Interview Prep"]].map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: 13.5, color: "#52525b", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "white"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#52525b"}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: 20 }}>Legal</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[["#", "Privacy"], ["#", "Terms"], ["#", "Security"]].map(([href, label]) => (
                <Link key={label} href={href} style={{ fontSize: 13.5, color: "#52525b", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = "white"}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = "#52525b"}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 32 }} />
        <p style={{ fontSize: 12, color: "#3f3f46" }}>© 2024 Aura Intelligence. All rights reserved.</p>
      </div>
    </footer>
  );
}
