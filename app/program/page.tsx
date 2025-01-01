import React, { ReactNode } from "react";
import SectionTitle from "@/components/SectionTitle";
import { WeeklyProgramCard, AnnualProgramCard } from "@/components/ProgramCard";
import { Building } from "lucide-react";
import profile from "@/public/profile.png";
import { StaticImageData } from "next/image";

// TODO : REMOVE THIS. JUST TEMPORARY
interface ProgramCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  day: string;
  time: string;
  location: string;
  image: StaticImageData | string;
}


const programs: ProgramCardProps[] = [
  {
    title: "KISMALA",
    subtitle: "Kajian Islam Tematik Menjelang Maghrib",
    icon: <Building />, // Ganti dengan ikon yang sesuai
    day: "Senin & Kamis",
    time: "16:00 WIB",
    location: "Basement Masjid Raden Patah",
    image: profile // Ganti dengan path gambar yang benar
  },
  {
    title: "KPI",
    subtitle: "Kelas Psikologi Islam",
    icon: <Building />, // Ganti dengan ikon yang sesuai
    day: "Jumat",
    time: "15:00 WIB",
    location: "Ruang Majelis Lt.2 Masjid Raden Patah",
    image: profile // Ganti dengan path gambar yang benar
  },
  {
    title: "KAJIAN KITAB",
    subtitle: "Tafsir Al-Munir",
    icon: <Building />, // Ganti dengan ikon yang sesuai
    day: "Rabu",
    time: "16:00 WIB",
    location: "Ruang Majelis Lt.2 Masjid Raden Patah",
    image: profile // Ganti dengan path gambar yang benar
  },
  {
    title: "KELAS TAHSIN",
    subtitle: "Belajar Tahsin dalam Membaca Al-Qur’an",
    icon: <Building />, // Ganti dengan ikon yang sesuai
    day: "Selasa",
    time: "16:00 WIB",
    location: "Ruang Majelis Lt.2 Masjid Raden Patah",
    image: profile // Ganti dengan path gambar yang benar
  }
];

// TODO: REMOVE JUST TEMPORARY
interface AnnualProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData | string;
  icon: ReactNode;
}

const annualPrograms: AnnualProgramCardProps[] = [
  {
    title: "Gebyar Ramadhan",
    subtitle: "Selama Bulan Ramadhan",
    description:
      "Istilah yang sering digunakan untuk menggambarkan rangkaian acara," +
      " promosi, atau kegiatan yang diadakan selama bulan Ramadhan. Acara ini biasanya bertujuan untuk menyambut, memotivasi, dan memeriahkan suasana bulan Ramadhan dengan berbagai kegiatan.",
    image: profile,
    icon: <Building /> // Ganti dengan komponen icon Anda
  },
  {
    title: "Tahfidz Camp",
    subtitle: "Make Boundaries Deepen Connections Through The Quran",
    description:
      "Kegiatan membersamai Al-Qur'an berupa ziyadah, murojaah, tilawah, dan" +
      " kegiatan interaksi lainnya selama satu pekan di Masjid Raden Patah Universitas Brawijaya. Kegiatan ini terselenggara tiap akhir tahun.",
    image: profile,
    icon: <Building /> // Ganti dengan komponen icon Anda
  },
  {
    title: "Wisuda Tahfidz",
    subtitle: "Selama Bulan Ramadhan",
    description:
      "Acara seremonial untuk memberikan penghargaan kepada para penghafal" +
      " Al-Qur'an (tahfidz) yang telah berhasil menghafal sejumlah juz dari Al-Qur'an. Wisuda tahfidz dilaksanakan di Masjid Raden Patah setiap bulan Ramadhan.",
    image: profile,
    icon: <Building /> // Ganti dengan komponen icon Anda
  },
  {
    title: "Seminar Qur'ani",
    subtitle: "Selama Bulan Ramadhan",
    description:
      "“Seminar Qur'ani” adalah acara edukatif yang bertujuan untuk memperdalam pemahaman tentang Al-Qur'an, baik dari segi tafsir, tajwid, hafalan, maupun implementasi nilai-nilai Qur'an dalam kehidupan sehari-hari. Seminar ini biasanya melibatkan pembicara yang ahli di bidang keislaman, seperti ulama, hafiz, akademisi, atau pakar tafsir.",
    image: profile,
    icon: <Building /> // Ganti dengan komponen icon Anda
  }
];


const Page = () => {
  return (
    <div className={"container mt-36 h-full"}>

      <div className={"flex flex-col gap-4"}>
        <SectionTitle
          title={"Program Kajian di Masjid Raden Patah"}
          subtitle={"Yuk ikut kajian yang ada di Masjid Raden Patah"} />

        <div className="flex w-full justify-center gap-8">

          {programs.map((item, index) => {
            return (
              <WeeklyProgramCard key={index} {...item} />);

          })}
        </div>
        <div className="flex flex-col gap-4">

          <SectionTitle
            title={"Program Tahunan yang ada  di Masjid Raden Patah"}
            subtitle={"Ada Banyak Program Menarik yang ada di Masjid Raden" +
              " Patah"} />


          <div className="flex w-full justify-center gap-8">
            {annualPrograms.map((item, index) => {
              return (
                <AnnualProgramCard key={index} {...item} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
