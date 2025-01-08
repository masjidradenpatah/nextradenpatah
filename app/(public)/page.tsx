import Hero from "@/components/sections/home/Hero";
import Information from "@/components/sections/home/Information";
import Profile from "@/components/sections/home/Profile";
import Map from "@/components/sections/home/Map";

export default function Home() {
  return (
    <div className={"flex h-full w-full flex-col items-center"}>
      <Hero />
      <Information />
      <Profile />
      {/*<Facilities />*/}
      <Map />
    </div>
  );
}
