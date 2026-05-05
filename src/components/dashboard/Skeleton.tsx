"use client";

const BORDER = "rgba(255,255,255,0.07)";

function Bar({ w = "100%", h = 12 }: { w?: string; h?: number }) {
  return (
    <div className="shimmer" style={{
      width: w, height: h, borderRadius: 6,
      background: "linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%)",
      backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite"
    }} />
  );
}

export function AnalysisSkeleton() {
  const card: React.CSSProperties = { background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 16, padding: 20 };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }} className="score-grid">
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ ...card, borderRadius: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <Bar w="50%" h={9} />
            <Bar w="40%" h={28} />
            <Bar w="100%" h={2} />
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="analysis-grid">
        {[1, 2].map(i => (
          <div key={i} style={{ ...card, display: "flex", flexDirection: "column", gap: 12 }}>
            <Bar w="35%" h={12} />
            <Bar w="100%" h={11} />
            <Bar w="85%" h={11} />
            <Bar w="70%" h={11} />
          </div>
        ))}
      </div>
      <div style={{ ...card, display: "flex", flexDirection: "column", gap: 12 }}>
        <Bar w="25%" h={12} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
            <div style={{ background: "rgba(255,255,255,0.02)", padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <Bar w="100%" h={10} /> <Bar w="75%" h={10} />
            </div>
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
              <Bar w="100%" h={10} /> <Bar w="60%" h={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
