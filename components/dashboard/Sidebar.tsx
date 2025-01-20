import { Lock, UserCircle, LucideProps, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import SignOutButton from "@/components/SignOutButton";
import logoMRP from "@/public/mrp-logo.png";
import Link from "next/link";
import { ADMIN_SIDEBAR, PROFILE_SIDEBAR } from "@/data/Sidebar";
import { SidebarDropdownFooter } from "@/components/SidebarFooter";

const dropdownFooterItems: ReactNode[] = [
  // "Account",
  // "Billing",
  <SignOutButton
    key={"signout"}
    variant={"destructive"}
    className={"flew-grow flex h-9 w-full p-0 text-sm font-normal"}
  />,
];

export interface CollapsibleMenuItems {
  title: string;
  url?: string;
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  subItems?: Array<{
    title: string;
    url?: string;
    icon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }>;
}
export interface CollapsibleMenuGroupProps {
  label: string;
  items: Array<CollapsibleMenuItems>;
  MenuIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const CollapsibleMenuGroup = ({
  label,
  items,
  MenuIcon,
}: CollapsibleMenuGroupProps) => (
  <SidebarGroup>
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroupLabel>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {MenuIcon && <MenuIcon className="me-2" />}
            {label}
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
      </SidebarGroupLabel>
      <SidebarSeparator className="my-2" />
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={"ps-6"}
                  asChild={!!item.url}
                  disabled={!item.url}
                >
                  {item.url ? (
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </>
                  )}
                </SidebarMenuButton>
                {item.subItems && (
                  <SidebarMenu>
                    {item.subItems.map(({ title, url, icon: Icon }) => (
                      <SidebarMenuSubItem key={title}>
                        <SidebarMenuButton className={"ps-10"} asChild>
                          <a href={url}>
                            {Icon && <Icon />}
                            <span>{title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenu>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  </SidebarGroup>
);

export function DashboardSidebar({ user }: { user: User }) {
  return (
    <Sidebar collapsible={"offcanvas"}>
      <SidebarHeader>
        <Link href={"/"}>
          <Image
            src={logoMRP}
            alt={"logo mrp"}
            className={"relative mx-auto object-contain"}
            width={125}
            height={125}
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <CollapsibleMenuGroup
          label="User"
          items={PROFILE_SIDEBAR}
          MenuIcon={UserCircle}
        />

        {user.role === "ADMIN" && (
          <CollapsibleMenuGroup
            MenuIcon={Lock}
            items={ADMIN_SIDEBAR}
            label={"Admin"}
          />
        )}
      </SidebarContent>
      <SidebarDropdownFooter
        username={user.name as string}
        dropdownItems={dropdownFooterItems}
        render={(item, index) => (
          <DropdownMenuItem key={index} className={"flex w-full"}>
            {item}
          </DropdownMenuItem>
        )}
      />
    </Sidebar>
  );
}
