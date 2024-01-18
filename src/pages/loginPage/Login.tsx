import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/component/Header/Header';
import InputField from '@/component/core/dataInput/InputFields/InputField';
import { LogoType } from '@/component/Header/Header.types';
import { Button } from '@/component/core';
import { IconType } from '@/component/core/icons';

export default function Login() {
  const navigate = useNavigate();
  return (
    <main>
      <Header logo={LogoType.Logo2} />
      <div className="w-full max-w-[1295px] h-auto px-[4vw] sm:px-[349px] pt-[4vh] sm:pt-[61px] pb-[4vh] sm:pb-[101px] flex justify-center items-center">
        <div className="w-full h-auto bg-white rounded-xl text-center p-5 opacity-80 hover:opacity-100 delay-150 duration-300">
          <div className="text-blue-950 text-3xl font-bold font-['Jaldi']">Login</div>
          <div className="w-full max-w-[555px] h-auto max-h-[262px] px-[7px] pt-20 pb-2 flex-col justify-center items-start gap-[13px] inline-flex ">
            <InputField icon={IconType.ProfilIcon} placeholder="Username" />
            <InputField icon={IconType.PasswordIcon} placeholder="Password" type="password" />
          </div>
          <Button title="Masuk" />
          <div className="inline-flex p-10">
            <span className="">
              Tidak punya akun ?
              <button className="text-blue-500" onClick={() => navigate('/Registrasi')}>
                Daftar
              </button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
