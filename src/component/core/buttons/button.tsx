import React from 'react';
import { ButtonProp } from './button.types';

export const Button = (prop: ButtonProp) => {
  return (
    <div className="w-full max-w-[417px] sm:w-full sm:max-w-full relative mt-9 p-6">
      <button className="w-full sm:w-[416px] h-[55px] sm:h-[54px] text-white bg-indigo-800 rounded-[50px]">{prop.title}</button>
    </div>
  );
};
