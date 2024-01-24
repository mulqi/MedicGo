import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

interface CardShopProps {
  logo: string;
}

const CardShop: FC<CardShopProps> = (props) => {
  const navigate = useNavigate();

  return (
    <button className="w-[213px] h-[173px] relative m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:opacity-5" onClick={() => navigate('/cart')}>
      <div className="w-[213px] h-[173px] left-0 top-0 absolute bg-zinc-300 rounded-[15px]">
        <img className="w-[189px] h-[150px] left-[12px] top-[12px] absolute" src={props.logo} alt="Shop Logo" />
      </div>
    </button>
  );
};

export default CardShop;
