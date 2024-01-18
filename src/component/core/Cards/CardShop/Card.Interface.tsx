import { InputHTMLAttributes } from 'react';

export interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
  logo: string;
  title: string;
}
