import Image from "next/image";
import heroBG2 from "@/public/tc/images/heroBG2.png";
import heroBG from "@/public/tc/images/heroBG.png";
import logoTC from "@/public/tc/logo/logoTC.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="tc-container mx-auto flex h-[871px] w-full flex-col justify-center border-red-500"
    >
      <Image
        src={heroBG2}
        className="absolute bottom-0 left-0 -z-10 -translate-x-2/3 translate-y-1/3"
        alt=""
      />
      <div className="flex flex-col lg:flex-row">
        <div className="order-11 flex w-full flex-col justify-center gap-4 lg:order-1">
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <h1 className="text-[32px] font-semibold lg:text-[40px]">
              Tahfidz Camp
              <br />
              Pusat Tahfidz Al-Qur&#39;an 2024
            </h1>
            <p className="text-[24px] lg:text-2xl">
              <i>Make Boundaries, Deepen Connection Through the Qur&#39;an</i>
            </p>
          </div>
          <div className="flex justify-center gap-4 lg:justify-start">
            <div className="rounded-lg bg-[var(--tc-white)] px-[6px] py-2 text-center font-medium shadow md:px-[40px]">
              Apa itu Tahfidz Camp?
            </div>
          </div>
        </div>
        <div className="relative order-5 grid basis-5/12 place-content-center">
          <Image
            src={heroBG}
            className="absolute top-1/2 -z-10 -translate-y-1/2 scale-125 lg:scale-[3]"
            alt=""
          />
          <Image
            src={logoTC}
            className="h-[359px] w-[457px] object-cover lg:h-[277px] lg:w-[171px] lg:scale-150"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
