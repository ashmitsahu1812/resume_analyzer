"use client";

import Link from "next/link";
import { Crown, Sparkles, Shield, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-yellow-400/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center font-black text-black luxury-glow">
                <Crown className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-luxury font-bold tracking-tighter gold-text-static">Aura</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-yellow-400/60 font-black">Luxury Intelligence</span>
              </div>
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed font-elegant text-lg">
              The pinnacle of AI-powered career optimization. Crafted for discerning professionals who demand excellence in every detail.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold gold-text-static">Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold gold-text-static">Enterprise Grade</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] gold-text-static flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Premium Suite
            </h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Elite Diagnostics</Link></li>
              <li><Link href="/dashboard" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Neural Matching</Link></li>
              <li><Link href="/dashboard/interview" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Executive Intelligence</Link></li>
              <li><Link href="/dashboard/settings" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Luxury Settings</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] gold-text-static">Excellence</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Privacy Charter</Link></li>
              <li><Link href="#" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Terms of Excellence</Link></li>
              <li><Link href="#" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Security Standards</Link></li>
              <li><Link href="#" className="text-sm text-white/50 hover:text-yellow-400 transition-colors font-medium">Premium Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30">
              © 2024 Aura Intelligence. Crafted with Excellence.
            </p>
            <div className="flex items-center gap-4">
              <div className="status-dot"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">System Status: Optimal</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="glass-card px-6 py-3 rounded-2xl border border-yellow-400/20">
              <div className="flex items-center gap-3">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-bold gold-text-static">Premium Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
