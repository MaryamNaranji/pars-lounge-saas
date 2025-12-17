import { Nav } from '@/components/dashboard/nav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>
    </div>
  );

}
