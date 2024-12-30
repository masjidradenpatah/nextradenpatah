import React from 'react'
import Image from 'next/image'
import mrplogo from '@/public/mrp-logo.png'
import Link from "next/link";

const Navbar = () => {
  return (
      <header className={' w-full fixed bg-white z-50 shadow'}>
        <div className={'container flex justify-between items-center'}>

        <Image src={mrplogo} alt={'mrp logo'} width={100} height={100}></Image>
        <nav className="flex gap-4 text-lg">
          <Link href={'/profile'}>Profile</Link>
          <Link href={'/program'}>Program</Link>
          <Link href={'/layanan'}>Layanan</Link>
          <Link href={'/artikel'}>Artikel</Link>
          <Link href={'/contact'}>Kontak Kami</Link>
        </nav>
        </div>
      </header>
  )
}
export default Navbar
