import Image from "next/image";
import visionBG2 from "@/public/tc/images/visionBG2.png";
import visionBG from "@/public/tc/images/visionBG.png";
import visionIcon from "@/public/tc/icons/vision_icon.svg";
import missionIcon from "@/public/tc/icons/mision_icon.svg";

export default function VisionMision() {
  return (
    <section id="vision" className="w-full">
      <div className="tc-container mx-auto flex flex-col gap-16">
        <Image
          src={visionBG}
          className="absolute left-0 top-0 -z-10 -translate-x-2/3 -translate-y-1/2"
          alt=""
        />
        <Image
          src={visionBG2}
          className="absolute bottom-0 right-0 -z-10 translate-x-2/3 translate-y-1/2"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 lg:flex-row lg:justify-start">
          <Image
            src={visionIcon}
            className="mx-auto size-[128px] lg:mx-0 lg:size-auto lg:basis-3/12"
            alt=""
          />
          <div className="flex basis-5/12 flex-col justify-center text-center lg:gap-4 lg:text-left">
            <h2 className="text-[32px]">Visi</h2>
            <p>
              Menggabungkan kekuatan iman dan pemikiran untuk membentuk insan
              yang berteman dekat dengan Al-Qur’an
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-end gap-6 lg:flex-row">
          <div className="order-1 flex basis-5/12 flex-col justify-center text-center lg:gap-4 lg:text-left">
            <h2 className="text-[32px]">Misi</h2>
            <ul className="list-disc ps-6">
              <li>
                Sebagai wadah pengembangan hafalan sebagai pondasi iman yang
                kuat serta membentuk akhlak Qur’ani
              </li>
              <li>
                Membentuk atmosfer kekeluargan dengan keutamaan Qur’an di
                dalamnya.
              </li>
              <li>
                Mendorong penerapan nilai Qur’an sebagai landasan semangat yang
                penuh makna dan tujuan
              </li>
            </ul>
          </div>
          <Image
            className="mx-auto size-[128px] lg:order-2 lg:mx-0 lg:size-auto lg:basis-3/12"
            src={missionIcon}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
