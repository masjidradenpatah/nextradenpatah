import React from "react";
import { Program } from "@/types/Program";
import { ImageKitImage } from "@/components/ImageKit";
import { cn } from "@/lib/utils";
import { CloudAlert } from "lucide-react";

type Props = {
  program: Program | null; // Program bisa null
  className: string;
};

const ProgramDetail = ({ program, className }: Props) => {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center gap-4 p-4 md:gap-8 md:p-8 lg:py-12",
        className,
      )}
    >
      {program ? (
        <>
          <ImageKitImage
            height={400}
            width={400}
            alt={`Gambar dari program ${program.title}`}
            path={program.image}
            className={"rounded-2xl border-4 border-white shadow-xl"}
          />
          <div className={"space-y-4"}>
            <h2 className={"text-center text-3xl font-bold"}>
              {program.title}
            </h2>
            <p
              className={
                "mx-auto w-fit rounded-lg bg-emerald-500 px-4 py-2 text-white"
              }
            >
              {program.type === "ANNUALY"
                ? "Program Rutin Harian"
                : "Program Tahunan"}
            </p>
          </div>
          <p>{program.description}</p>
        </>
      ) : (
        <div className={"flex size-full flex-col items-center gap-8 p-8 py-24"}>
          <CloudAlert className={"size-24 text-destructive/75"}></CloudAlert>
          <p className={"text-center text-2xl text-destructive/75 lg:text-4xl"}>
            Program not Found
          </p>
        </div>
      )}
    </div>
  );
};
export default ProgramDetail;
