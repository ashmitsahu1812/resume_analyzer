import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura — AI Resume Intelligence",
  description: "Where your career rises through the noise. AI-powered resume analysis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
