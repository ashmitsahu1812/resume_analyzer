"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Target, 
  Settings, 
  HelpCircle,
  FileSearch,
  Sparkles,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, name: "Project Report", href: "/dashboard" },
  { icon: Target, name: "Alignment Engine", href: "/dashboard/match" },
  { icon: FileText, name: "Interview Intel", href: "/dashboard/interview" },
  { icon: Settings, name: "System Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-black border-r border-white/5 flex flex-col h-screen sticky top-0">
      <div className="p-10">
        <Link href="/" className="flex flex-col gap-1 group">
          <span className="text-2xl font-bold tracking-tighter text-white">AURA.</span>
          <span className="text-[7px] uppercase tracking-[0.5em] text-white/30 font-bold">Standard Labs</span>
        </Link>
      </div>

      <nav className="flex-1 px-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-4 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all",
              pathname === item.href
                ? "text-white bg-white/5 border-l-2 border-white"
                : "text-white/30 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-8 border-t border-white/5">
        <div className="p-6 border border-white/10 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold text-white/30 tracking-widest">CREDITS</span>
            <span className="text-xs font-bold text-white">03 / 100</span>
          </div>
          <div className="w-full h-[1px] bg-white/10" />
          <div className="flex items-center gap-2 text-[9px] text-white/20 font-bold tracking-widest">
            <div className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
            STABLE CONNECT
          </div>
        </div>
      </div>
    </aside>
  );
}
