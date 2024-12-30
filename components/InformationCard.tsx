import { MapPinned } from "lucide-react";

interface InformationProps {
  title: string;
  speaker: string;
  location: string;
  date: Date;
  subtitle: string;
  image?: string;
  altText: string;
}

const InformationCard = ({
                           title,
                           speaker,
                           location,
                           date,
                           subtitle,
                           altText,
                           image
                         }: InformationProps) => {
  return (
    <div className={"flex flex-col rounded-3xl basis-1/3 bg-secondary" +
      " overflow-hidden"}>
      <div
        className={`p-4 bg-[url("../public/informations/alquran.jpg")] bg-center bg-cover w-full h-[200px] flex flex-col justify-end`}>

        <div className={"h-24 backdrop-blur-sm rounded-xl p-4 w-full" +
          " bg-white/15"}>
          <div className=" text-white flex gap-2 w-full">
            <div className={'flex flex-col justify-center'}>
              <p className={'font-bold text-xl'}>Kismala</p>
              <p>Kajian Tematik Islam Menjelang Maghrib</p>
            </div>
            <div>
              <p className={"bg-emerald-500 p-1 rounded-md text-white"}>
                Hari ini
              </p>
              <p className={"text-center"}>16.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex flex-col p-4 flex-grow"}>
        <div className={"mb-2"}>
          <h3 className={"font-medium text-2xl"}>{title}</h3>
          <p>{speaker}</p>
        </div>
        {/*<p>{subtitle}</p>*/}
        <div className={"flex flex-grow items-end gap-2"}>
          <div
            className={"size-12  bg-primary rounded-xl grid place-content-center"}>
            <MapPinned className={"text-white"} /></div>
          <div className={"flex items-center bg-white h-12 w-full px-4 my-" +
            " rounded-xl" +
            " font-medium"}>{location}</div>
        </div>
        {/*<p>Date: {date.toLocaleDateString()}</p> /!* Format tanggal *!/*/}

      </div>
    </div>
  );
};
export default InformationCard;
