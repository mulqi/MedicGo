import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/component/Header/Header';
import { Button } from '@/component/core';
import InputField from '@/component/core/dataInput/InputFields/InputField';
import { LogoType } from '@/component/Header/Header.types';
import { inputFields } from '@/component/core/dataInput/InputFields/input';
import { passwordFields } from '@/component/core/dataInput/InputFields/input';
import { useRegister } from './hooks';

export default function Regist() {
  const { handleSubmit, onSubmit, onError, register, formState } = useRegister();
  const navigate = useNavigate();

  return (
    <main className="pb-[400px] md:pb-0 lg:pb-0">
      <Header logo={LogoType.Logo1} />

      <div className="w-full max-w-[1295px] h-auto px-[4vw] sm:px-[349px] pt-[4vh] sm:pt-[61px] pb-[4vh] sm:pb-[101px] flex justify-center items-center">
        <div className="w-full h-auto bg-white rounded-xl text-center p-5 opacity-80 hover:opacity-100 delay-150 duration-300">
          <div className="text-blue-950 text-3xl font-bold font-['Jaldi']">Daftar</div>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="w-full max-w-[555px] h-auto px-[7px] pt-20 pb-2 flex-col justify-center items-start gap-[13px] inline-flex ">
              <InputField {...register('username')} {...inputFields.username} type="text" />
              <p className="text-red-500 text-sm">{formState.errors.username?.message}</p>
              <InputField {...register('email')} {...inputFields.email} type="email" />
              <p className="text-red-500 text-sm">{formState.errors.email?.message}</p>
              <InputField {...register('password')} {...passwordFields.password} type="Password" />
              <p className="text-red-500 text-sm">{formState.errors.password?.message}</p>
              <Button title="Daftar" />
            </div>
          </form>
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
