"use client";
import React, { useEffect, useState } from "react";
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
    }: {
      index: number;
      parentWidth: number;
      numberItem: number;
      boxWidth: number;
    }) => {
      const boxWidth = parentWidth / numberItem;
      const calculatedBoxStartPos: number = index * boxWidth;

      let opacity = 1;
      let blur: string = "blur(0px)";
      if (index === 4 || index === 0) {
        opacity = 0.7;
        blur = "blur(2px)";
      }
      return {
        opacity,
        x: calculatedBoxStartPos,
        y: 0,
        filter: blur,
        transition: {
          ease: "easeInOut",
          type: "tween",
          // delay: 0.04 * index,
        },
      };
    },
  };
  // Variants End Here

  const [parentWidth, setParentWidth] = useState(window.innerWidth);

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setParentWidth(768);
      else setParentWidth(window.innerWidth);
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
          "relative flex w-full flex-col items-center justify-center gap-6 px-4 md:px-0"
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
          className={
            "relative mx-auto flex h-fit min-h-20 w-full min-w-[768px] gap-12"
          }
        >
          {/* Children Starts Here */}
          {Array.from({ length: 5 }).map((_, i) => {
            const index =
              (current - 2 + (i + 1) + facilities.length) % facilities.length;
            const facility = facilities[index];
            return (
              <motion.div
                variants={childVariant}
                key={index}
                whileHover={{ scale: 1.05, transition: { duration: 0.01 } }}
                className="absolute flex h-fit w-1/5 flex-col items-center justify-center p-1 text-2xl font-bold text-white xl:p-4"
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

          <div className="pointer-events-none relative flex h-fit w-1/5 flex-col items-center justify-center p-1 text-2xl font-bold text-white opacity-0 xl:p-4">
            <FacilityCard
              {...facilities[0]}
              title={"Long Text Given Here Hahahaha"}
            />
          </div>
          {/* Children Ends Here */}
          <div
            className={
              "container pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-50 flex h-full items-center justify-between"
            }
          >
            <button
              className={
                "pointer-events-auto relative h-fit rounded-lg bg-secondary p-4 text-primary shadow-xl hover:bg-white hover:text-primary" +
                " hover:text-white" +
                " active:bg-primary"
              }
              onClick={prev}
            >
              <ChevronLeft />
            </button>
            <button
              className={
                "pointer-events-auto relative h-fit rounded-lg bg-secondary p-4 text-primary shadow-xl hover:bg-white hover:text-primary hover:text-white" +
                " active:bg-primary"
              }
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </motion.div>

        {/*<div*/}
        {/*  className={*/}
        {/*    "container hidden gap-2 md:flex" +*/}
        {/*    " items-center justify-center" +*/}
        {/*    " z-50 w-full"*/}
        {/*  }*/}
        {/*>*/}
        {/*  {facilities.map((_, index) => {*/}
        {/*    return (*/}
        {/*      <button*/}
        {/*        key={index}*/}
        {/*        className={`size-4 ${index === current ? "bg-primary" : "bg-gray-400"} rounded-full hover:bg-secondary`}*/}
        {/*        onClick={() => {*/}
        {/*          setCurrent(index);*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</div>*/}
      </div>
    </section>
  );
};
export default Facilities;
