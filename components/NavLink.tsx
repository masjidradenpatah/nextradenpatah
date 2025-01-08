import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ link, text }: { link: string; text: string }) => {
  const pathname = usePathname();

  function isCurrentPath(currentPath: string, linkPath: string): boolean {
    if (currentPath === linkPath) return true;
    if (currentPath === "/" || linkPath === "/") {
      return false;
    }
    return currentPath.startsWith(linkPath);
  }

  return (
    <Link
      href={link}
      className={`${isCurrentPath(pathname, link) ? "font-bold text-primary" : ""}`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
