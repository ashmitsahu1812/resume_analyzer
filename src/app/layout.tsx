import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-luxury",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-elegant",
});

export const metadata: Metadata = {
  title: "Aura Resume | Luxury AI Career Intelligence",
  description: "Premium AI-powered career optimization platform. Where sophistication meets intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} ${playfair.variable} ${cormorant.variable} antialiased dark`}>
      <body className="min-h-screen relative">
        {/* Luxury Background */}
        <div className="luxury-bg">
          <div className="luxury-blob"></div>
          <div className="luxury-blob"></div>
          <div className="luxury-blob"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
