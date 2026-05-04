"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Sparkles, Settings, Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Job Match", href: "/dashboard/match" },
  { icon: Sparkles, label: "Interview Prep", href: "/dashboard/interview" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-60 fixed left-0 top-0 bottom-0 z-40 flex flex-col border-r border-cyan-400/10 bg-[#020408]">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-cyan-400/10">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-cyan-400/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
            <Zap className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-black tracking-[0.3em] text-white uppercase">AURA</div>
            <div className="text-[9px] tracking-[0.3em] text-cyan-400/50 uppercase font-mono">Neural AI</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        <p className="cyber-label px-3 mb-3 mt-2">Navigation</p>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn("nav-item rounded-sm", path === item.href && "active")}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* System status */}
      <div className="p-4 border-t border-cyan-400/10">
        <div className="panel p-4 rounded-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="cyber-label">System</span>
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-600">AI Engine</span>
              <div className="status-online text-[9px]">
                <div className="status-dot" />
                Online
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-slate-600">Credits</span>
              <span className="text-[10px] font-mono text-white">97/100</span>
            </div>
            <div className="progress-track mt-1">
              <div className="progress-fill" style={{ width: "97%" }} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
