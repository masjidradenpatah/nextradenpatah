import React, { ReactNode } from "react";
import { ProgramCard } from "@/components/ProgramCard";
import { Program, ProgramExecution } from "@/types/Program";
import SectionTitle from "@/components/SectionTitle";
import { getFormattedDate } from "@/lib/utils";

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
  programs: Program[];
  numberItemShown?: number | "all";
}

export const ProgramList = ({
  title,
  subtitle,
  programs,
  numberItemShown = 3,
}: ProgramListProps) => {
  const programShown =
    numberItemShown === "all" ? programs : programs.slice(0, numberItemShown);

  return (
    <ProgramListWrapper title={title} subtitle={subtitle}>
      {/* Upcoming Innformation Here */}
      {programShown.map((program) => {
        return (
          <div key={program.id} className={"flex flex-col gap-7"}>
            <ProgramCard {...program} />
          </div>
        );
      })}
    </ProgramListWrapper>
  );
};

interface UpcomingProgramListProps {
  title: string;
  subtitle: string;
  programExecutions: ProgramExecution[];
  numberItemShown?: number | "all";
}
export const UpcomingProgramList = ({
  title,
  subtitle,
  programExecutions,
}: UpcomingProgramListProps) => {
  return (
    <ProgramListWrapper title={title} subtitle={subtitle}>
      {/* Upcoming Innformation Here */}
      {programExecutions.map((program) => {
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
    </ProgramListWrapper>
  );
};
