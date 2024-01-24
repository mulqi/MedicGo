import React, { FC } from 'react';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({ onPlus, onMinus, order }) => {
  return (
    <div>
      <button className="w-[20px] bg-red-500 rounded-lg text-white" onClick={onMinus}>
        -
      </button>
      <input className="text-8 font-normal font-['Jaldi'] w-[20px] text-center rounded-md outline-none" type="text" value={order} readOnly />
      <button className=" bg-green-500 rounded-lg w-[20px] text-white" onClick={onPlus}>
        +
      </button>
    </div>
  );
};

export default Button;
