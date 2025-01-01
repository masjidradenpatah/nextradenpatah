import React from "react";
import SectionTitle from "@/components/SectionTitle";
import profile from '@/public/profile.png'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className={'w-full '}>
    <div className={"container py-24"}>
      <SectionTitle
        title={'Profil Masjid Raden Patah'}
        subtitle={'Lebih dekat dengan Masjid Raden Patah yuk...'}
      />
      <div className={"flex gap-12"}>
        <div className={"aspect-square rounded-3xl overflow-hidden basis-1/3" +
          " bg-blue-200"}>
          <Image
            src={profile}
            alt={'masjid raden patah'}
            className={'w-full h-full object-cover'}
          />
        </div>
        <div className={"flex flex-col gap-4 basis-2/3 justify-center"}>
          <p className={"text-3xl font-bold"}>Asal Usul <span
            className={"text-primary"}>Masjid Raden Patah</span></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            aliquam aperiam consequuntur dolor dolores doloribus fugit ipsa
            magni, minima minus molestias natus necessitatibus nostrum optio
            possimus rem repellat repellendus sed suscipit tenetur! Ad
            consequuntur dignissimos dolor ex, fugit id in modi, qui quis quos,
            reiciendis repellendus rerum saepe sunt veritatis? Aliquam deleniti
            harum laudantium sit temporibus veniam? Adipisci corporis, delectus
            doloremque dolorum exercitationem harum illo illum impedit incidunt
            minima neque omnis possimus quaerat quibusdam quos saepe sed
            similique ut veniam veritatis. At consequatur, odio. Corporis ea
            ipsa minus molestiae nesciunt, perspiciatis quibusdam quis veniam
            vero voluptatum? Exercitationem explicabo hic voluptatem.
          </p>
          <div className={"flex gap-2 text-white font-medium"}>
            <button className={"px-4 py-2 bg-primary rounded-full"}>Button
            </button>
            <button className={"px-4 py-2 bg-primary rounded-full"}>Button
            </button>
            <button className={"px-4 py-2 bg-primary rounded-full"}>Button
            </button>
          </div>

        </div>
      </div>

    </div>
    </div>
  );
};
export default Profile;
