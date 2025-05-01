"use client";
import React from "react";
import { ImageKitImageById } from "@/components/ImageKit";
import { Program } from "@prisma/client";

type Props = {
  program: Program; // Program bisa null
};

const ProgramFull = ({ program }: Props) => {
  return (
    <div
      className={
        "flex size-full flex-col items-center gap-12 overflow-hidden px-4 pb-32 sm:px-0"
      }
    >
      <section
        className={
          "glassmorphic-sm container relative flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white/35 px-4 xl:max-w-screen-lg" +
          " py-12"
        }
      >
        <p className={"max-w-prose text-center"}>
          {program.type !== "ANNUALY"
            ? "Program Rutin Harian"
            : "Program Tahunan"}{" "}
          Masjid Raden Patah Universitas Brawijaya{" "}
        </p>
        <h1 className={"text-center text-5xl font-bold tracking-wide"}>
          {program.title}
        </h1>
      </section>
      <section className="container xl:max-w-screen-lg">
        <ImageKitImageById
          height={500}
          width={500}
          alt={`Gambar dari program ${program.title}`}
          id={program.image}
          className={"mx-auto mb-8 rounded-2xl border-4 border-white shadow-xl"}
        />
      </section>
      <section className="container xl:max-w-screen-lg">
        <div className="flex w-full justify-center">
          <article
            className={"tiptap container"}
            dangerouslySetInnerHTML={{ __html: program.content }}
          />
        </div>
      </section>
    </div>
  );
};
export default ProgramFull;
