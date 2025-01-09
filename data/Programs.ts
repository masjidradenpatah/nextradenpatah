import { Program } from "@/types/Program";
import tahsin from "@/public/programs/TAHSIN.png";
import kpi from "@/public/programs/KPI.png";
import tafsirMunir from "@/public/programs/TAFSIR_MUNIR.png";

// TODO: This is also temporary
export const upcomingProgram: Program[] = [
  {
    title: "Kelas Tahsin",
    image: tahsin,
    href: "/programs/tahsin",
  },
  {
    title: "Kelas Psikologi Islam",
    image: kpi,
    href: "/programs/kpi",
  },
  {
    title: "Kajian Tafsir Kitab Al-Munir",
    image: tafsirMunir,
    href: "/programs/tafsirMuir",
  },
];
