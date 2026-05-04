"use client";

export function AnalysisSkeleton() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="card p-5 space-y-3">
            <div className="skeleton h-3 w-20" />
            <div className="skeleton h-8 w-16" />
            <div className="skeleton h-1 w-full mt-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map(i => (
          <div key={i} className="card p-6 space-y-4">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-3 w-full" />
            <div className="skeleton h-3 w-5/6" />
            <div className="skeleton h-3 w-4/6" />
          </div>
        ))}
      </div>
      <div className="card p-6 space-y-4">
        <div className="skeleton h-4 w-28" />
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-xl border border-white/5 overflow-hidden">
            <div className="bg-[#161616] p-4 space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-3/4" />
            </div>
            <div className="bg-[#1a1a1a] p-4 space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
