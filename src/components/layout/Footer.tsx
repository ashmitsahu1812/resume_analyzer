"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "64px 24px 48px",
      background: "hsl(201 100% 13%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "1.5rem",
              color: "hsl(0 0% 100%)",
              letterSpacing: "-0.02em",
              display: "block",
              marginBottom: 16,
            }}>
              Aura<sup style={{ fontSize: "0.6rem", verticalAlign: "super" }}>®</sup>
            </span>
            <p style={{
              fontSize: 13.5,
              color: "hsl(240 4% 45%)",
              lineHeight: 1.75,
              maxWidth: 280,
              fontFamily: "var(--font-body)",
            }}>
              AI-powered resume intelligence for deep thinkers and bold creators who refuse to be filtered out.
            </p>
          </div>

          {/* Product */}
          <div>
            <p style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "hsl(240 4% 45%)",
              marginBottom: 20,
              fontFamily: "var(--font-body)",
            }}>
              Product
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["#features", "Features"], ["/dashboard", "Dashboard"], ["/dashboard/interview", "Interview Prep"]].map(([href, label]) => (
                <Link key={href} href={href} style={{
                  fontSize: 13.5,
                  color: "hsl(240 4% 45%)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 100%)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(240 4% 45%)")}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "hsl(240 4% 45%)",
              marginBottom: 20,
              fontFamily: "var(--font-body)",
            }}>
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[["#", "Privacy"], ["#", "Terms"], ["#", "Security"]].map(([href, label]) => (
                <Link key={label} href={href} style={{
                  fontSize: 13.5,
                  color: "hsl(240 4% 45%)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(0 0% 100%)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "hsl(240 4% 45%)")}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28 }}>
          <p style={{
            fontSize: 12,
            color: "hsl(240 4% 35%)",
            fontFamily: "var(--font-body)",
          }}>
            © 2024 Aura Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
