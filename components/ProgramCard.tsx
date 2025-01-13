import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/types/Program";
import { Button } from "@/components/ui/button";

export type ProgramCardProps = {} & Program;

export const ProgramCard = ({ href, image, title }: ProgramCardProps) => {
  return (
    <div
      className={
        "glassmorphic-lg sm:rounded-5xl group flex h-fit flex-col justify-end gap-4 rounded-2xl border-2 border-white px-2 py-2 hover:bg-white" +
        " sm:px-6 sm:pb-8" +
        " mt-0 sm:mt-24 lg:mt-12 xl:mt-36 2xl:mt-56" +
        " relative transition duration-200 md:h-[323px]"
      }
    >
      <Image
        src={image}
        className={
          "relative w-full rounded-2xl border-2 border-white transition duration-200 " +
          " group-hover:-translate-y-12 group-hover:scale-[105%] group-hover:shadow-[0_0_18px_0_rgba(30,170,200,0.7)]"
        }
        alt={`Gambar dari program ${title}`}
      />
      <Button variant={"fullPrgram"} className={"py-6"}>
        <Link href={href}>Selengkapnya</Link>
      </Button>
    </div>
  );
};
