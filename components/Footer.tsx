import { Shades } from "@/components/decorations/shades";
import React from "react";
import Image from "next/image";
import logoMrp from "@/public/mrp-logo.png";
import unit from "@/public/units-compiled.png";
import yt from "@/public/icons/yt.svg";
import tiktok from "@/public/icons/tiktok.svg";
import tele from "@/public/icons/tele.svg";
import ig from "@/public/icons/ig.svg";
import fb from "@/public/icons/fb.svg";
import wa from "@/public/icons/wa.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={
        "glassmorphic-lg h-fit min-h-[900px] w-full overflow-hidden rounded-3xl rounded-b-none border-8 border-x-0 border-b-0 border-white" +
        " !bg-white/25" +
        " p-16 pb-0"
      }
    >
      <Shades
        className={"translate-x-1/5 right-0 top-0 -translate-y-1/4 blur-3xl"}
      />
      <Shades
        className={"bottom-0 left-0 -translate-x-1/4 translate-y-1/3 blur-3xl"}
      />

      <div
        className={
          "container flex w-full flex-col items-center justify-center gap-16"
        }
      >
        {/** Start Content Here */}
        <div
          className={"flex w-full flex-col items-center justify-center gap-8"}
        >
          <Image src={logoMrp} alt={"Logo Masjid Raden Patah"} />
          <div className={"text-center"}>
            <p className={"text-xl font-medium lg:text-2xl"}>
              Jalan Kampus Universitas Brawijaya
            </p>
            <p className={"text-lg lg:text-xl"}>
              Ketawanggede, Lowokwaru <br /> kota Malang Jawa Timur 65145
            </p>
          </div>
        </div>
        <div
          className={
            "flex w-full justify-center gap-10 [&_p]:text-center [&_p]:text-lg"
          }
        >
          {/*  Start Links Here*/}
          <div className={"space-y-3"}>
            <p className={"font-medium"}>Program</p>
            <p>Program Harian</p>
            <p>Program Tahunan</p>
          </div>
          <div className={"space-y-3"}>
            <p className={"font-medium"}>Layanan</p>
            <p>Akad Nikah</p>
            <p>Konsultasi Agama</p>
            <p>Mualaf Center</p>
          </div>
          <div className={"space-y-3"}>
            <p className={"font-medium"}>Artikel</p>
            <p>Fiqih</p>
            <p>Sejarah Islam</p>
            <p>Tauhid</p>
          </div>
          {/*  End Links Here*/}
        </div>
        <div className={"flex flex-col items-center justify-center gap-3"}>
          {/*  */}
          <p className={"text-center text-2xl font-medium"}>Ikuti Kami</p>
          <Image
            src={unit}
            alt={
              "Imam Muda, Digital Creative, Umar, Pusat Tahfidz Qur'an, dan MRP Lunch Space "
            }
          />
          <SocmedFooter />
          {/*  */}
        </div>
        {/** End Content Here */}
      </div>
    </footer>
  );
};
export default Footer;

const SocmedFooter = () => {
  return (
    <div
      className={
        "flex w-full items-center justify-center gap-4 [&_p]:text-xl [&_p]:font-medium"
      }
    >
      {/*  Start Here*/}
      <Link
        href={"https://wa.me/628993117777"}
        className={"flex items-center gap-3"}
      >
        <Image className={"size-6"} src={wa} alt={"whatsaapp 0899 311 7777"} />
        <p className={""}>0899 311 7777</p>
      </Link>
      <Link
        href={"https://youtube.com/@mrpmedia?si=BNpQh4uYrEqmxN_7"}
        className={"flex items-center gap-3"}
      >
        <Image className={"size-6"} src={yt} alt={"whatsaapp 0899 311 7777"} />
        <p className={""}>mrpmedia</p>
      </Link>
      <div className={"flex items-center gap-3"}>
        <div className={"flex gap-2"}>
          <Link href={"https://t.me/masjidradenpatah_ub"} target="_blank">
            <Image
              className={"size-6"}
              src={tele}
              alt={"Telegram: masjidradenpatah.ub"}
            />
          </Link>
          <Link
            href={"https://www.facebook.com/masjidradenpatah.ub"}
            target="_blank"
          >
            <Image
              className={"size-6"}
              src={fb}
              alt={"Facebook: masjidradenpatah.ub"}
            />
          </Link>
          <Link
            href={"https://www.instagram.com/masjidradenpatah.ub"}
            target="_blank"
          >
            <Image
              className={"size-6"}
              src={ig}
              alt={"Instagram: masjidradenpatah.ub"}
            />
          </Link>
          <Link
            href={"https://www.tiktok.com/@masjidradenpatah.ub"}
            target="_blank"
          >
            <Image
              className={"size-6"}
              src={tiktok}
              alt={"Tiktok: masjidradenpatah.ub"}
            />
          </Link>
        </div>

        <p>masjidradenpatah.ub</p>
      </div>
      {/*  End Here*/}
    </div>
  );
};
