import Image from "next/image";
import whyBG from "@/public/tc/images/whyBG.png";
import whyBG2 from "@/public/tc/images/whyBG2.png";
import visionIcon from "@/public/tc/icons/vision_icon.svg";
import lingkunganQuraniIcon from "@/public/tc/icons/lingkungan_qurani.svg";
import kegiatanSeruIcon from "@/public/tc/icons/kegiatan_seru.svg";

export default function WhyJoin() {
  return (
    <section id="why" className="w-full">
      <div className="tc-container mx-auto">
        <Image
          src={whyBG}
          className="absolute left-0 top-0 -z-10 -translate-x-2/3 -translate-y-1/2"
          alt=""
        />
        <Image
          src={whyBG2}
          className="absolute bottom-0 right-0 -z-10 translate-x-2/3 translate-y-1/2"
          alt=""
        />
        <div className="flex flex-col gap-8">
          <h2 className="whatActivitiesTC sectionTitle text-center font-semibold">
            Kenapa Kamu Harus Ikut Tahfidz Camp ?
          </h2>
          <div className="flex flex-col justify-center gap-[72px] lg:flex-row">
            <div className="flex basis-3/12 items-center justify-start gap-2 lg:flex-col lg:gap-4">
              <Image
                src={visionIcon}
                className="size-[124px] md:size-[167px]"
                alt=""
              />
              <h3 className="text-[24px] font-semibold lg:text-center lg:text-[32px]">
                Kegiatannya Bermanfaat
              </h3>
            </div>
            <div className="flex basis-3/12 items-center justify-start gap-2 lg:flex-col lg:gap-4">
              <Image
                src={lingkunganQuraniIcon}
                className="size-[124px] md:size-[167px]"
                alt=""
              />
              <h3 className="text-[24px] font-semibold lg:text-center lg:text-[32px]">
                Lingkungan Qur`&#39;ani
              </h3>
            </div>
            <div className="flex basis-3/12 items-center justify-start gap-2 lg:flex-col lg:gap-4">
              <Image
                src={kegiatanSeruIcon}
                className="size-[124px] md:size-[167px]"
                alt=""
              />
              <h3 className="text-[24px] font-semibold lg:text-center lg:text-[32px]">
                Kegiatannya Seru-Seru
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
