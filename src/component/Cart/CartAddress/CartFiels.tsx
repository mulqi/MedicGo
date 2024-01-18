import React from 'react';
import Point from '@/assets/icons/point.png';

export default function CartAdress() {
  return (
    <div className="md:w-[470px] h-[302px] rounded-md bg-[#D9D9D9] mt-4 md:mt-1">
      <div>
        <h1 className="text-center font-bold pt-2">Alamat</h1>
        <div className="h-auto md:w-[462px] m-1 md:h-[70px] p-5 bg-[#ffffff78] rounded-lg flex items-center justify-between">
          <img src={Point} alt="logo" />
          <h1>jl.bojong Kacor rt 05/ rw 12</h1>
          <div className="bg-[#D42F2F] w-[38px] h-[22px] text-center text-white rounded-md">
            <button>edit</button>
          </div>
        </div>
        <div className="w-[328px] md:h-[125px] m-4 flex gap-2">
          <img className="w-[161px] h-[112px] bg-[#ffffff78] " alt="logo" />
          <div className="text-center">
            <p>Nama produk </p>
            <p>Jumlah : 1</p>
            <p>Rp.300,000</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className=" w-[124px] h-[30px] bg-[#54b427c4] rounded-md text-white">Buat pesanan</button>
        </div>
      </div>
    </div>
  );
}
