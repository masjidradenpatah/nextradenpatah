import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface FacilityProps {
  image: StaticImageData;
  title: string;
  icon: ReactNode;
}

const FacilityCard = ({ image, title, icon }: FacilityProps) => {
  return (
    <div
      className={
        "flex w-full flex-shrink-0 flex-grow flex-col gap-4 rounded-full rounded-bl-none border bg-white p-2 shadow md:p-3 lg:p-4 xl:p-5"
      }
    >
      {/*image here*/}
      <div className={"relative w-full"}>
        <Image
          src={image}
          className={"aspect-square w-full" + " rounded-full object-cover"}
          alt={"fasilitas di masjid raden" + " patah"}
        />
        <div
          className={
            "absolute bottom-0.5 right-0 grid size-8 scale-150 place-content-center rounded-full bg-primary p-2"
          }
        >
          {icon}
        </div>
      </div>
      <div className={"flex flex-grow flex-col justify-center"}>
        <p
          className={
            "text-base font-medium text-black md:text-lg lg:text-xl xl:text-2xl"
          }
        >
          {title}
        </p>
      </div>
    </div>
  );
};
export default FacilityCard;
