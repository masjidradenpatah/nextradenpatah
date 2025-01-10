"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SliderProps {
  // Todo: Change any
  items: any;
  boxWidth: number;
  parentWidth: number;
  numberOfItems: number;
  parentClassName?: string;
}

const Slider = ({
  items,
  boxWidth,
  numberOfItems,
  parentWidth,
  parentClassName,
}: SliderProps) => {
  // Variants Start Here
  const parentVariant = {
    hidden: {},
    justifyBetween: {},
    exit: {},
  };
  const childVariant = {
    hidden: { opacity: 0, y: 20, x: 0 },
    exit: { opacity: 0, y: 20, x: 0 },
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
    const newCurrent = (current - 1) % items.length;
    setCurrent(newCurrent);
  };

  const next = () => {
    // Update current and loop
    const newCurrent = (current + 1) % items.length;
    setCurrent(newCurrent);
  };

  const boxWidthClass: string = ` h-[${boxWidth}px]`;
  const parentWidthClass: string = ` w-[${parentWidth}px]`;
  const parentClasses: string =
    "relative flex -translate-y-1/2 w-full gap-12 border border-red-900" +
    boxWidthClass;
  return (
    <div className={"flex h-full w-full flex-col items-center justify-center"}>
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
          "relative flex h-[200px] w-full -translate-y-1/2 gap-12 border border-red-900",
          parentClassName,
        )}
      >
        {/* Children Starts Here */}
        {Array.from({ length: numberOfItems }).map((_, i) => {
          const index = (current - 2 + (i + 1) + items.length) % items.length;
          const { className, children } = items[index];
          return (
            <motion.div
              variants={childVariant}
              key={index}
              className={`absolute flex size-[${boxWidth}px] flex-col items-center justify-center text-2xl font-bold text-white ${className}`}
              transition={{ duration: 1 }}
              custom={{
                index: i,
                parentWidth,
                boxWidth,
                numberItem: numberOfItems,
              }}
            >
              {children}
            </motion.div>
          );
        })}
        {/* Children Ends Here */}
      </motion.div>

      <div className={"absolute z-50 flex gap-2"}>
        <motion.button
          onClick={prev}
          className={
            "rounded-2xl border-2 border-primary px-12 py-4 font-bold text-primary"
          }
        >
          Prev
        </motion.button>
        <motion.button
          onClick={next}
          className={
            "rounded-2xl border-2 border-primary px-12 py-4 font-bold text-primary"
          }
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};
export default Slider;
