import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Header from '@/component/Header/Header';
import InputField from '@/component/core/dataInput/InputFields/InputField';
import { LogoType } from '@/component/Header/Header.types';
import { Button } from '@/component/core';
import { IconType } from '@/component/core/icons';

const firebaseConfig = {
  apiKey: 'AIzaSyDlBX0rKiwkwBoFV10M8pB8j7POiXOhWXQ',
  authDomain: 'apotek-app-88dcc.firebaseapp.com',
  projectId: 'apotek-app-88dcc',
  storageBucket: 'apotek-app-88dcc.appspot.com',
  messagingSenderId: '379724095736',
  appId: '1:379724095736:web:078602bdbe93fc9f27db0d',
};

const app = initializeApp(firebaseConfig);

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const auth = getAuth(app);

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;
      console.log('Logged in:', user);

      navigate('/dashboard');
    } catch (error: any) {
      alert('harap masukan email dan kata sandi dengan benar!');
    }
  };

  return (
    <main>
      <Header logo={LogoType.Logo2} />
      <div className="w-full max-w-[1295px] h-auto px-[4vw] sm:px-[349px] pt-[4vh] sm:pt-[61px] pb-[4vh] sm:pb-[101px] flex justify-center items-center">
        <div className="w-full h-auto bg-white rounded-xl text-center p-5 opacity-80 hover:opacity-100 delay-150 duration-300">
          <div className="text-blue-950 text-3xl font-bold font-['Jaldi']">Login</div>
          <form onSubmit={handleLogin}>
            <div className="w-full max-w-[555px] h-auto max-h-[262px] px-[7px] pt-20 pb-2 flex-col justify-center items-start gap-[13px] inline-flex ">
              <InputField icon={IconType.ProfilIcon} placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
              <InputField icon={IconType.PasswordIcon} placeholder="Password" type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </div>
            <Button title="Masuk" type="submit" />
          </form>
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
};

export default Login;
