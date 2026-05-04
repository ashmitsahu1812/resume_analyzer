"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-cyan-400/60 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <span className="text-sm font-black tracking-[0.3em] text-white uppercase">AURA</span>
            </div>
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Next-generation AI resume intelligence. Built for engineers, designers, and professionals who refuse to be filtered out.
            </p>
          </div>

          <div>
            <p className="cyber-label mb-4">Platform</p>
            <ul className="space-y-3">
              {[["#features", "Diagnostics"], ["/dashboard", "Neural Match"], ["/dashboard/interview", "Interview Prep"]].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-600 hover:text-cyan-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="cyber-label mb-4">Legal</p>
            <ul className="space-y-3">
              {[["#", "Privacy"], ["#", "Terms"], ["#", "Security"]].map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-600 hover:text-cyan-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cyber-divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="cyber-label">© 2024 Aura Intelligence. All rights reserved.</p>
          <div className="status-online">
            <div className="status-dot" />
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
}
