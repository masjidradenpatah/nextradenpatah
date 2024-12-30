"use client";
import FacilityCard from "@/components/FacilityCard";
import eyeglasses from "@/public/facilities/eyeglasses.jpg";
import robe from "@/public/facilities/mukena.jpg";
import p3k from "@/public/facilities/kotak_p3k.jpg";
import penitipan_barang from "@/public/facilities/tempat_penitipan_barang.jpg";
import plastik_sepatu from "@/public/facilities/plastik_sepatu.jpg";
import shoes from "@/public/facilities/rak_sepatu.jpg";
import qris_mrp from "@/public/facilities/qris_mrp.jpg";
import proyektor from "@/public/facilities/proyektor.jpg";
import braille from "@/public/facilities/quran_braille.jpg";
import etalase_barang_temuan
  from "@/public/facilities/etalase_barang_temuan.jpg";
import cctv from "@/public/facilities/cctv.jpg";
import charger_box from "@/public/facilities/charger_box.jpg";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";
import { log } from "node:util";

// TODO: This is from DATABASE
interface Facility {
  image: StaticImageData;
  title: string;
  icon: ReactNode;
}

const facilities: Facility[] = [
  {
    title: "Kacamata Baca",
    image: eyeglasses,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Mukena",
    image: robe,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "CCTV",
    image: cctv,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Kotak P3K ",
    image: p3k,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Etalase Barang Temuan ",
    image: etalase_barang_temuan,
    icon: <Eye className={"text-white"} />
  }
  ,
  {
    title: "Charger Box ",
    image: charger_box,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Tempat Penitipan Barang",
    image: penitipan_barang,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Plastik Alas Kaki Jama'ah",
    image: plastik_sepatu,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Kotak Infaq Digital (Qris)",
    image: qris_mrp,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Qur'an Braille",
    image: braille,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Lemari Alas Kaki",
    image: shoes,
    icon: <Eye className={"text-white"} />
  },
  {
    title: "Proyektor",
    image: proyektor,
    icon: <Eye className={"text-white"} />
  }
];

const Facilities = () => {
  const [current, setCurrent] = useState<number>(0);

  const facilitiesLoop: Facility[] = [
    ...facilities.slice(current, current + 5),
    ...facilities.slice(0, Math.max(0, current + 5 - facilities.length)) // Wrap around if needed
  ];
  const prev = () => {
    // Update current and loop
    const newCurrent = (current - 1 + facilities.length) % facilities.length;
    setCurrent(newCurrent);
    console.log(newCurrent);
  };

  const next = () => {
    // Update current and loop
    const newCurrent = (current + 1) % facilities.length;
    setCurrent(newCurrent);
    console.log(newCurrent * (100 / facilities.length));
  };


  return (
    <>
      <div className={"bg-secondary w-full py-[120px] "}>
        <div className={"flex flex-col mb-4"}>
          <h2 className={"text-3xl font-bold text-center"}>Fasilitas di Masjid
            Raden Patah</h2>
          <p className={"text-center"}>Yuk kita lihat fasilitas yang ada di
            Masjid Raden Patah</p>
        </div>


        <div className={"container py-12 relative"}>

          <AnimatePresence>

            <motion.div
              className="flex w-full gap-8  justify-center h-[350px]"
              transition={{ staggerChildren: 0.5 }}
              // animate={{x: current * (100)}}
            >
              {Array.from({ length: 5 }).map((_, i) => {
                // Hitung indeks dengan wrap-around
                const index = (current - 2 + i + facilities.length) % facilities.length;
                const item = facilities[index];

                return (
                  <FacilityCard
                    title={item.title}
                    image={item.image}
                    icon={item.icon}
                    key={index}
                  />
                );
              })}
            </motion.div>
          </AnimatePresence>
          <div
            className="flex gap-2 w-full justify-between absolute inset-0 h-fit top-1/2">
            <button className={"relative left-[102%] p-4 rounded-full" +
              " bg-primary" +
              " h-fit" +
              " text-white"} onClick={next}>
              <ChevronRight />
            </button>
            <button className={"p-4 rounded-full right-[102%] relative" +
              " bg-primary h-fit" +
              " text-white"} onClick={prev}>
              <ChevronLeft />
            </button>
          </div>


        </div>
        <div className={'container flex gap-2' +
          ' items-center justify-center' +
          ' w-full pt-12 z-50'}>
          {facilities.map((_, index) => {
            return (
              <button
                key={index}
                className={`size-4 ${index === current ? 'bg-white' : 'bg-gray-500'} hover:bg-primary rounded-full`}
                onClick={() => {
                  console.log(index);
                  setCurrent(index)
                }}
              />
            )
          })}

        </div>
      </div>
    </>
  )
    ;
};
export default Facilities;
