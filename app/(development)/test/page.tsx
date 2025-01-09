"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import { BgSingle, BgTriple } from "@/components/decorations/shades";
import { motion, useAnimation, useInView } from "framer-motion";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { GalleryImageType } from "@/types/GalleryImage";

import { GalleryImageArr } from "@/data/GalleryImage";

const Gallery = () => {
  return (
    <Wrapper>
      <motion.div
        className={"relative grid basis-8/12 grid-cols-4 grid-rows-6 gap-6"}
      >
        {GalleryImageArr.map((gallery, index) => (
          <GalleryImage key={index} {...gallery} />
        ))}
      </motion.div>
    </Wrapper>
  );
};
export default Gallery;

type GalleryImageProps = GalleryImageType;

const GalleryImage = ({
  image,
  className,
  chldrenClassName,
  variants,
  transition,
}: GalleryImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainAnimation = useAnimation();

  useEffect(() => {
    if (isInView) {
      //   Fire the animation
      mainAnimation.start("visible").then(() => {});
    }
  }, [isInView, mainAnimation]);

  const base = {
    hidden: { opacity: 0 },
    visible: { opacity: 1.5 },
  };

  // Merge base animation with overridden variants
  const finalVariants = {
    hidden: { ...base.hidden, ...variants?.hidden },
    visible: { ...base.visible, ...variants?.visible },
  };

  const defaultTransition = { duration: 0.5, delay: 0.25 };

  return (
    <motion.div
      ref={ref}
      className={cn("flex h-full w-full overflow-hidden", className)}
    >
      <motion.div
        variants={finalVariants}
        initial={"hidden"}
        animate={mainAnimation}
        transition={{ ...defaultTransition, ...transition }}
        className={cn("h-full w-full bg-primary", chldrenClassName)}
      >
        {image && (
          <Image
            src={image}
            alt={"Gallery Masjid Raden Patah"}
            className={"size-full object-cover object-center"}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className={"relative w-full py-52"}>
      <div className={"h-screen w-full"}></div>
      {/* Start Background */}
      <BgSingle
        position={"topLeft"}
        className={"top-0 size-[700px] -translate-x-1/3 translate-y-0"}
      ></BgSingle>
      <BgTriple position={"bottomRight"} className={"translate-x-1/4"} />
      {/* End Background */}
      <div className={"container relative flex flex-col"}>
        <div className={"flex w-full gap-6"}>
          <div className={"flex-grow"}></div>
          {children}
        </div>
      </div>
    </section>
  );
};
