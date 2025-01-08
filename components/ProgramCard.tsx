import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";


export interface ProgramCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
  icon: ReactNode;
  children:ReactNode;
}

// Menghapus 'children' dari ProgramCardProps
type ProgramWeeklyCardProps = {
  icon: ReactNode;
  day: string;
  time: string;
  location: string;
} & Omit<ProgramCardProps, 'children'>;

type AnnualProgramCardProps =  {
  description: string;
} & Omit<ProgramCardProps, 'children'>;

export const ProgramCardWrapper = ({
                             title,
                             subtitle,
                             children,
                             icon,
                             image
                           }: ProgramCardProps) => {
  return (
    <div className={"w-[296px] bg-white mb-12 rounded-3xl shadow-xl flex" +
      " flex-col relative"}>
      <Image src={image} alt={title}
             className={"object-center object-cover basis-1/3 aspect-video rounded-2xl"} />
      <div className={" h-1/3 w-full absolute"}>

        <div
          className={`p-4 rounded-full bg-primary w-fit absolute bottom-0 text-white translate-y-2/3 right-4`}>
          {icon}
        </div>
      </div>
      <div className={"h-fit px-4 py-1 mt-4 w-full "}>
        <p className={'text-2xl font-bold text-primary'}>{title}</p>
        <p className={'text-base truncate  text-primary'}>{subtitle}</p>
      </div>
      <div className={"px-8 py-4 flex flex-col gap-4"}>
        {children}
        {/*      TODO: IMPLEMENT DYNAMIC ROUTING OR MODAL*/}
        <Link href={"/programs"}
              className={"text-primary w-full text-center"}> Selengkapnya <ChevronRight
          className={"inline"} /></Link>
      </div>

    </div>
  );
};



export const WeeklyProgramCard = ({
                       title,
                       subtitle,
                       day,
                       icon,
                       location,
                       time,
                       image
                     }: ProgramWeeklyCardProps) => {
  return (
    <ProgramCardWrapper title={title} subtitle={subtitle} image={image} icon={icon} >
        <div className={"flex gap-2"}>
          <div
            className={`p-2 aspect-square flex-grow-0 rounded-lg bg-primary w-fit text-white`}>
            <MapPin className={"size-4"} />
          </div>
          <span className={"text-base leading-none flex items-center"}>
          {location}
          </span>
        </div>

        <div className={"flex gap-2"}>
          <span className={"bg-primary w-full text-center px-2 py-1" +
            " font-medium whitespace-nowrap text-white text-base" +
            " rounded-lg flex items-center justify-center"}>{day}</span>
          <p className={"bg-primary whitespace-nowrap px-4 py-1 font-medium" +
            " text-white flex items-center justify-center" +
            " text-sm w-fit" +
            " rounded-lg"}>{time}</p>
        </div>
    </ProgramCardWrapper>
  );
};

export const AnnualProgramCard = ({
                             title,
                             subtitle,
                             description,
                             icon,
                             image
                           }: AnnualProgramCardProps) => {
  return (
    <ProgramCardWrapper title={title} subtitle={subtitle} icon={icon} image={image}>
      <p className={"line-clamp-[7] text-justify"}>

        {description}
      </p>
    </ProgramCardWrapper>
  );
};