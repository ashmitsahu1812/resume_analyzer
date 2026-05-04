import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AURA // Neural Resume Intelligence",
  description: "Next-generation AI resume analysis platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen relative">
        <div className="grid-bg" />
        <div className="scanline" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
