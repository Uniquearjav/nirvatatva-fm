import React from 'react'
import Image from 'next/image'

export const Logo = () => {
  return (
    /* eslint-disable @next/next/no-img-element */
    <Image src="/nt_logo.webp" alt="Logo" width={100} height={100} />
  )
}
