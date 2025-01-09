import { StaticImageData } from "next/image";

// TODO: Probably this is temporary, If the data taken from database. This could be replaced from Prisma
export interface Program {
  title: string;
  href: string;
  image: string | StaticImageData;
}
