"use client";
import React, { useState } from "react";
import FacilityCard from "@/components/FacilityCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { facilities } from "@/data/Facilities";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const Facilities = () => {
  // Variants Start Here
  const parentVariant = {
    hidden: {},
    justifyBetween: {},
    exit: {},
  };
  const childVariant = {
    hidden: { opacity: 0, y: 0, x: 0 },
    exit: { opacity: 0, y: 0, x: 0 },
    justifyBetween: ({
      index,
      parentWidth,
      numberItem,
      boxWidth,
    }: {
      index: number;
      parentWidth: number;
      numberItem: number;
      boxWidth: number;
    }) => {
      const calculatedGap: number =
        (parentWidth - boxWidth * numberItem) / (numberItem - 1);
      const calculatedBoxStartPos: number = index * (boxWidth + calculatedGap);

      return {
        opacity: 1,
        x: calculatedBoxStartPos,
        y: 0,
        transition: {
          ease: "easeInOut",
          type: "tween",
          // delay: 0.04 * index,
        },
      };
    },
  };
  // Variants End Here

  const [current, setCurrent] = useState<number>(0);

  const prev = () => {
    // Update current and loop
    const newCurrent = (current - 1) % facilities.length;
    setCurrent(newCurrent);
  };

  const next = () => {
    // Update current and loop
    const newCurrent = (current + 1) % facilities.length;
    setCurrent(newCurrent);
  };

  return (
    <section className={"glassmorphic-lg w-full py-[120px]"}>
      <div
        className={
          "container relative flex w-full flex-col items-center justify-center gap-6"
        }
      >
        <SectionTitle
          title={"Fasilitas di Masjid Raden Patah"}
          subtitle={"Yuk kita lihat fasilitas yang ada di Masjid Raden Patah"}
          className={"w-full"}
        />
        <motion.div
          variants={parentVariant}
          initial={"hidden"}
          animate={"justifyBetween"}
          exit={"exit"}
          transition={{
            duration: 5,
            staggerChildren: 0.2,
            ease: "easeInOut",
            type: "tween",
          }}
          className={cn("relative flex h-[360px] w-full gap-12")}
        >
          {/* Children Starts Here */}
          {/*
          //   ? Bagaimana cara agar length disini sesuai dengan ukuran dari window
          */}
          {Array.from({ length: 5 }).map((_, i) => {
            const index =
              (current - 2 + (i + 1) + facilities.length) % facilities.length;
            const facility = facilities[index];
            return (
              <motion.div
                variants={childVariant}
                key={index}
                className={`absolute flex h-[360px] w-[281px] flex-col items-center justify-center text-2xl font-bold text-white`}
                transition={{ duration: 1 }}
                custom={{
                  index: i,
                  parentWidth: 1536,
                  boxWidth: 281,
                  numberItem: 5,
                }}
              >
                <FacilityCard {...facility}></FacilityCard>
              </motion.div>
            );
          })}
          {/* Children Ends Here */}
        </motion.div>

        <div
          className={"absolute left-0 right-0 z-50 flex justify-between gap-2"}
        >
          <button
            className={
              "relative left-[102%] h-fit rounded-full bg-primary p-4 text-white hover:bg-secondary hover:text-gray-600"
            }
            onClick={next}
          >
            <ChevronRight />
          </button>
          <button
            className={
              "relative right-[102%] h-fit rounded-full bg-primary p-4 text-white hover:bg-secondary hover:text-gray-600"
            }
            onClick={prev}
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Facilities;
