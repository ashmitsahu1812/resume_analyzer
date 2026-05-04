export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
  );
}

export function AnalysisSkeleton() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 rounded-[2rem]" />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Skeleton className="h-64 rounded-[2rem]" />
          <Skeleton className="h-96 rounded-[2rem]" />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <Skeleton className="h-48 rounded-[2rem]" />
          <Skeleton className="h-64 rounded-[2rem]" />
        </div>
      </div>
    </div>
  );
}
