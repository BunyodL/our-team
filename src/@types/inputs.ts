import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';

export type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type InputType = InputHTMLAttributes<HTMLInputElement> & {
  id: 'name' | 'email' | 'password' | 'confirmPassword';
  label: string;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  className?: string;
};

export type ConfirmPasswordFormInputType = InputType & {
  watch: UseFormWatch<Inputs>;
};

export type InputErrorMessageType = {
  errorMessage?: string;
  className?: string;
};
