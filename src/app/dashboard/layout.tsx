import Sidebar from "@components/dashboard/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />

      <div className="lg:pl-72 bg-gray-50 min-h-screen">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"></div>

        <main className="py-10 ">
          <div className="px-4 sm:px-6 lg:px-8 ">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
