import React from "react";
import SectionTitle from "@/components/SectionTitle";

import { BgSingle, BgTriple } from "@/components/decorations/shades";
import { GalleryDecoration, GalleryImageArr } from "@/data/GalleryImage";
import { GalleryImageDecoration } from "@/components/GalleryImage";

import { cn } from "@/lib/utils";
import { ImageKitImage } from "@/components/ImageKit";

const Gallery = async () => {
  // const processedImages = await addBlurredDataUrls(GalleryImageArr);
  return (
    <section
      data-testid="gallery-section"
      className={"relative w-full max-sm:px-4"}
    >
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
        <div className={"flex w-full gap-6 px-4 sm:px-8 md:px-0"}>
          <div className={"ms-auto lg:basis-9/12"}>
            <div
              className={
                "relative grid grid-cols-4 grid-rows-6 gap-3 md:gap-6 lg:basis-8/12"
              }
            >
              {GalleryImageArr.map(
                ({ src, alt, className, ...props }, index) => (
                  <div key={index} className={cn("overflow-hidden", className)}>
                    <ImageKitImage
                      key={index}
                      {...props}
                      height={537}
                      width={302}
                      alt={alt}
                      path={src as string}
                      className={cn("size-full object-contain object-center")}
                    />
                  </div>
                ),
              )}

              {GalleryDecoration.map((decoration, index) => (
                <GalleryImageDecoration key={index} {...decoration} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
