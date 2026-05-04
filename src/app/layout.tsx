import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura — AI Resume Intelligence",
  description: "Analyze, optimize, and perfect your resume with AI. Land more interviews.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
