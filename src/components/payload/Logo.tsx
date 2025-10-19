import React from 'react';
import logo from '@/nt_logo.webp'; 
import logoDark from '@/nt_logo.webp'; 
import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image className="h-20 object-contain dark:hidden" src={logo} alt="" /> 
      <Image className="h-20 object-contain hidden dark:block" src={logoDark} alt="" />
    </div>
  );
}