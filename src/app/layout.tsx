import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AI Resume Analyzer | Optimize Your Career",
  description: "Get deep, actionable feedback on your resume with our AI-powered ATS analyzer. Improve your hiring chances today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased dark`}>
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
