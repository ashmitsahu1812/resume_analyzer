"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Target, 
  Settings, 
  HelpCircle,
  FileSearch,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Target, label: "Job Matching", href: "/dashboard/match" },
  { icon: Sparkles, label: "Interview Prep", href: "/dashboard/interview" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen border-r border-white/5 bg-[#0a0a0a] flex flex-col p-6 fixed left-0 top-0">
      <Link href="/" className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg">
          <FileSearch className="text-white w-5 h-5" />
        </div>
        <span className="text-lg font-bold tracking-tight">
          Resume<span className="gradient-text">AI</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
              pathname === item.href 
                ? "bg-primary/10 text-primary shadow-[inset_0px_0px_12px_rgba(139,92,246,0.1)]" 
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
            )} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
        <Link 
          href="#" 
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
        >
          <HelpCircle className="w-5 h-5" />
          Support
        </Link>
      </div>
    </aside>
  );
}
