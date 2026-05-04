"use client";

function Bar({ className }: { className?: string }) {
  return (
    <div className={`bg-cyan-400/5 animate-pulse rounded-sm ${className}`} />
  );
}

export function AnalysisSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cyan-400/10 border border-cyan-400/10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[#020408] p-6 space-y-3">
            <Bar className="h-3 w-20" />
            <Bar className="h-8 w-16" />
            <Bar className="h-1 w-full" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="panel rounded-sm p-6 space-y-3">
          <Bar className="h-3 w-24" />
          {[1, 2, 3].map((i) => <Bar key={i} className="h-4 w-full" />)}
        </div>
        <div className="panel rounded-sm p-6 space-y-3">
          <Bar className="h-3 w-24" />
          {[1, 2, 3].map((i) => <Bar key={i} className="h-4 w-full" />)}
        </div>
      </div>
      <div className="panel rounded-sm p-6 space-y-4">
        <Bar className="h-3 w-32" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="grid grid-cols-2 gap-px bg-cyan-400/10">
            <div className="bg-[#020408] p-4 space-y-2">
              <Bar className="h-3 w-full" />
              <Bar className="h-3 w-3/4" />
            </div>
            <div className="bg-[#020408] p-4 space-y-2">
              <Bar className="h-3 w-full" />
              <Bar className="h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
