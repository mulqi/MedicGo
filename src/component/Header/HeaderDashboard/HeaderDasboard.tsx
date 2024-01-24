import React from 'react';
import { IconType } from '../../core/icons';

export default function HeaderDashboard() {
  return (
    <div className="relative md:m-[12px] md:pt-[63px] item-center">
      <input className="w-full outline-none md:w-[437px] h-[59px] md:h-[50px] pl-4 md:pl-[25px] bg-zinc-300 rounded-full absolute left-0 top-[17px] text-xl font-normal font-['Jaldi']" placeholder="Search" />
      <button className="w-30 h-[32px] md:w-30 md:h-5 absolute right-[11px] top-8 md:left-[350px] md:m-[12px] md:top-3.5 flex-wrap md:flex gap-8">
        <div className="">
          <img className="decoration-none " src={IconType.SearchIcon} alt="search" />
        </div>
      </button>
    </div>
  );
}
