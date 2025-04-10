"use client";
import React from "react";
import { ImageKitImage } from "@/components/ImageKit";
import { cn } from "@/lib/utils";
// import { Maximize2 } from "lucide-react";
import { Program } from "@prisma/client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getImagePathById } from "@/actions/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

type Props = {
  program: Program; // Program bisa null
  className: string;
};

const ProgramFull = ({ program, className }: Props) => {
  const { data: path } = useQuery({
    queryKey: ["image", program.image],
    queryFn: () => getImagePathById(program.image),
    initialData: "",
  });
  return (
    <Card
      className={cn("container relative items-center shadow-2xl", className)}
    >
      <CardHeader>
        <h2 className={"text-center text-3xl font-bold"}>{program.title}</h2>
        <p
          className={
            "absolute right-4 top-6 ms-auto mt-0 w-fit rounded-lg bg-emerald-500 px-4 py-2 text-white"
          }
        >
          {program.type !== "ANNUALY"
            ? "Program Rutin Harian"
            : "Program Tahunan"}
        </p>
      </CardHeader>
      <CardContent className={"relative"}>
        <ImageKitImage
          height={300}
          width={300}
          alt={`Gambar dari program ${program.title}`}
          path={path}
          className={"mx-auto mb-8 rounded-2xl border-4 border-white shadow-xl"}
        />

        <div className="flex w-full justify-center">
          <article
            className={
              "prose prose-sm sm:prose-base lg:prose-lg" +
              " m-5 focus:outline-none"
            }
            dangerouslySetInnerHTML={{ __html: program.content }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default ProgramFull;
