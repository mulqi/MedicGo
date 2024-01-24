import React, { forwardRef } from 'react';
import { InputFeildProps } from './InputField.types';

const InputField = forwardRef((prop: InputFeildProps, ref) => {
  return (
    <div className="w-full h-[52px] relative p-7">
      <div className="w-[46px] h-[52px] left-0 top-0 absolute bg-zinc-300 rounded-lg">
        <img src={prop.icon} className="w-[18px] h-[15px] left-[14px] top-[19px] absolute" alt="Icon" />
      </div>
      <input ref={ref} className="hover:opacity-100 w-full h-[52px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-lg border border-stone-300 text-center" type="text" {...prop} />
    </div>
  );
});

export default InputField;
