import Image from "next/image";
import documentationBG from "@/public/tc/images/documentationBG.png";

export default function Documentation() {
  return (
    <section id="documentation" className="w-full">
      <div className="tc-container mx-auto flex flex-col gap-6 lg:flex-row">
        <Image
          src={documentationBG}
          className="absolute right-0 top-0 -z-10 -translate-y-1/2 translate-x-2/3"
          alt=""
        />
        <Image
          src={documentationBG}
          className="absolute bottom-0 left-0 -z-10 -translate-x-2/3 translate-y-1/2"
          alt=""
        />
        <h2 className="documentationTC sectionTitle basis-3/12 text-center font-semibold lg:text-left">
          Dokumentasi Kegiatan
        </h2>
        <div className="flex flex-wrap justify-between gap-y-4 overflow-hidden rounded-[32px] lg:basis-9/12">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="w-[calc(30%)]">
              <Image
                src={`/tc/images/documentation/documentation${index + 1}.png`}
                alt=""
                width={400}
                height={400}
                className="aspect-square w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
