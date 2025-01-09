"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";

import gallery1 from "@/public/gallery/gallery (1).jpg";
import gallery2 from "@/public/gallery/gallery (2).jpg";
import gallery3 from "@/public/gallery/gallery (3).jpg";
import gallery4 from "@/public/gallery/gallery (4).jpg";
import gallery5 from "@/public/gallery/gallery (5).jpg";
import gallery6 from "@/public/gallery/gallery (6).jpg";
import gallery7 from "@/public/gallery/gallery (7).jpg";
import gallery8 from "@/public/gallery/gallery (8).jpg";
import gallery9 from "@/public/gallery/gallery (9).jpg";
import gallery12 from "@/public/gallery/gallery (12).jpg";
import gallery13 from "@/public/gallery/gallery (13).jpg";
import gallery14 from "@/public/gallery/gallery (14).jpg";
import { BgSingle, BgTriple } from "@/components/decorations/shades";

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
            transition={{
              staggerChildren: 1,
            }}
            className={"relative grid basis-8/12 grid-cols-4 grid-rows-6 gap-6"}
          >
            {/* First rows*/}
            <GalleryImage className={"galleryItem1"} image={gallery14} />
            {/* Second rows*/}
            <GalleryImage
              className={
                "galleryItem2 relative -translate-x-16 bg-gradient-to-br from-[#99E9FB] to-[#1EAAC8]"
              }
            />
            <GalleryImage className={"galleryItem3"} image={gallery9} />
            <GalleryImage className={"galleryItem4"} image={gallery12} />
            <GalleryImage className={"galleryItem5"} image={gallery5} />
            {/* Third rows*/}
            <GalleryImage className={"galleryItem6"} image={gallery2} />
            <GalleryImage
              className={"galleryItem7 h-full w-full"}
              image={gallery8}
            />
            <GalleryImage className={"galleryItem8"} image={gallery13} />
            {/* Fourth rows*/}
            <GalleryImage className={"galleryItem9"} image={gallery4} />
            <GalleryImage className={"galleryItem10"} image={gallery6} />
            {/* Fifth rows*/}
            <GalleryImage
              className={
                "galleryItem11 translate-y-1/3 bg-gradient-to-bl from-[#1EAAC8] to-[#59DCF8]"
              }
            />
            <GalleryImage className={"galleryItem12"} image={gallery3} />
            <GalleryImage className={"galleryItem13"} image={gallery7} />
            <GalleryImage
              className={
                "galleryItem14 translate-x-1/2 bg-gradient-to-tr from-[#8DE3F6] to-[#1EAAC8]"
              }
            />
            {/* Sixth rows*/}
            <GalleryImage className={"galleryItem15"} image={gallery1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;

interface GalleryImageProps {
  image?: StaticImageData;
  className?: string;
}

const GalleryImage = ({ image, className }: GalleryImageProps) => {
  // TODO: Add animation with framer motion here
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("flex h-full w-full overflow-hidden", className)}
    >
      {image && (
        <Image
          src={image}
          alt={"Gallery Masjid Raden Patah"}
          className={"size-full object-cover object-center"}
        />
      )}
    </motion.div>
  );
};
