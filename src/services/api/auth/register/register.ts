import { auth } from '@/configs';
import { PayloadRegister } from './register.model';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const register = async (payload: PayloadRegister) => {
  const { email, password } = payload;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const registerApi = { register };
