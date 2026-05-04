"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  Settings,
  Sparkles,
  FileText,
  Crown,
  Award,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, name: "Elite Dashboard", href: "/dashboard" },
  { icon: Target, name: "Neural Match", href: "/dashboard/match" },
  { icon: Sparkles, name: "Executive Prep", href: "/dashboard/interview" },
  { icon: Settings, name: "Luxury Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 glass-nav border-r border-yellow-400/10 flex flex-col h-screen sticky top-0 backdrop-blur-3xl">
      <div className="p-12">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] luxury-glow">
            <Crown className="w-7 h-7 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-luxury font-bold tracking-tighter gold-text-static">Aura</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-yellow-400/60 font-black">Premium Suite</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-8 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-5 px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all group relative overflow-hidden",
              pathname === item.href
                ? "text-white bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                : "text-white/40 hover:text-yellow-400 hover:bg-yellow-400/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors relative z-10",
              pathname === item.href ? "text-yellow-400" : "group-hover:text-yellow-400"
            )} />
            <span className="relative z-10">{item.name}</span>

            {/* Active indicator */}
            {pathname === item.href && (
              <div className="absolute right-4 w-2 h-2 rounded-full bg-yellow-400 luxury-pulse" />
            )}
          </Link>
        ))}
      </nav>

      <div className="p-10">
        <div className="card-premium p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-[10px] font-bold gold-text-static tracking-widest uppercase">Premium Status</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">Analysis Credits</span>
              <span className="text-sm font-luxury font-bold gold-text-static">97 / 100</span>
            </div>
            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div className="w-[97%] h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
            </div>
          </div>

          <div className="pt-4 border-t border-yellow-400/20">
            <div className="flex items-center gap-3 text-[9px] text-white/50 font-black tracking-widest">
              <div className="status-dot" />
              <span className="gold-text-static">PREMIUM ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
