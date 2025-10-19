import React from 'react';
import logo from '../../../public/nt_logo.webp';
import Image from 'next/image';

export default function Icon() {
  return (
    <div>
      <Image className="w-40" src={logo} alt="" /> 
    </div>
  );
}