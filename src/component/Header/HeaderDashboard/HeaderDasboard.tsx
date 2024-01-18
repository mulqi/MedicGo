import React from 'react';
import { IconType } from '../../core/icons';
import { useNavigate } from 'react-router-dom';

export default function HeaderDashboard() {
  const navigate = useNavigate();
  return (
    <div className="relative md:m-[12px] md:pt-[63px] item-center">
      <input className="w-full outline-none md:w-[437px] h-[59px] md:h-[50px] pl-4 md:pl-[25px] bg-zinc-300 rounded-full absolute left-0 top-[17px] text-xl font-normal font-['Jaldi']" placeholder="Search" />
      <button className="w-12 h-[32px] md:w-12 md:h-5 absolute right-[11px] top-8 md:left-[350px] md:m-[12px] md:top-3.5">
        <div className="flex-row md:flex gap-9">
          <img className="decoration-none " src={IconType.SearchIcon} alt="search" />
          <img className="pt-6 md:flex md:pt-0 w-[32px]" src={IconType.TroliIcon} alt="keranjang" onClick={() => navigate('/Cart')} />
        </div>
      </button>
    </div>
  );
}
