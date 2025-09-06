import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ImageKitProvider } from "@/components/ImageKit";
import React, { ReactNode } from "react";
import QueryClientWrapper from "@/components/QueryClientWrapper";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Masjid Raden Patah",
    template: "%s - Masjid Raden Patah",
  },
  description: "Masjid Raden Patah Universitas Brawijaya, Malang",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientWrapper>
        <ImageKitProvider>
          <body
            className={`${poppins.variable} ${poppins.className} flex flex-col bg-white antialiased`}
          >
            {modal}
            <Navbar />
            <main className={"w-full"}>{children}</main>
            <Footer />
            <Toaster />
            <SpeedInsights />
            <Analytics />
          </body>
        </ImageKitProvider>
      </QueryClientWrapper>
    </html>
  );
}
