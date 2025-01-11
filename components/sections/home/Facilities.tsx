"use client";
import React, { useEffect, useState } from "react";
import FacilityCard from "@/components/FacilityCard";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { facilities } from "@/data/Facilities";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const getBreakpointWidth = (width: number): number => {
  if (width < 640) return 768; // None
  if (width < 768) return 768; // sm
  if (width < 1024) return 768; // md
  if (width < 1280) return 1024; // lg
  if (width < 1536) return 1280; // xl
  return 1536; // 2xl
};

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
    }: {
      index: number;
      parentWidth: number;
      numberItem: number;
      boxWidth: number;
    }) => {
      const boxWidth = parentWidth / numberItem;
      const calculatedBoxStartPos: number = index * boxWidth;

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

  const [parentWidth, setParentWidth] = useState(
    getBreakpointWidth(window.innerWidth),
  );

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const res = getBreakpointWidth(window.innerWidth);
      setParentWidth(res);
    };

    // Tambahkan event listener
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          "container relative flex w-full flex-col items-center justify-center gap-6 px-4 md:px-0"
        }
      >
        <SectionTitle
          title={"Fasilitas di Masjid Raden Patah"}
          subtitle={"Yuk kita lihat fasilitas yang ada di Masjid Raden Patah"}
          className={"container w-full"}
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
          className={cn(
            "container relative mx-auto flex h-[200px] w-full min-w-[768px] gap-12 md:h-[225px] lg:h-[300px] xl:h-[360px]",
          )}
        >
          {/* Children Starts Here */}
          {/*
          //   ? Bagaimana cara agar length atau nilai dari parentWidht dan boxWidth disini sesuai dengan ukuran dari window
          */}
          {Array.from({ length: 5 }).map((_, i) => {
            const index =
              (current - 2 + (i + 1) + facilities.length) % facilities.length;
            const facility = facilities[index];
            return (
              <motion.div
                variants={childVariant}
                key={index}
                className="absolute flex w-1/5 flex-col items-center justify-center p-1 text-2xl font-bold text-white xl:p-4 2xl:h-[360px]"
                transition={{ duration: 1 }}
                custom={{
                  index: i,
                  parentWidth,
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
          className={
            "absolute z-50 flex justify-between gap-2 max-md:translate-y-56 md:left-0 md:right-0"
          }
        >
          <button
            className={
              "relative left-full h-fit -translate-x-full rounded-full bg-primary p-4 text-white hover:bg-secondary md:-translate-x-1/2" +
              " hover:text-gray-600"
            }
            onClick={next}
          >
            <ChevronRight />
          </button>
          <button
            className={
              "relative right-full h-fit translate-x-full rounded-full bg-primary p-4 text-white hover:bg-secondary md:translate-x-1/2" +
              " hover:text-gray-600"
            }
            onClick={prev}
          >
            <ChevronLeft />
          </button>
        </div>
        <div
          className={
            "container hidden gap-2 md:flex" +
            " items-center justify-center" +
            " z-50 w-full"
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
    </section>
  );
};
export default Facilities;
