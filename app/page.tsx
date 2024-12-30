import Image from "next/image";
import Hero from "@/components/sections/home/Hero";
import Information from "@/components/sections/home/Information";
import Profile from "@/components/sections/home/Profile";
import Facilities from "@/components/sections/home/Facilities";

export default function Home() {
  return (
    <>
      <Hero />
      <Information />
      <Profile />
      <Facilities />
    </>
  );
}
