"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Target, Sparkles, Settings } from "lucide-react";
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
    <aside className="w-56 fixed left-0 top-0 bottom-0 z-40 flex flex-col bg-[#f5f5f7] border-r border-black/5">
      {/* Logo */}
      <div className="px-5 pt-6 pb-4">
        <Link href="/" className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">
          Aura
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn("sidebar-item", path === item.href && "active")}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-black/5">
        <div className="bg-white rounded-[14px] p-4 shadow-sm border border-black/5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[12px] font-medium text-[#1d1d1f]">Credits</p>
            <p className="text-[12px] font-semibold text-[#1d1d1f]">97/100</p>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "97%" }} />
          </div>
          <p className="label mt-2">Free plan</p>
        </div>
      </div>
    </aside>
  );
}
