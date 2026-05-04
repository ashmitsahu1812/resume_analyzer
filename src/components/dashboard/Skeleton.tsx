"use client";

export function AnalysisSkeleton() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="rounded-2xl border border-white/8 bg-zinc-900/50 p-5 space-y-3">
            <div className="shimmer h-3 w-20 rounded" />
            <div className="shimmer h-8 w-16 rounded" />
            <div className="shimmer h-1.5 w-full rounded-full mt-2" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map(i => (
          <div key={i} className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6 space-y-4">
            <div className="shimmer h-4 w-24 rounded" />
            <div className="shimmer h-3 w-full rounded" />
            <div className="shimmer h-3 w-5/6 rounded" />
            <div className="shimmer h-3 w-4/6 rounded" />
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-white/8 bg-zinc-900/50 p-6 space-y-4">
        <div className="shimmer h-4 w-28 rounded" />
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-xl border border-white/5 overflow-hidden">
            <div className="bg-zinc-900 p-4 space-y-2">
              <div className="shimmer h-3 w-full rounded" />
              <div className="shimmer h-3 w-3/4 rounded" />
            </div>
            <div className="bg-zinc-800/50 p-4 space-y-2">
              <div className="shimmer h-3 w-full rounded" />
              <div className="shimmer h-3 w-2/3 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
