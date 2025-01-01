import Image from "next/image";
import mrplogo from "@/public/mrp-logo.png";
import unit from "@/public/units-compiled.png";

const Footer = () => {
  return (
    <div className={"bg-secondary py-[120px] text-black bottom-0 relative"}>
      <div className={"container flex "}>
        <div className={"flex flex-col"}>
          <Image src={mrplogo} alt={"logo mrp"} width={100}
                 height={100}></Image>
          <div>
            Jl. Kampus Universitas Brawijaya
            Ketawanggede Lowokwaru Kota Malang, Jawa Timur, 65145
          </div>
          <div>
            <p>Ikuti kami</p>
            <div className={"flex gap-2"}>
              <div className="bg-black rounded-full size-4"></div>
              <div className="bg-black rounded-full size-4"></div>
              <div className="bg-black rounded-full size-4"></div>
              <div className="bg-black rounded-full size-4"></div>
              <div className="bg-black rounded-full size-4"></div>
            </div>
          </div>

        </div>
        <div className={"flex flex-col w-full px-4"}>

          <div className={"flex w-full flex-grow"}>
            {/*  disini untuk links*/}
            <div className={"flex flex-col flex-grow  w-full"}>
              <ul className={"w-full"}>
                <li>Profile</li>
                <li>Fasilitas</li>
                <li>Informasi Terbaru</li>
                <li>Tentang Kami</li>
              </ul>
            </div>
            <div className={"flex flex-col flex-grow  w-full"}>
              <ul className={"w-full"}>
                <li>Program</li>
                <li>Program Harian</li>
                <li>Program Mingguan</li>
                <li>Program Tahunan</li>
              </ul>
            </div>
            <div className={"flex flex-col flex-grow  w-full"}>
              <ul className={"w-full"}>
                <li>Layanan</li>
                <li>Akad Nikah</li>
                <li>Konsultasi Agama</li>
                <li>Mualaf Center</li>
              </ul>
            </div>
            <div className={"flex flex-col flex-grow  w-full"}>
              <ul className={"w-full"}>
                <li>Artikel</li>
                <li>Fiqih</li>
                <li>Tauhid</li>
                <li>Sejarah Islam</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end w-full">
            {/*  disini untuk logo-logo unit*/}
            <Image src={unit} alt={"logo-logo unit mrp"} height={50}
                   width={250}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
