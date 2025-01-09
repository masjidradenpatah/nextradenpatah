import Image from "next/image";
import tower from "@/public/hero section/menara mrp.png";
import { Shades } from "@/components/decorations/shades";
import { CircleIcon } from "@/components/decorations/Icons";
import { Book, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <div className={"relative flex h-[650px] w-full"}>
      <HeroBackground />
      <div className={"container flex"}>
        <HeroLeftSide />
        <HeroRightSide />
      </div>
    </div>
  );
};
export default Hero;

const HeroBackground = () => {
  return (
    <div className={"absolute -z-10 flex h-full w-full"}>
      <div className="glassmorphic-lg h-full flex-grow"></div>
      <div className="h-full flex-grow bg-secondary"></div>
    </div>
  );
};

const HeroLeftSide = () => {
  return (
    <div className={"relative flex h-full w-1/2 flex-col justify-center"}>
      <CircleIcon
        icon={<Book />}
        className={"absolute -translate-y-24 -rotate-12"}
      />
      <CircleIcon
        icon={<GraduationCap />}
        className={"absolute right-0 -translate-x-24 -translate-y-8 rotate-12"}
      />
      <p className={"text-4xl text-muted-foreground"}>Selamat Datang di</p>
      <h1 className={"my-2 text-7xl font-bold text-primary"}>
        Masjid Raden Patah
      </h1>
      <p className={"text-2xl text-muted-foreground"}>Universitas Brawijaya</p>
    </div>
  );
};

const HeroRightSide = () => {
  return (
    <div className={"relative h-full w-1/2"}>
      {/* Start background here */}
      <div className={"flex h-full w-full"}>
        <div className={"relative h-full w-1/2 overflow-hidden"}>
          <Shades className={"-translate-x-1/5 left-0 top-0 opacity-75"} />
        </div>
        <div className={"ov relative h-full w-1/2"}>
          <Shades className={"bottom-0 right-0 translate-x-0 opacity-75"} />
        </div>
      </div>
      {/* End background here */}

      <div
        className={
          "absolute bottom-0 left-1/2 h-[566px] w-[353px] -translate-x-1/2 rounded-3xl rounded-b-none border-8 border-b-0 border-white"
        }
      />
      <Image
        src={tower}
        alt={"Gambar Menara MRP"}
        className={"absolute bottom-0 left-1/2 -translate-x-1/2"}
      />
    </div>
  );
};
