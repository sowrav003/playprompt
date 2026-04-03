import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "Playground-AI Dashboard",
  description:
    "A dashboard for managing and optimizing AI prompts. Write, test, and optimize your AI prompts with ease. Unlock the full potential of AI and create powerful, effective prompts that drive results.",
};

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">{children}</main>
    </SidebarProvider>
  );
}
