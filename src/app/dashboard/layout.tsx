import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "hsl(201 100% 8%)" }}>
      <Sidebar />
      {/* ml-56 on desktop, mt-14 on mobile for the top bar */}
      <div className="dashboard-main" style={{ flex: 1, marginLeft: 224, minHeight: "100vh", background: "hsl(201 100% 10%)" }}>
        {/* Mobile top padding so content isn't under the fixed top bar */}
        <div className="md:hidden" style={{ height: 56 }} />
        {children}
      </div>
    </div>
  );
}
