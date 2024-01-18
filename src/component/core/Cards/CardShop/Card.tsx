import { CardProps } from './Card.Interface';
import React from 'react';

export default function CardShop(prop: CardProps) {
  return (
    <div className="w-[213px] h-[173px] relative m-4">
      <div className="w-[213px] h-[173px] left-0 top-0 absolute bg-zinc-300 rounded-[15px]">
        <img className="w-[189px] h-[95px] left-[12px] top-[12px] absolute" src={prop.logo} />
        <div className="w-[199px] h-7 left-[7px] top-[130px] absolute">
          <div className="w-[199px] flex justify-center">
            <button className="w-[30px] bg-red-500 rounded-lg text-white">-</button>
            <div className="text-8 font-normal font-['Jaldi'] w-[50px] text-center">1</div>
            <button className=" bg-green-500 rounded-lg w-[30px] text-white">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
