"use client";
import React, { useState } from "react";
import Image from "next/image";
import mrplogo from "@/public/mrp-logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import MenuToggle from "@/components/MenuToggle";
import MobileNavbar from "@/components/MobileNavbar";
import NavLink from "@/components/NavLink";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  return (
    <header className={"fixed z-50 w-full bg-white"}>
      <nav
        className={
          "container mt-2 flex w-full items-center justify-between p-4 px-2"
        }
      >
        <div>
          <Image height={82} src={mrplogo} alt={"Logo Masjid Raden Patah"} />
        </div>
        <div className={"hidden gap-4 md:flex lg:gap-8"}>
          <NavLink link={"/"} text={"Home"} />
          <NavLink link={"/programs"} text={"Program"} />
          <NavLink link={"/services"} text={"Layanan"} />
          <NavLink link={"/article"} text={"Artikel"} />
          <NavLink link={"/contact"} text={"Kontak"} />
        </div>
        <div className={"hidden gap-4 md:flex"}>
          {isLoggedIn ? (
            <></>
          ) : (
            <>
              <Button
                variant={"outline"}
                className={"border-2 border-primary text-primary"}
                asChild={true}
              >
                <Link href={"/signIn"}>Sign In</Link>
              </Button>
              <Button asChild={true}>
                <Link href={"/signUp"}>Sign Up</Link>
              </Button>
            </>
          )}
        </div>
        <MenuToggle
          value={isNavbarOpen}
          onChange={() => setIsNavbarOpen((prev) => !prev)}
        />
        <div className="absolute top-0 h-full w-full md:hidden">
          <MobileNavbar isNavbarOpen={isNavbarOpen} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
