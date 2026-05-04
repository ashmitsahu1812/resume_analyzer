"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Sparkles, Settings, Zap } from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Job Match", href: "/dashboard/match" },
  { icon: Sparkles, label: "Interview Prep", href: "/dashboard/interview" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-56 z-40 flex flex-col bg-[#111113] border-r border-white/5">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-[15px] font-semibold text-white tracking-tight">Aura</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        <p className="px-3 py-2 text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mt-1">
          Navigation
        </p>
        {nav.map((item) => {
          const active = path === item.href;
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13.5px] font-medium transition-all ${active
                  ? "bg-indigo-500/12 text-indigo-300"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}>
              <item.icon className={`w-4 h-4 shrink-0 ${active ? "text-indigo-400" : ""}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Credits */}
      <div className="p-4 border-t border-white/5">
        <div className="rounded-xl border border-white/8 bg-white/3 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-medium text-zinc-400">Credits</span>
            <span className="text-[12px] font-semibold text-white">97/100</span>
          </div>
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full" style={{ width: "97%" }} />
          </div>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600">Free plan</p>
        </div>
      </div>
    </aside>
  );
}
