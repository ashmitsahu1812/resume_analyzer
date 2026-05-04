"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Sparkles, Settings, Zap } from "lucide-react";
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
    <aside className="w-56 fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-[#111] border-r border-white/5">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[15px] font-bold text-white tracking-tight">Aura</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        <p className="label-xs px-3 py-2 mt-1">Navigation</p>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn("sidebar-link", path === item.href && "active")}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Credits */}
      <div className="p-4 border-t border-white/5">
        <div className="card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#a0a0a0]">Credits</span>
            <span className="text-[12px] font-semibold text-white">97/100</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill bg-indigo-500" style={{ width: "97%" }} />
          </div>
          <p className="label-xs">Free plan</p>
        </div>
      </div>
    </aside>
  );
}
