import React from 'react';
import { IconType } from '@/component/core/icons';

export default function DashBoard() {
  return (
    <main>
      <div className="relative md:m-[35px] md:pt-[63px]">
        <input className="w-full md:w-[437px] h-[59px] md:h-[50px] pl-4 md:pl-[25px] bg-zinc-300 rounded-full absolute left-0 top-[17px] text-xl font-normal font-['Jaldi']" placeholder="Search" />
        <button className="w-12 h-[34px] md:w-12 md:h-5 absolute right-[11px] top-8 md:left-[350px] md:m-[12px] md:top-3.5">
          <img className="decoration-none" src={IconType.SearchIcon} alt="search" />
        </button>

        <div className="hidden md:block lg:block md:w-[166px] md:h-[129px] absolute md:right-0 md:top-5">
          <button className="md:w-[33px] md:h-[32.25px]">
            <img src={IconType.TroliIcon} alt="keranjang" />
          </button>
          <div className="text-white text-[25px] font-normal font-['Jaldi'] ">Hello user123!</div>
        </div>
      </div>
    </main>
  );
}
