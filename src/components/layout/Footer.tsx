"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <p className="text-[17px] font-semibold text-[#1d1d1f] mb-3">Aura</p>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-xs">
              The smartest way to optimize your resume. Powered by AI, designed for humans.
            </p>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wide">Product</p>
            <ul className="space-y-2.5">
              {[["#features", "Features"], ["/dashboard", "Dashboard"], ["/dashboard/interview", "Interview Prep"]].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] mb-4 uppercase tracking-wide">Legal</p>
            <ul className="space-y-2.5">
              {[["#", "Privacy Policy"], ["#", "Terms of Use"], ["#", "Security"]].map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="divider mb-6" />
        <p className="text-[12px] text-[#6e6e73]">Copyright © 2024 Aura Intelligence. All rights reserved.</p>
      </div>
    </footer>
  );
}
