import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import mualaf from "@/public/services/mualaf center.png";
import marriage from "@/public/services/akad nikah.png";
import consult from "@/public/services/konsutasi keagamaan.png";
import { CircleIcon } from "@/components/decorations/Icons";
import { CircleHelp, Phone } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className={
        "mt-32 flex size-full flex-col items-center gap-12 overflow-hidden px-4 py-32 sm:px-0 md:gap-24"
      }
    >
      <section
        data-testid="services-section"
        className={"container relative w-full space-y-24 p-4"}
      >
        <SectionTitle
          title={"Layanan Jama'ah"}
          subtitle={"Berbagai pilihan layanan siap membantu anda..."}
        ></SectionTitle>
        <div className="flex flex-col gap-12">
          <ServiceCard
            title={"Mualaf Center"}
            description={
              "<b>Lorem ipsum</b> dolor sit amet, consectetur <b>adipisicing elit</b>. Accusamus exercitationem numquam odio quam, sint suscipit" +
              " unde.  Laudantium, obcaecati, voluptatum? Consectetur cum dicta ea enim eveniet maxime omnis quos tempore vel?"
            }
            image={mualaf}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/mualaf-center"}
          />
          <ServiceCard
            title={"Konsultasi Keagamaan"}
            description={
              "Lorem ipsum <b>dolor sit amet</b>, consectetur adipisicing elit. Accusamus exercitationem numquam odio quam, sint suscipit unde." +
              " Laudantium, obcaecati, voluptatum? <b>Consectetur cum dicta</b> ea enim eveniet maxime omnis quos tempore vel?"
            }
            image={consult}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/konsultasi-keagamaan"}
          />
          <ServiceCard
            title={"Akad Nikah"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>Accusamus exercitationem numquam</b> odio quam, sint suscipit unde." +
              " Laudantium, obcaecati, voluptatum? Consectetur cum dicta ea enim eveniet maxime omnis quos tempore vel?"
            }
            image={marriage}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/akad-nikah"}
          />
        </div>
      </section>

      {/*  */}
      <section
        className={
          "container flex w-full flex-col gap-12 rounded-3xl bg-white/35 p-4 text-center font-medium md:p-16"
        }
      >
        <span className={"block w-full text-2xl md:text-4xl"}>
          Ingin ikut layanan{" "}
          <span className={"relative text-nowrap font-bold text-primary"}>
            Masjid Raden Patah
            <CircleIcon
              className={
                "absolute right-0 top-0 translate-x-full rotate-12 max-sm:-translate-y-1/2 md:-right-8 md:scale-150"
              }
            >
              {<CircleHelp />}
            </CircleIcon>
          </span>
        </span>
        <div className={"flex w-full items-center justify-center gap-4"}>
          <Link href={"https://wa.me/628993117777"}>
            <div
              className={
                "size-16 rounded-2xl bg-gradient-to-bl from-primary/0 via-primary/40 via-75% to-primary/60 p-4 md:size-24"
              }
            >
              <Phone className={"size-full fill-primary text-white/0"}></Phone>
            </div>
          </Link>
          <div
            className={
              "flex flex-col justify-center text-start md:items-center"
            }
          >
            <p className={"w-full text-start text-xl"}>Hubungi kami di:</p>
            <Link href={"https://wa.me/628993117777"}>
              <p className={"w-full text-start text-xl font-bold md:text-3xl"}>
                Call Center
              </p>
              <p
                className={"w-full text-start text-xl font-medium text-primary"}
              >
                0899 311 7777
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/*  */}
    </div>
  );
};
export default Page;
