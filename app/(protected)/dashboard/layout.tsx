import React, { ReactNode } from "react";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarTriggerButton } from "@/components/SidebarTriggerButton";
import { DynamicBreadcrumb } from "@/components/DynamicCollapsibleBreadcrumb";
import { House } from "lucide-react";
import Link from "next/link";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session) return redirect("/signIn");

  return (
    <SidebarProvider className={"flex size-full"}>
      <div className={"w-fit"}>
        <DashboardSidebar user={session.user} />
        {/*<div className={"w-full bg-blue-700/50"}></div>*/}
      </div>
      <div className={"size-full bg-red-800/15"}>
        <div className={"bg-sidebar flex w-full items-center gap-4 p-4"}>
          <SidebarTriggerButton />
          <Link href={"/"}>
            <House></House>
          </Link>
          <DynamicBreadcrumb />
          {/*  TODO: Add breadcrumb here*/}
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
};
export default Layout;
