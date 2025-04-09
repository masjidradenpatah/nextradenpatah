import React from "react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import mualaf from "@/public/services/mualaf center.png";
import marriage from "@/public/services/akad nikah.png";
import consult from "@/public/services/konsutasi keagamaan.png";
import ServiceCTA from "@/components/ServiceCTA";

const Page = () => {
  return (
    <div
      className={
        "flex size-full flex-col items-center gap-12 overflow-hidden px-4 py-32 sm:px-0 md:gap-24"
      }
    >
      <section
        data-testid="services-section"
        className={"container relative w-full space-y-8 p-4"}
      >
        <SectionTitle
          title={"Layanan Jama'ah"}
          subtitle={"Berbagai pilihan layanan siap membantu anda..."}
        ></SectionTitle>
        <div className="flex flex-col gap-12">
          <ServiceCard
            title={"Mualaf Center"}
            description={
              "Masjid Raden Patah Universitas Brawijaya menyediakan layanan khusus\n" +
              " bagi para mualaf yang membutuhkan dukungan dalam proses memulai\n" +
              " perjalanan baru sebagai seorang Muslim. Kami hadir untuk memberikan\n" +
              " bimbingan, pembelajaran, serta pendampingan spiritual agar para\n" +
              " mualaf dapat memahami Islam dengan baik dan mendalam."
            }
            image={mualaf}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/mualaf-center"}
          />
          <ServiceCard
            title={"Konsultasi Keagamaan"}
            description={
              " Masjid Raden Patah Universitas Brawijaya menyediakan layanan" +
              " konsultasi keagamaan untuk membantu jamaah dalam menyelesaikan" +
              " berbagai permasalahan yang berkaitan dengan kehidupan spiritual," +
              " sosial, maupun pribadi dari sudut pandang Islam."
            }
            image={consult}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/konsultasi-keagamaan"}
          />
          <ServiceCard
            title={"Akad Nikah"}
            description={
              "Dengan didukung oleh para ustadz dan pembimbing yang berkompeten," +
              " layanan ini dirancang untuk memberikan panduan yang sesuai dengan" +
              " prinsip syariat Islam. Apakah Anda menghadapi pertanyaan tentang" +
              " fiqih, keluarga, atau isu-isu lain, kami siap menjadi teman diskusi" +
              " yang terpercaya, memberikan nasihat dan solusi yang mendalam."
            }
            image={marriage}
            location={"Ruang layanan bersama Masjid Raden Patah"}
            link={"/services/akad-nikah"}
          />
        </div>
      </section>

      {/*  */}
      <ServiceCTA></ServiceCTA>
      {/*  */}
    </div>
  );
};
export default Page;
