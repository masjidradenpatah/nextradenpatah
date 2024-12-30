import Image from 'next/image'
import tower from '@/public/menara_mrp.png'

const Hero = () => {
  return (
    <div className={'w-full bg-secondary'}>

    <div className={'container'}>
      <div className={'w-full flex justify-between'}>

      <div className={'flex flex-col justify-center gap-4'}>
        <div className="flex flex-col  gap-2">

        <h1 className={'text-5xl font-bold'}>Masjid Raden Patah</h1>
        <p className={'text-3xl'}>Universitas Brawijaya</p>
        </div>
        <div className={'px-4 py-2 rounded-full w-fit bg-primary'}> Button</div>
      </div>
      <Image  src={tower} alt={'menara mrp'} className={'me-24 ' +
        ' object-cover'} />
      </div>
    </div>
    </div>
  );
};
export default Hero;
