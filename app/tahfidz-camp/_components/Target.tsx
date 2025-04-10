import Image from "next/image";
import targetZiyaadahIcon from "@/public/tc/icons/target_ziyaadah.svg";
import targetMurajaahIcon from "@/public/tc/icons/target_murajaah.svg";

export default function Target() {
  return (
    <section id="target" className="w-full">
      <div className="tc-container targetActivityTC mx-auto flex rounded-[32px]">
        <div className="flex w-full flex-col items-center justify-center gap-8 lg:p-8">
          <h2 className="sectionTitle font-semibold text-white">
            Target Kegiatan
          </h2>
          <div className="flex w-full gap-6">
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-3xl bg-[#FFDED3] px-2 py-4 md:gap-4 md:py-9">
              <Image
                src={targetZiyaadahIcon}
                className="h-[84px] w-[72px]"
                alt="Target Ziyaadah"
              />
              <h3 className="text-center text-[20px] font-semibold lg:text-[32px]">
                1 Juz Ziyaadah
              </h3>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-3xl bg-[#FFDED3] px-2 py-4 md:gap-4 md:py-9">
              <Image
                src={targetMurajaahIcon}
                className="h-[84px] w-[72px]"
                alt="Target Murajaah"
              />
              <h3 className="text-center text-[20px] font-semibold lg:text-[32px]">
                3 Juz Murajaah
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
