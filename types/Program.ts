import { StaticImageData } from "next/image";

// TODO: Probably this is temporary, If the data taken from database. This could be replaced from Prisma
export interface Program {
  id: string;
  title: string;
  image: string | StaticImageData;
  description: string;
  type: "DAILY" | "ANNUAL";
}

export interface ProgramExecution {
  id: string;
  date?: Date | null | undefined;
  program: Program;
  programId: string;
  status: "UPCOMING" | "CANCELED" | "DONE";
}
