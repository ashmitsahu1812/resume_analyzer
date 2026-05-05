import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velorah",
  description: "Where dreams rise through the silence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
