import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className={"flex-grow  flex flex-col items-center"}>
        {children}

      </main>
      <Footer />
    </>
  );
};
export default Layout;
