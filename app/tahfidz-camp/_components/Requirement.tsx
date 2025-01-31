import Image from "next/image";
import requirementBG from "@/public/tc/images/requirementBG.png";
import { Check } from "lucide-react";

export default function Requirement() {
  return (
    <section id="requirement" className="w-full px-4 lg:px-0">
      <div className="tc-container mx-auto flex flex-col gap-4 rounded-[32px] border-[6px] border-red-500 p-4 pt-12 md:p-8">
        <Image
          src={requirementBG}
          className="absolute right-0 top-0 -z-10 -translate-y-1/2 translate-x-2/3"
          alt=""
        />
        <Image
          src={requirementBG}
          className="absolute bottom-0 left-0 -z-10 -translate-x-2/3 translate-y-1/2"
          alt=""
        />
        <p className="sectionTitle absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--tc-primary)] px-24 py-2 text-white">
          Persyaratan
        </p>
        <div className="flex items-center gap-2 md:gap-6">
          <Check className={"size-12 text-red-500"} />
          <p className="text-[16px] lg:text-[32px]">Berusia 16-25 tahun</p>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <Check className={"size-12 text-red-500"} />
          <p className="text-[16px] lg:text-[32px]">
            Bersungguh-sungguh untuk menghafal Al-Qur’an
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <Check className={"size-12 text-red-500"} />
          <p className="text-[16px] lg:text-[32px]">
            Bersedia mematuhi segala panduan dan peraturan selama acara
          </p>
        </div>
      </div>
    </section>
  );
}
