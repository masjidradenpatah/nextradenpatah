"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const ITEMS_TO_DISPLAY = 3; // Jumlah breadcrumb yang selalu ditampilkan

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean); // Pisahkan URL berdasarkan '/'
  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const title = decodeURIComponent(segment).replace(/-/g, " "); // Format judul
    return { href, title };
  });
}

export function DynamicBreadcrumb() {
  const pathname = usePathname(); // Ambil URL saat ini
  const breadcrumbs = generateBreadcrumbs(pathname);
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Deteksi ukuran layar
  const [open, setOpen] = useState(false); // State untuk Drawer atau Dropdown

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Tampilkan elemen pertama */}
        <BreadcrumbItem>
          <BreadcrumbLink href={breadcrumbs[0].href}>
            {breadcrumbs[0].title}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={"flex items-center"} />

        {/* Breadcrumb collapsible jika terlalu panjang */}
        {breadcrumbs.length > ITEMS_TO_DISPLAY ? (
          <>
            {/* Elemen tengah dalam Dropdown/Drawer */}
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {breadcrumbs.slice(1, -2).map((crumb, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={crumb.href}>{crumb.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="size-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {breadcrumbs.slice(1, -2).map((crumb, index) => (
                        <Link
                          key={index}
                          href={crumb.href}
                          className="py-1 text-sm"
                        >
                          {crumb.title}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}

        {/* Breadcrumb akhir yang selalu ditampilkan */}
        {breadcrumbs.length == 2 && (
          <BreadcrumbItem>
            <BreadcrumbLink href={breadcrumbs[1].href}>
              {breadcrumbs[1].title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
        {breadcrumbs.length > 2 &&
          breadcrumbs.slice(-ITEMS_TO_DISPLAY + 1).map((crumb, index) => (
            <BreadcrumbItem key={index}>
              {index === breadcrumbs.slice(-ITEMS_TO_DISPLAY).length - 1 ? (
                <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.title}</BreadcrumbLink>
              )}
              {index < breadcrumbs.slice(-ITEMS_TO_DISPLAY).length - 1 && (
                <BreadcrumbSeparator />
              )}
            </BreadcrumbItem>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
