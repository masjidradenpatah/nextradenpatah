import React from "react";
import { Metadata } from "next";
import tower from "@/public/hero section/menara mrp.png";
import about from "@/public/about-mrp.png";
import logobig from "@/public/logo-mrp-big.png";

import Image from "next/image";

import styles from "./profile.module.css";

export const metadata: Metadata = {
  title: "Profile Masjid Raden Patah",
  description: "Sejarah dan filosofi Masjid Raden Patah Universitas Brawijaya",
};

const Page = () => {
  return (
    <div
      className={
        "flex size-full flex-col items-center gap-12 overflow-hidden px-4 py-32 sm:px-0 md:gap-24"
      }
    >
      <section className={styles.parent + " container w-full"}>
        <div className={styles.div1 + " h-fit"}>
          <h2 className={"text-7xl font-bold text-primary"}>
            Sejarah <br /> Masjid Raden Patah
          </h2>
        </div>
        <div
          className={
            styles.div2 +
            " flex h-full flex-col items-center justify-center gap-4 text-justify indent-8 text-xl"
          }
        >
          <p>
            Masjid Raden Patah Universitas Brawijaya (MRP UB) dinamai untuk
            menghormati Raden Patah, raja Islam pertama di tanah Jawa. Awalnya,
            masjid ini didirikan pada tahun 1975 dengan kapasitas terbatas,
            hanya mampu menampung sekitar 200 jamaah. Pada masa kepemimpinan
            Rektor Prof. Dr. Harsono, masjid diperluas berkat bantuan dari
            Yayasan Amal Bakti Muslim Pancasila, meningkatkan kapasitasnya
            hingga 2.000 jamaah untuk memenuhi kebutuhan mahasiswa yang terus
            bertambah.
          </p>
          <p>
            Pada era Rektor Prof. Dr. Ir. Yogi Sugito, MRP UB menjalani
            pemugaran total. Bangunan lama diratakan dan diganti dengan desain
            baru bergaya Majapahit yang dirancang oleh arsitek Ir. Ali Sukirno.
            Proyek pembangunan ini dimulai pada tahun 2010 dengan anggaran Rp43
            miliar. Meskipun penyelesaiannya bertahap, lantai dasar dan ruang
            utama masjid sudah dapat digunakan sejak diresmikan pada 5 Juni
            2014.
          </p>
          <p>
            Pembangunan total MRP UB berlangsung selama delapan tahap, dengan
            pendanaan yang sepenuhnya berasal dari Penerimaan Negara Bukan Pajak
            (PNBP) di masa kepemimpinan Rektor Prof. Dr. Mohammad Bisri. Total
            anggaran yang dihabiskan mencapai Rp39 miliar. Dengan luas bangunan
            6.830 m², masjid ini kini mampu menampung hingga 4.500 jamaah untuk
            salat dan lebih dari 7.000 jamaah untuk kegiatan pengajian.
            Pembangunan secara keseluruhan selesai dan diresmikan pada 6 April
            2018 oleh Wakapolri sekaligus Wakil Ketua Umum Dewan Masjid
            Indonesia (DMI).
          </p>
        </div>
        <div
          className={
            styles.div3 + " relative flex h-fit items-center justify-center"
          }
        >
          <Image
            src={tower}
            alt={"menara masjid raden patah"}
            className={"object-cover"}
          />
          <div className="absolute bottom-0 right-0 -z-10 size-2/3 translate-x-12 translate-y-12 bg-primary" />
        </div>
      </section>
      <section className="container w-full">
        <div className="flex w-full gap-8">
          <Image
            className={
              "w-1/2 rounded-md border-2 border-primary object-cover shadow"
            }
            src={about}
            alt={"gambar masjid raden patah"}
          />
          <div className="flex w-1/2 flex-col gap-4 text-justify">
            <h2 className={"text-7xl font-bold text-primary"}>Tentang MRP</h2>
            <p className={"indent-8 text-xl"}>
              MRP UB dibangun sebagai masjid kampus yang inklusif, memajukan
              dakwah yang damai, toleran, dan berbasis kearifan lokal. Masjid
              ini menjadi ruang ibadah sekaligus pusat pembinaan mahasiswa,
              pendidikan, dan pengembangan ilmu serta amal.
            </p>
          </div>
        </div>
      </section>
      <section className="container w-full">
        <h2 className={"mb-8 text-center text-7xl font-bold text-primary"}>
          Filosofi Logo
        </h2>

        <div className="flex w-full justify-center gap-12">
          <Image
            width={292}
            height={430}
            src={logobig}
            alt={"logo masjid raden patah"}
            quality={100}
          />
          <div className="w-1/2 text-justify text-xl">
            <p className={"mb-4 indent-8"}>
              Logo MRP UB terinspirasi dari bentuk gunungan pewayangan, yang
              bermakna pintu ilmu dan amal.
            </p>
            <ul className={"list-inside list-disc space-y-4"}>
              <li>
                Warna tosca adalah perpaduan hijau (simbol surga & sunnah) dan
                biru (warna UB, simbol modernitas).
              </li>
              <li>
                Terdapat kaligrafi “Masjid Raden Patah” dalam pola kembar,
                mencerminkan dua pintu: ilmu dan amal.
              </li>
              <li>
                Tulisan “Masjid Raden Patah Universitas Brawijaya” di bawah logo
                menunjukkan identitas sebagai masjid kampus yang menjunjung tri
                dharma perguruan tinggi.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className={"mb-8 text-center text-7xl font-bold text-primary"}>
            Visi{" "}
          </h2>
          <p className={"mb-4 text-center text-4xl"}>
            “Menjadi masjid kampus yang memajukan peradaban dengan berbasis pada
            pengembangan insani serta intelektualitas Islami”.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <div className="flex w-full items-center gap-8">
            <div className="8/12 flex flex-col">
              <h2 className={"mb-8 text-7xl font-bold text-primary"}>Misi</h2>
              <ol
                className={
                  "w-full list-inside list-decimal space-y-2 text-justify"
                }
              >
                <li>
                  Mengembangkan kreativitas mahasiswa dalam bingkai Islam yang
                  berperadaban.
                </li>
                <li>
                  Menjadikan masjid sebagai pusat kegiatan kemahasiswaan dan
                  kemasyarakatan.
                </li>
                <li>Menjadikan masjid sebagai tempat rekreasi rohani</li>
                <li>
                  Menjadikan masjid sebagai tempat merujuk berbagai persoalan
                  keumatan.
                </li>
                <li>
                  Menjadikan masjid sebagai pesantren dan pusat studi yang
                  bersahabat bagi mahasiswa dan{" "}
                </li>
                <li>
                  Membangun dan menggerakkan pemikiran Islami yang rahmatan lil
                  ‘alamin baik di lingkungan kampus maupun masyarakat.
                </li>
              </ol>
            </div>
            <Image
              src={tower}
              alt={"menara masjid raden patah"}
              className={"object-cover"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Page;
