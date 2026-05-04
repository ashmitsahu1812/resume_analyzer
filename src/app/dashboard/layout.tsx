import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen relative">
      {/* Luxury Background for Dashboard */}
      <div className="luxury-bg">
        <div className="luxury-blob"></div>
        <div className="luxury-blob"></div>
        <div className="luxury-blob"></div>
      </div>

      <Sidebar />
      <main className="flex-1 ml-64 p-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
