import {
  Lock,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  ChevronUp,
  UserCircle,
  LucideProps,
  ChevronDown,
  PenLine,
  Newspaper,
  Boxes,
  Box,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { User } from "@prisma/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import SignOutButton from "@/components/SignOutButton";
import logoMRP from "@/public/mrp-logo.png";
import Link from "next/link";

const CollapsibleMenuGroup = ({
  label,
  items,
  MenuIcon,
}: {
  label: string;
  items: Array<{
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  }>;
  MenuIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}) => (
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
                <SidebarMenuButton className={"ps-6"} asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  </SidebarGroup>
);

// Komponen untuk Dropdown Footer
function SidebarDropdownFooter<T>({
  username,
  dropdownItems,
  render,
}: {
  username: string;
  dropdownItems: T[];
  render: (item: T, index: number) => ReactNode;
}) {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> {username}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              {dropdownItems.map((item, index) => render(item, index))}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

const profileItems = [
  { title: "Profile", url: "/dashboard/profile", icon: Home },
  { title: "Articles", url: "/dashboard/articles", icon: PenLine },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

const adminItems = [
  {
    title: "Manage User",
    url: "/dashboard/admin/manage-users",
    icon: UsersRound,
  },
  {
    title: "Manage articles",
    url: "/dashboard/admin/manage-articles",
    icon: Newspaper,
  },
  {
    title: "Manage Upcoming Program",
    url: "/dashboard/admin/manage-upcoming-programs",
    icon: Box,
  },
  {
    title: "Manage Programs",
    url: "/dashboard/admin/manage-programs",
    icon: Boxes,
  },
  { title: "Settings", url: "/dashboard/admin/settings", icon: Settings },
];

const dropdownItems: ReactNode[] = [
  // "Account",
  // "Billing",
  <SignOutButton
    key={"signout"}
    variant={"destructive"}
    className={"flew-grow flex h-9 w-full p-0 text-sm font-normal"}
  />,
];

// Komponen Utama
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
          items={profileItems}
          MenuIcon={UserCircle}
        />
        <CollapsibleMenuGroup
          label="Admin"
          items={adminItems}
          MenuIcon={Lock}
        />
      </SidebarContent>
      <SidebarDropdownFooter
        username={user.name as string}
        dropdownItems={dropdownItems}
        render={(item, index) => (
          <DropdownMenuItem key={index} className={"flex w-full"}>
            {item}
          </DropdownMenuItem>
        )}
      />
    </Sidebar>
  );
}
