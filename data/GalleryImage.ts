import { GalleryImageType } from "@/types/GalleryImage";
import gallery14 from "@/public/gallery/gallery (14).jpg";
import gallery9 from "@/public/gallery/gallery (9).jpg";
import gallery12 from "@/public/gallery/gallery (12).jpg";
import gallery5 from "@/public/gallery/gallery (5).jpg";
import gallery2 from "@/public/gallery/gallery (2).jpg";
import gallery8 from "@/public/gallery/gallery (8).jpg";
import gallery13 from "@/public/gallery/gallery (13).jpg";
import gallery4 from "@/public/gallery/gallery (4).jpg";
import gallery6 from "@/public/gallery/gallery (6).jpg";
import gallery3 from "@/public/gallery/gallery (3).jpg";
import gallery7 from "@/public/gallery/gallery (7).jpg";
import gallery1 from "@/public/gallery/gallery (1).jpg";

export const GalleryImageArr: GalleryImageType[] = [
  { className: "galleryItem1", image: gallery14 },
  {
    className: "galleryItem2 relative -translate-x-1/3 overflow-visible ",
    chldrenClassName: "bg-gradient-to-br from-[#99E9FB] to-[#1EAAC8]",
    variants: {
      hidden: { x: -200 },
      visible: { x: 0 },
    },
    transition: {
      duration: 4,
    },
  },
  { className: "galleryItem3", image: gallery9 },
  { className: "galleryItem4", image: gallery12 },
  { className: "galleryItem5", image: gallery5 },
  { className: "galleryItem6", image: gallery2 },
  { className: "galleryItem7 h-full w-full", image: gallery8 },
  { className: "galleryItem8", image: gallery13 },
  { className: "galleryItem9", image: gallery4 },
  { className: "galleryItem10", image: gallery6 },
  {
    className: "galleryItem11 translate-y-1/3 overflow-visible",
    chldrenClassName: "bg-gradient-to-br from-[#99E9FB] to-[#1EAAC8]",
    variants: {
      hidden: { y: 200 },
      visible: { y: 0 },
    },
    transition: {
      duration: 3,
    },
  },
  { className: "galleryItem12", image: gallery3 },
  { className: "galleryItem13", image: gallery7 },
  {
    className: "galleryItem14 translate-x-1/2 overflow-visible ",
    chldrenClassName: "bg-gradient-to-tr from-[#8DE3F6] to-[#1EAAC8]",
    variants: {
      hidden: { x: 200 },
      visible: { x: 0 },
    },
    transition: {
      duration: 3,
    },
  },
  { className: "galleryItem15", image: gallery1 },
];
