import React from 'react';
import { HeaderProp } from './Header.Interface';

export default function Header(prop: HeaderProp) {
  return (
    <div className="w-full max-w-[1294px] sm:h-[268px] pt-7 pb-[27px] inline-flex justify-center">
      <img className="w-full h-auto max-w-[235px] max-h-[213px]" src={prop.logo} alt="Logo" />
    </div>
  );
}
