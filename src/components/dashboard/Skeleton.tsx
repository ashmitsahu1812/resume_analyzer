"use client";

export function AnalysisSkeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white rounded-[18px] border border-black/5 p-5 space-y-3">
            <div className="skeleton h-3 w-20" />
            <div className="skeleton h-8 w-16" />
            <div className="skeleton h-1.5 w-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2].map(i => (
          <div key={i} className="bg-white rounded-[18px] border border-black/5 p-6 space-y-3">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-3 w-full" />
            <div className="skeleton h-3 w-5/6" />
            <div className="skeleton h-3 w-4/6" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-[18px] border border-black/5 p-6 space-y-4">
        <div className="skeleton h-4 w-28" />
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-[14px] border border-black/5 overflow-hidden">
            <div className="bg-[#fbfbfd] p-4 space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-3/4" />
            </div>
            <div className="p-4 space-y-2">
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
