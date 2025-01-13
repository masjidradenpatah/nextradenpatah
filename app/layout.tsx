import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ImageKitProviderWrapper from "@/components/ImageKitProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <ImageKitProviderWrapper>
        <body
          className={`${poppins.variable} ${poppins.className} flex flex-col bg-[#EDEDED] antialiased`}
        >
          {children}
        </body>
      </ImageKitProviderWrapper>
    </html>
  );
}
