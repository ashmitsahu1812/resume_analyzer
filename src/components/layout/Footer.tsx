"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-black">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter text-white">Aura.</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-black">Executive Intelligence</span>
              </div>
            </Link>
            <p className="text-white/30 max-w-sm leading-relaxed font-medium">
              The precision-engineered standard for modern career architecture. Built for high-stakes professional transitions and neural matching.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-sm text-white/40 hover:text-white transition-colors">Diagnostics</Link></li>
              <li><Link href="/dashboard" className="text-sm text-white/40 hover:text-white transition-colors">Neural Match</Link></li>
              <li><Link href="/dashboard/interview" className="text-sm text-white/40 hover:text-white transition-colors">Interview Intel</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © 2024 Aura Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
