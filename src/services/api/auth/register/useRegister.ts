import { useMutation } from 'react-query';
import { PayloadRegister } from './register.model';
import { registerApi } from './register';
import { useNavigate } from 'react-router-dom';

export const useRegisterService = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: 'registerKey',
    mutationFn: async (payload: PayloadRegister) => {
      return registerApi.register(payload);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.user) {
        navigate('/Login');
      }
    },
  });
};
