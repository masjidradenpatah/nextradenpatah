import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Masjid Raden Patah",
  description: "Masjid Raden Patah Universitas Brawijaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${inter.variable} ${inter.className} antialiased flex flex-col bg-[#EDEDED]`}
      >
      <Navbar />
      <main className={'flex-grow  flex flex-col items-center'}>
        {children}

      </main>
      <Footer />
      </body>
    </html>
  );
}
