import SideNav from '@/app/ui/dashboard/sidenav';

// export const experimental_ppr = true;

type Props = { children: React.ReactNode }

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}