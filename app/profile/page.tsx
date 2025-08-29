import React from "react";
import { Metadata } from "next";
import tower from "@/public/hero section/menara mrp.png";
import Image from "next/image";

import styles from "./profile.module.css";

export const metadata: Metadata = {
  title: "Layanan Mualaf Center",
  description: "Layanan Mualaf Center Masjid Raden Patah Universitas Brawijaya",
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
      <section className="container w-full"></section>
    </div>
  );
};
export default Page;
