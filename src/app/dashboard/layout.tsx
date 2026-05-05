import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "hsl(201 100% 8%)" }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: 224, minHeight: "100vh", background: "hsl(201 100% 10%)" }}>
        {children}
      </div>
    </div>
  );
}
