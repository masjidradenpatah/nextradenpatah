import { StaticImageData } from "next/image";

export interface GalleryImageType {
  image?: StaticImageData;
  className?: string;
  chldrenClassName?: string;
  variants?: {
    hidden: Record<string, unknown>;
    visible: Record<string, unknown>;
  };
  transition?: {
    duration?: number;
    delay?: number;
    [key: string]: unknown;
  };
}
