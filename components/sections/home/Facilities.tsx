"use client";
import FacilityCard from "@/components/FacilityCard";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";

import { facilities } from "@/data/Facilities";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Facilities = () => {
  const [current, setCurrent] = useState<number>(0);

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
      <div className={"glassmorphic-lg w-full py-[120px]"}>
        <div className={"container relative py-12"}>
          <SectionTitle
            title={"Fasilitas di Masjid Raden Patah"}
            subtitle={"Yuk kita lihat fasilitas yang ada di Masjid Raden Patah"}
          />
          <AnimatePresence>
            <motion.div
              className="flex h-[350px] w-full justify-center gap-8"
              transition={{ staggerChildren: 0.5 }}
              // animate={{x: current * (100)}}
            >
              {Array.from({ length: 5 }).map((_, i) => {
                // Hitung indeks dengan wrap-around
                const index =
                  (current - 2 + i + facilities.length) % facilities.length;
                const item = facilities[index];

                return <FacilityCard {...item} key={index} />;
              })}
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 top-1/2 flex h-fit w-full justify-between gap-2">
            <button
              className={
                "relative left-[102%] rounded-full p-4" +
                " bg-primary" +
                " h-fit" +
                " text-white"
              }
              onClick={next}
            >
              <ChevronRight />
            </button>
            <button
              className={
                "relative right-[102%] rounded-full p-4" +
                " h-fit bg-primary" +
                " text-white"
              }
              onClick={prev}
            >
              <ChevronLeft />
            </button>
          </div>
        </div>
        <div
          className={
            "container flex gap-2" +
            " items-center justify-center" +
            " z-50 w-full pt-12"
          }
        >
          {facilities.map((_, index) => {
            return (
              <button
                key={index}
                className={`size-4 ${index === current ? "bg-primary" : "bg-gray-400"} rounded-full hover:bg-secondary`}
                onClick={() => {
                  setCurrent(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Facilities;
