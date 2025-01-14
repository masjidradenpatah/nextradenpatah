import React, { ReactNode } from "react";
import SectionTitle from "@/components/SectionTitle";
import handPray from "@/public/hand-pray.svg";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export const ProgramListLoading = () => {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div
            key={i}
            className={
              "md:rounded-5xl group relative flex aspect-square size-full flex-col justify-end gap-4 rounded-2xl bg-white/50 p-4 md:p-8"
            }
          >
            <Skeleton
              className={"md:rounded-4xl relative size-full rounded-2xl"}
            />
            <Skeleton
              className={
                "rounded-4xl h-24 w-full items-center justify-center gap-2 rounded-md"
              }
            />
          </div>
        );
      })}
    </>
  );
};

export const ErrorMessage = ({
  title,
  subtitle,
  message,
}: {
  title: string;
  subtitle: string;
  message: string;
}) => (
  <div className="container relative flex flex-col items-center gap-8 max-sm:px-4 lg:gap-16">
    <SectionTitle title={title} subtitle={subtitle} className="sm:w-full" />
    <div className="flex items-center gap-8">
      <Image src={handPray} alt="ikon mohon maaf" className="inline size-16" />
      <p className="py-8 text-center text-4xl font-semibold text-primary/75">
        {message}
      </p>
    </div>
  </div>
);

export const ProgramListWrapper = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) => {
  return (
    <div className="container relative flex flex-col items-center gap-8 max-sm:px-4 lg:gap-16">
      <SectionTitle title={title} subtitle={subtitle} className={"sm:w-full"} />
      <div
        className={
          "grid w-full grid-cols-1 place-content-center gap-x-6 gap-y-12 max-sm:max-w-[400px] sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        }
      >
        {children}
      </div>
    </div>
  );
};
