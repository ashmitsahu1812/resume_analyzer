import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 ml-56 bg-[#fbfbfd] min-h-screen">
        {children}
      </main>
    </div>
  );
}
