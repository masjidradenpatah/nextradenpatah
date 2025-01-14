import React, { ReactNode } from "react";
import { ProgramCard } from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import { getFormattedDate } from "@/lib/utils";
import { getPrograms, getUpcomingProgram } from "@/data/Programs";
import handPray from "@/public/hand-pray.svg";
import Image from "next/image";

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
          "grid w-full grid-cols-1 place-content-center gap-6 max-sm:max-w-[400px] sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {children}
      </div>
    </div>
  );
};

interface ProgramListProps {
  title: string;
  subtitle: string;
  type: "DAILY" | "ANNUALY";
  numberItemShown?: number | "all";
  showMoreOption?: boolean;
}

export const ProgramList = async ({
  title,
  subtitle,
  type,
  showMoreOption,
  numberItemShown = 3,
}: ProgramListProps) => {
  const programs = await getPrograms(type, numberItemShown);

  if (programs && programs.length > 0) {
    return (
      <ProgramListWrapper title={title} subtitle={subtitle}>
        {programs.map((program) => {
          return (
            <div key={program.id} className={"flex flex-col gap-7"}>
              <ProgramCard {...program} />
            </div>
          );
        })}
        {showMoreOption && <></>}
      </ProgramListWrapper>
    );
  } else {
    return (
      <div className="container relative flex flex-col items-center gap-8 max-sm:px-4 lg:gap-16">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className={"sm:w-full"}
        />
        <div className={"flex items-center gap-8"}>
          <Image
            src={handPray}
            alt={"ikon mohon maaf"}
            className={"inline size-16"}
          ></Image>
          <p
            className={
              "py-8 text-center text-4xl font-semibold text-primary/75"
            }
          >
            Terjadi kesalahan, coba lagi nanti
          </p>
        </div>
      </div>
    );
  }
};

interface UpcomingProgramListProps {
  title: string;
  subtitle: string;
  numberItemShown?: number | "all";
  showMoreOption?: boolean;
}

export const UpcomingProgramList = async ({
  title,
  subtitle,
  showMoreOption = false,
  numberItemShown = 3,
}: UpcomingProgramListProps) => {
  const programs = await getUpcomingProgram(numberItemShown);

  if (programs && programs.length > 0) {
    return (
      <ProgramListWrapper title={title} subtitle={subtitle}>
        {programs.map((program) => {
          return (
            <div key={program.id} className={"flex flex-col gap-7"}>
              <div className="rounded-2xl border-2 border-white bg-gradient-to-br from-[#DCF2F2] via-[#C6EAED] to-[#46D7F6] py-2 text-center text-2xl font-semibold text-primary">
                <p>
                  {program.date ? getFormattedDate(program.date) : "Upcoming"}
                </p>
              </div>
              <ProgramCard {...program.program} />
            </div>
          );
        })}
        {showMoreOption && <></>}
      </ProgramListWrapper>
    );
  } else if (programs && programs.length === 0) {
    // handling error
    return (
      <div className="container relative flex flex-col items-center gap-8 max-sm:px-4 lg:gap-16">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className={"sm:w-full"}
        />
        <div className={"flex items-center gap-8"}>
          <Image
            src={handPray}
            alt={"ikon mohon maaf"}
            className={"inline size-16"}
          ></Image>
          <p
            className={
              "py-8 text-center text-4xl font-semibold text-primary/75"
            }
          >
            Belum ada program yang akan datang dalam waktu dekat ini
          </p>
        </div>
      </div>
    );
  } else {
    // handling error
    return (
      <div className="container relative flex flex-col items-center gap-8 max-sm:px-4 lg:gap-16">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className={"sm:w-full"}
        />
        <div className={"flex items-center gap-8"}>
          <Image
            src={handPray}
            alt={"ikon mohon maaf"}
            className={"inline size-16"}
          ></Image>
          <p
            className={
              "py-8 text-center text-4xl font-semibold text-primary/75"
            }
          >
            Terjadi kesalahan, coba lagi nanti
          </p>
        </div>
      </div>
    );
  }
};
