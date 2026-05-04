"use client";

export function AnalysisSkeleton() {
  const card: React.CSSProperties = { background: "rgba(24,24,27,0.5)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 20 };
  const bar = (w: string, h = 12): React.CSSProperties => ({ width: w, height: h, borderRadius: 6 });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="score-grid">
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={card}>
            <div className="shimmer" style={bar("60%")} />
            <div className="shimmer" style={{ ...bar("40%", 32), marginTop: 12 }} />
            <div className="shimmer" style={{ ...bar("100%", 4), marginTop: 12, borderRadius: 2 }} />
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="analysis-grid">
        {[1, 2].map(i => (
          <div key={i} style={{ ...card, display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="shimmer" style={bar("40%")} />
            <div className="shimmer" style={bar("100%")} />
            <div className="shimmer" style={bar("85%")} />
            <div className="shimmer" style={bar("70%")} />
          </div>
        ))}
      </div>
      <div style={{ ...card, display: "flex", flexDirection: "column", gap: 12 }}>
        <div className="shimmer" style={bar("30%")} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ background: "#18181b", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="shimmer" style={bar("100%")} />
              <div className="shimmer" style={bar("75%")} />
            </div>
            <div style={{ background: "rgba(39,39,42,0.5)", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="shimmer" style={bar("100%")} />
              <div className="shimmer" style={bar("60%")} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
