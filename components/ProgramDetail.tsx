import React from "react";
import { Program } from "@/types/Program";
import { ImageKitImage } from "@/components/ImageKit";
import { cn } from "@/lib/utils";

type Props = Program & {
  className: string;
};

const ProgramDetail = ({
  title,
  type,
  description,
  image,
  className,
}: Props) => {
  return (
    <div
      className={cn(
        "flex size-full flex-col items-center gap-8 p-8 py-24",
        className,
      )}
    >
      <ImageKitImage
        height={400}
        width={400}
        alt={`Gambar dari program ${title}`}
        path={image}
        className={"rounded-2xl border-4 border-white shadow-xl"}
      />
      <div className={"space-y-4"}>
        <h2 className={"text-center text-3xl font-bold"}>{title}</h2>
        <p
          className={
            "mx-auto w-fit rounded-lg bg-emerald-500 px-4 py-2 text-white"
          }
        >
          {type === "ANNUALY" ? "Program Rutin Harian" : "Program Tahunan"}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
};
export default ProgramDetail;
