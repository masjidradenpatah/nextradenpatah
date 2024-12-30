import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FacilityProps {
  image: StaticImageData;
  title: string;
  icon: ReactNode;
}

const FacilityCard = ({ image, title, icon }: FacilityProps) => {
  return (
    <motion.div
      className={"bg-white border rounded-bl-none rounded-full" +
        " flex-shrink-0 w-[250px] flex flex-col gap-4" +
        " p-5 shadow flex-grow"}
      initial={{
        y: 50
      }}
      animate={{
        y: 0
      }}
      exit={{
        y: 50
      }}
    >
      {/*image here*/}
      <div className={"relative w-full"}>
        <Image src={image} className={"aspect-square w-full" +
          " object-cover rounded-full"} alt={"fasilitas di masjid raden" +
          " patah"} />
        <div className={"size-8  bottom-0.5 rounded-full" +
          " absolute scale-150" +
          " bg-primary right-0 grid place-content-center p-2"}>
          {icon}
        </div>
      </div>
      <div className={"flex-grow flex flex-col  justify-center"}>

        <p className={"text-2xl font-medium"}>{title}</p>
      </div>

    </motion.div>
  );
};
export default FacilityCard;
