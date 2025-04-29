"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageKitImage } from "@/components/ImageKit";
import { Program } from "@prisma/client";
import { getImagePathById } from "@/actions/image";
import { useQuery } from "@tanstack/react-query";

export type ProgramCardProps = {} & Program;

export const ProgramCard = ({
  title,
  id,
  image,
  customeUrl,
}: ProgramCardProps) => {
  const { data: path } = useQuery({
    queryKey: ["image", image],
    queryFn: () => {
      const path = getImagePathById(image);
      /* eslint-disable no-console */
      console.log(path);
      return path;
    },
    initialData: "",
  });

  return (
    <div
      className={
        "glassmorphic-lg sm:rounded-5xl group flex h-fit flex-col justify-end gap-4 rounded-2xl border-2 border-white px-2 py-2 hover:bg-white" +
        " sm:px-6 sm:pb-8" +
        " mt-0 sm:mt-24 lg:mt-12 xl:mt-36 2xl:mt-56" +
        " relative transition duration-200 sm:h-[323px]"
      }
    >
      <ImageKitImage
        className={
          "relative w-full rounded-2xl border-2 border-white transition duration-200 " +
          " group-hover:-translate-y-12 group-hover:scale-[105%] group-hover:shadow-[0_0_18px_0_rgba(30,170,200,0.7)]"
        }
        path={path}
        width={400}
        height={400}
        alt={`Gambar dari program ${title}`}
      />
      <Button variant={"fullPrgram"} className={"py-6"} asChild>
        <Link href={customeUrl || `/programs/${id}`}>Selengkapnya</Link>
      </Button>
    </div>
  );
};
