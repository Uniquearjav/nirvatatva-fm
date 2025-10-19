import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/nt_logo.webp'
export function LogoIcon() {
  return (
    <Image src={Logo} alt="" className='w-10'/>
  )
}
