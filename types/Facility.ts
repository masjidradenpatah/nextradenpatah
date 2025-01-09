import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// TODO: This is from DATABASE
export interface Facility {
  image: StaticImageData;
  title: string;
  icon: ReactNode;
}
