import React, { forwardRef, Ref } from 'react';
import { InputFeildProps } from './InputField.types';

const InputField = forwardRef((props: InputFeildProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="w-full h-[52px] relative p-7">
      <div className="w-[46px] h-[52px] left-0 top-0 absolute bg-zinc-300 rounded-lg">
        <img src={props.icon} className="w-[18px] h-[15px] left-[14px] top-[19px] absolute" alt="Icon" />
      </div>
      <input ref={ref} className="hover:opacity-100 w-full h-[52px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-lg border border-stone-300 text-center" type="text" {...props} />
    </div>
  );
});

export default InputField;
