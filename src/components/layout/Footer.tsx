"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[15px] font-bold text-white">Aura</span>
            </div>
            <p className="text-[13.5px] text-[#555] leading-relaxed max-w-xs">
              The smartest way to optimize your resume. Powered by AI, built for job seekers who want results.
            </p>
          </div>
          <div>
            <p className="label-xs mb-5">Product</p>
            <ul className="space-y-3">
              {[["#features", "Features"], ["/dashboard", "Dashboard"], ["/dashboard/interview", "Interview Prep"]].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[13.5px] text-[#555] hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-xs mb-5">Legal</p>
            <ul className="space-y-3">
              {[["#", "Privacy"], ["#", "Terms"], ["#", "Security"]].map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="text-[13.5px] text-[#555] hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="divider mb-8" />
        <p className="text-[12px] text-[#444]">© 2024 Aura Intelligence. All rights reserved.</p>
      </div>
    </footer>
  );
}
