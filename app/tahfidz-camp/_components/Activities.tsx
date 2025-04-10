import Image from "next/image";
import alQuran from "@/public/tc/activities/al_quran.svg";
import converse from "@/public/tc/activities/converse.svg";
import tafaqquh from "@/public/tc/activities/tafaqquh.svg";
import fitfun from "@/public/tc/activities/fitfun.svg";

export default function Activities() {
  return (
    <section id="activities" className="w-full">
      <div className="tc-container mx-auto flex flex-col gap-8">
        <h2 className="activitiesTC sectionTitle text-center font-semibold">
          Ngapain Aja Sih Pas Tahfidz Camp ?
        </h2>
        <div className="flex w-full flex-col gap-4 lg:gap-8">
          <div className="activitiesLeft flex max-w-[648px] gap-4 px-2 py-3 md:gap-6 md:px-8">
            <Image
              src={alQuran}
              alt=""
              className="size-[96px] lg:size-[168px]"
            />
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-[24px] font-bold lg:text-[32px]">
                Hafidz Hour
              </h3>
              <p className="text-[16px] lg:text-[24px]">3 Kali Sehari</p>
            </div>
          </div>
          <div className="activitiesRight flex max-w-[648px] items-center gap-4 self-end px-2 py-3 md:gap-6 md:px-8">
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-right text-[24px] font-bold lg:text-[32px]">
                Converse & Chill
              </h3>
              <p className="text-right text-[16px]">
                Kegiatan bonding bersama dengan advisor, bertujuan untuk
                menciptakan hubungan yang baik terhadap sesama peserta dan
                panitia.
              </p>
            </div>
            <Image
              src={converse}
              alt=""
              className="size-[96px] lg:size-[168px]"
            />
          </div>
          <div className="activitiesLeft flex max-w-[648px] gap-4 px-2 py-3 md:gap-6 md:px-8">
            <Image
              src={tafaqquh}
              alt=""
              className="size-[96px] lg:size-[168px]"
            />
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-[24px] font-bold lg:text-[32px]">
                Tafaqquh Series
              </h3>
              <p className="text-[16px] lg:text-[24px]">
                Kajian Bertema Al-Qur&#39;an
              </p>
            </div>
          </div>
          <div className="activitiesRight flex max-w-[648px] items-center gap-4 self-end px-2 py-3 md:gap-6 md:px-8">
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-right text-[24px] font-bold lg:text-[32px]">
                Fit & Fun
              </h3>
              <p className="text-right text-[16px]">
                Kegiatan Outbond bersama peserta sebagai refreshing. Fit & Fun
                merupakan agenda olahraga bersama maupun kegiatan menyenangkan
                lainnya.
              </p>
            </div>
            <Image
              src={fitfun}
              alt=""
              className="size-[96px] lg:size-[168px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
