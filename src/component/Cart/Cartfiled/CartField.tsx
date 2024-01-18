import React from 'react';
import CartAdress from '../CartAddress/CartFiels';

export default function CartField() {
  return (
    <div className="flex-wrap md:flex gap-4">
      <div className="w-full mt-[150px] md:m-1 md:p-4 md:w-[832px] h-[102px] bg-[#D9D9D9] rounded-md flex justify-between">
        <div className="flex items-center">
          <img className="w-[82px] h-[68px] m-4 bg-[#ffffff78]" alt="logo" />
          <h1>nama produk</h1>
        </div>
        <div className="flex-warp md:flex">
          <p className="">Total harga :</p>
          <p>Rp.300,000</p>
        </div>
        <div>
          <div className="bg-[#D42F2F] w-[80px] h-[22px] text-center m-2 md:m-0 text-white rounded-md">
            <button>hapus</button>
            <div className="flex justify-center pt-10 md:pt-6">
              <button className="w-[30px] bg-red-500 rounded-lg text-white">-</button>
              <div className="text-8 font-normal font-['Jaldi'] w-[50px] text-center">1</div>
              <button className=" bg-green-500 w-[30px] rounded-lg text-white">+</button>
            </div>
          </div>
        </div>
      </div>
      <CartAdress />
    </div>
  );
}
