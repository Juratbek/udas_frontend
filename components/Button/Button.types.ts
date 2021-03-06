import { ButtonHTMLAttributes } from 'react';

type TButtonColor = 'dark' | 'outline-dark' | 'light';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: TButtonColor;
}
