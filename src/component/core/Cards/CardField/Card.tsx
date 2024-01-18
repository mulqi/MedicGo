import React from 'react';
import { CardProps } from './Card.Interface';

export default function Card(prop: CardProps) {
  return (
    <button className="w-[213px] h-[173px] relative m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:opacity-5">
      <div className="w-[213px] h-[173px] bg-zinc-300 rounded-[15px]">
        <div className="left-[3px] top-[124px] absolute text-center text-black text-[20px] font-bold font-['Jaldi']">{prop.title}</div>
        <img className="w-[196px] h-[107px] left-[8px] top-[13px] absolute" src={prop.logo} />
      </div>
    </button>
  );
}
