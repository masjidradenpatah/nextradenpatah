"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";
import { motion, useAnimation, useInView } from "framer-motion";
import { BgSingle, BgTriple } from "@/components/decorations/shades";
import { GalleryImageArr } from "@/data/GalleryImage";
import { GalleryImageType } from "@/types/GalleryImage";

const Gallery = () => {
  return (
    <section className={"relative w-full"}>
      {/* Start Background */}
      <BgSingle
        position={"topLeft"}
        className={"top-0 size-[700px] -translate-x-1/3 translate-y-0"}
      ></BgSingle>
      <BgTriple position={"bottomRight"} className={"translate-x-1/4"} />
      {/* End Background */}
      <div className={"container relative flex flex-col gap-16"}>
        <SectionTitle
          title={"Gallery Masjid Raden Patah"}
          subtitle={"Yuk keliling lihat pojok Masjid Raden Patah"}
        />
        <div className={"flex w-full gap-6"}>
          <div className={"flex-grow"}></div>
          <motion.div
            className={"relative grid basis-8/12 grid-cols-4 grid-rows-6 gap-6"}
          >
            {GalleryImageArr.map((gallery, index) => (
              <GalleryImage key={index} {...gallery} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
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
      mainAnimation.start("visible").then(() => {});
    }
  }, [isInView, mainAnimation]);

  const base = {
    hidden: { opacity: 0 },
    visible: { opacity: 1.5 },
  };

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
            loading={"eager"}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
