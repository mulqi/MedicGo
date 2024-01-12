import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/component/Header/Header';
import { Button } from '@/component/core';
import InputField from '@/component/core/dataInput/InputField/InputFeild';
import { LogoType } from '@/component/Header/Header.types';
import { inputFields } from '@/component/core/dataInput/InputField/input';
import { passwordFields } from '@/component/core/dataInput/InputField/input';

export default function Regist() {
  const navigate = useNavigate();

  return (
    <main>
      <Header logo={LogoType.Logo1} />

      <div className="w-full max-w-[1295px] h-auto px-[4vw] sm:px-[349px] pt-[4vh] sm:pt-[61px] pb-[4vh] sm:pb-[101px] flex justify-center items-center">
        <div className="w-full h-auto bg-white rounded-xl text-center p-5">
          <div className="text-blue-950 text-3xl font-bold font-['Jaldi']">Daftar</div>
          <div className="w-full max-w-[555px] h-auto max-h-[262px] px-[7px] pt-20 pb-2 flex-col justify-center items-start gap-[13px] inline-flex ">
            {inputFields.map((field, index) => (
              <InputField key={index} {...field} icon={field.IconType} type="text" />
            ))}
            {passwordFields.map((field, index) => (
              <InputField key={index} {...field} type="password" icon={field.IconType} />
            ))}
          </div>
          <Button title="Daftar" />
          <div className="inline-flex p-10">
            <span className="">
              Sudah punya akun ?
              <button className="text-blue-500" onClick={() => navigate('/Login')}>
                Masuk
              </button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
