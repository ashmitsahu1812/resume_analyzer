import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#09090b]">
      <Sidebar />
      {/* ml-56 matches the sidebar w-56 */}
      <div className="flex-1 ml-56 min-h-screen">
        {children}
      </div>
    </div>
  );
}
