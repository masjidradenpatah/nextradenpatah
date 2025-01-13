import { Program, ProgramExecution } from "@/types/Program";
import tahsin from "@/public/programs/TAHSIN.png";
import kpi from "@/public/programs/KPI.png";
import tafsirMunir from "@/public/programs/TAFSIR MUNIR.png";
import kismala from "@/public/programs/KISMALA.png";
import kultum from "@/public/programs/KULTUM.png";
import kajianFiqih from "@/public/programs/KAJIAN FIQIH.png";
import bta from "@/public/programs/BTA.png";
import pranikah from "@/public/programs/KELAS PRANIKAH.png";
import tazkiyatunNafs from "@/public/programs/TAZKIYATUN NAFS.png";
import tafsirFatihah from "@/public/programs/TAFSIR FATIHAH.png";

import gebyarRamadhan from "@/public/programs/GEBYAR.png";
import wisuda from "@/public/programs/WISUDA.png";
import mrpMengabdi from "@/public/programs/MRP MENGBDI.png";
import cafeRamadhan from "@/public/programs/CAFE RAMADHAN.png";
import tablighAkbar from "@/public/programs/TABLIGH AKBAR.png";
import seminarQurani from "@/public/programs/SEMINAR QUR'ANI.png";
import ptqBerkarya from "@/public/programs/PTQ BERKARYA.png";
import tahfidzCamp from "@/public/programs/TAHFIDZ CAMP.png";
import syiarDakwah from "@/public/programs/SYI'AR DAKWAH.png";
import cafeMRP from "@/public/programs/CAFE MRP.png";

// TODO: This is also temporary
const allPrograms: Program[] = [
  // Program Rutin Harian
  {
    id: "1",
    title: "Kelas Psikologi Islam",
    image: kpi,
    description:
      "Kelas Psikologi Islam adalah program harian yang membahas penerapan psikologi dalam kehidupan Islami.",
    type: "DAILY",
  },
  {
    id: "2",
    title: "Kelas Tahsin",
    image: tahsin,
    description:
      "Kelas Tahsin adalah program untuk meningkatkan kualitas membaca Al-Qur'an.",
    type: "DAILY",
  },
  {
    id: "3",
    title: "Kajian Tafsir Al-Munir",
    image: tafsirMunir,
    description: "Kajian rutin mendalami tafsir kitab Al-Munir.",
    type: "DAILY",
  },
  {
    id: "4",
    title: "Kismala",
    image: kismala,
    description:
      "Kajian Islam Malam Ahad (Kismala) adalah program dakwah untuk memperdalam Islam.",
    type: "DAILY",
  },
  {
    id: "5",
    title: "Kultum Zuhur",
    image: kultum,
    description: "Ceramah singkat setelah shalat zuhur berjamaah.",
    type: "DAILY",
  },
  {
    id: "6",
    title: "Kajian Fiqih 4 Mazhab",
    image: kajianFiqih,
    description: "Kajian mendalami fiqih dari 4 mazhab besar.",
    type: "DAILY",
  },
  {
    id: "7",
    title: "Baca Tulis Al-Qur’an",
    image: bta,
    description: "Program untuk belajar membaca dan menulis Al-Qur'an.",
    type: "DAILY",
  },
  {
    id: "8",
    title: "Kelas Pra-Nikah & Parenting",
    image: pranikah,
    description:
      "Kelas edukasi untuk mempersiapkan pernikahan dan parenting Islami.",
    type: "DAILY",
  },
  {
    id: "9",
    title: "Kajian Tazkiyatun Nafs",
    image: tazkiyatunNafs,
    description: "Kajian untuk membersihkan jiwa dan meningkatkan keimanan.",
    type: "DAILY",
  },
  {
    id: "10",
    title: "Kajian Tafsir Surah Al-Fatihah",
    image: tafsirFatihah,
    description: "Kajian mendalam tentang tafsir Surah Al-Fatihah.",
    type: "DAILY",
  },

  // Program Tahunan
  {
    id: "11",
    title: "Gebyar Ramadhan",
    image: gebyarRamadhan,
    description: "Rangkaian kegiatan untuk menyemarakkan bulan Ramadhan.",
    type: "ANNUAL",
  },
  {
    id: "12",
    title: "Wisuda Tahfidz",
    image: wisuda,
    description: "Acara penghargaan bagi para penghafal Al-Qur'an.",
    type: "ANNUAL",
  },
  {
    id: "13",
    title: "MRP Mengabdi",
    image: mrpMengabdi,
    description: "Kegiatan bakti sosial yang diadakan oleh Masjid Raden Patah.",
    type: "ANNUAL",
  },
  {
    id: "14",
    title: "Cafe MRP",
    image: cafeMRP,
    description: "Kegiatan informal untuk diskusi dan kajian Islami.",
    type: "ANNUAL",
  },
  {
    id: "15",
    title: "Cafe Ramadhan",
    image: cafeRamadhan,
    description: "Diskusi santai selama bulan Ramadhan.",
    type: "ANNUAL",
  },
  {
    id: "16",
    title: "Tabligh Akbar",
    image: tablighAkbar,
    description: "Ceramah akbar dengan pembicara terkenal.",
    type: "ANNUAL",
  },
  {
    id: "17",
    title: "Seminar Qur’ani",
    image: seminarQurani,
    description: "Seminar yang membahas tema-tema Al-Qur'an.",
    type: "ANNUAL",
  },
  {
    id: "18",
    title: "PTQ Berkarya",
    image: ptqBerkarya,
    description: "Pelatihan Tahfidz Qur'an dengan tema kreativitas.",
    type: "ANNUAL",
  },
  {
    id: "19",
    title: "Tahfidz Camp",
    image: tahfidzCamp,
    description: "Kegiatan intensif untuk meningkatkan hafalan Al-Qur'an.",
    type: "ANNUAL",
  },
  {
    id: "20",
    title: "Syi’ar Dakwah Disabilitas",
    image: syiarDakwah,
    description: "Program dakwah inklusif untuk para penyandang disabilitas.",
    type: "ANNUAL",
  },
];

// Array ProgramExecution dengan referensi ke program
const programExecutions: ProgramExecution[] = [
  {
    id: "execution-1",
    date: new Date("2025-01-10"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-2",
    date: new Date("2025-01-11"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-3",
    date: new Date("2025-01-12"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-4",
    date: new Date("2025-01-13"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-5",
    date: new Date("2025-01-14"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-6",
    date: new Date("2025-01-15"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-7",
    date: new Date("2025-01-16"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-8",
    date: new Date("2025-01-17"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-9",
    date: new Date("2025-01-18"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-10",
    date: new Date("2025-01-19"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-11",
    date: new Date("2025-01-20"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-12",
    date: new Date("2025-01-21"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-13",
    date: new Date("2025-01-22"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-14",
    date: new Date("2025-01-23"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-15",
    date: new Date("2025-01-24"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-16",
    date: new Date("2025-01-25"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-17",
    date: new Date("2025-01-26"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-18",
    date: new Date("2025-01-27"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
  {
    id: "execution-19",
    date: new Date("2025-01-28"),
    program: allPrograms[0],
    programId: allPrograms[0].id,
    status: "UPCOMING",
  },
  {
    id: "execution-20",
    date: new Date("2025-01-29"),
    program: allPrograms[1],
    programId: allPrograms[1].id,
    status: "UPCOMING",
  },
];

export const getUpcomingProgram = (
  numberItem?: number | "all",
): ProgramExecution[] => {
  const now = new Date();

  const filteredPrograms = programExecutions
    .filter(
      (program) =>
        program.status === "UPCOMING" && program.date && program.date > now,
    )
    .sort((a, b) => (a.date! > b.date! ? 1 : -1));
  if (numberItem === "all") return filteredPrograms;
  else return filteredPrograms.slice(0, numberItem || 3);
};

export const getDailyRoutineProgram = (): Program[] => {
  return allPrograms.filter(({ type }) => type === "DAILY");
};

export const getAnnualProgram = (): Program[] => {
  return allPrograms.filter(({ type }) => type === "ANNUAL");
};
