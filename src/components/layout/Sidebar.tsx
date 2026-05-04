"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Target, 
  Settings, 
  Sparkles,
  FileText,
  Gem
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, name: "Dashboard", href: "/dashboard" },
  { icon: Target, name: "Job Match", href: "/dashboard/match" },
  { icon: Sparkles, name: "Interview Prep", href: "/dashboard/interview" },
  { icon: Settings, name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-black/40 border-r border-white/5 flex flex-col h-screen sticky top-0 backdrop-blur-3xl">
      <div className="p-12">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <Gem className="w-6 h-6 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tighter text-white">Aura.</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 font-black">Executive</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-8 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-5 px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all group",
              pathname === item.href
                ? "text-white bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                : "text-white/30 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-4 h-4 transition-colors",
              pathname === item.href ? "text-white" : "group-hover:text-white"
            )} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-10">
        <div className="glass-card p-6 rounded-3xl space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">Analytics Credits</span>
            <span className="text-sm font-bold text-white">03 / 100</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[30%] h-full bg-white/40" />
          </div>
          <div className="flex items-center gap-2 text-[9px] text-white/40 font-black tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SECURE ENGINE ACTIVE
          </div>
        </div>
      </div>
    </aside>
  );
}
