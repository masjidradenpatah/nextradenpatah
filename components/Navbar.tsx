"use client";
import React, { useState } from "react";
import Image from "next/image";
import mrplogo from "@/public/mrp-logo.png";

import MenuToggle from "@/components/MenuToggle";
import MobileNavbar from "@/components/MobileNavbar";
import NavLink from "@/components/NavLink";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  return (
    <header className={"fixed inset-x-0 z-40 bg-white/50 backdrop-blur-2xl"}>
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
          {/*<NavLink link={"/article"} text={"Artikel"} />*/}
          <NavLink link={"/contact"} text={"Kontak"} />
        </div>
        <MenuToggle
          value={isNavbarOpen}
          onChange={() => setIsNavbarOpen((prev) => !prev)}
        />
        <div className="absolute top-0 size-full md:hidden">
          <MobileNavbar isNavbarOpen={isNavbarOpen} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
