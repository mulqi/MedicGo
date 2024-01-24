import { IconType } from '@/component/core/icons';

export const inputFields = {
  email: { icon: IconType.EmailIcon, placeholder: 'email' },
  username: { icon: IconType.LogoIcon, placeholder: 'username' },
};

export const passwordFields = {
  password: { icon: IconType.PasswordIcon, placeholder: 'password' },
  confirmation_password: { icon: IconType.PasswordIcon, placeholder: 'ulangi password' },
};

// const inputFields = [
//   { IconType: IconType.LogoIcon, placeholder: 'username', name: 'username' },
//   { IconType: IconType.EmailIcon, placeholder: 'email', name: 'email' },
// ];
// const passwordFields = [
//   { IconType: IconType.PasswordIcon, placeholder: 'password', name: 'password' },
//   { IconType: IconType.PasswordIcon, placeholder: 'ulangi password', name: 'confirmation_password' },
// ];
