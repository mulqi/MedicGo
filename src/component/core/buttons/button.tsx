import React from 'react';
import { ButtonProp } from './button.types';

export const Button = (prop: ButtonProp) => {
  const style = 'ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-9 p-6 w-full text-white focus:outline-none focus:ring-4 rounded-[10px] py-6 px-6 text-paragraph';

  const buttonStyle = 'w-full sm:w-[416px] h-[55px] sm:h-[54px] text-white bg-indigo-800 rounded-[50px]';

  return (
    <div className={style}>
      <button className={buttonStyle}>{prop.title}</button>
    </div>
  );
};
