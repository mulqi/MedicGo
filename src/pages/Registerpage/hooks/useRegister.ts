import { useRegisterService } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('username tidak boleh kosong'),
  email: yup.string().email('Format Email Tidak valid').required('username tidak boleh kosong'),
  password: yup.string().min(8, 'Password kurang dari 8').required(),
});

export const useRegister = () => {
  const { mutate } = useRegisterService();
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, formState, register } = form;

  const onSubmit = (data: { email: string; password: string; username: string }) => {
    mutate({ ...data }, { onError: (err) => console.log(err) });
  };

  const onError = (err: any) => console.log(err);

  return {
    handleSubmit,
    formState,
    onSubmit,
    onError,
    register,
  };
};
