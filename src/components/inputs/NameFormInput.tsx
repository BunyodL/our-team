import { TextField } from '@mui/material';
import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputErrorMessage } from './InputErrorMessage';
import { Inputs } from '../../pages/auth/SignUp';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: 'name' | 'email' | 'password' | 'confirmPassword';
  placeholder: string;
  label: string;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  className?: string;
};

export const NameFormInput = ({
  id,
  placeholder,
  label,
  register,
  errors,
  className,
  ...props
}: Props) => {
  return (
    <div
      className="flex flex-col gap-2"
      {...props}
    >
      <label htmlFor={id}>{label}</label>
      <div className="flex flex-col gap-1">
        <TextField
          {...register(id, {
            required: 'Ошибка',
          })}
          id={id}
          size="small"
          label={placeholder}
          variant="outlined"
          fullWidth
          error={!!errors[`${id}`]}
          className={`bg-[#f8f8f8] border-0 outline-none ${className}`}
        />
        <InputErrorMessage errorMessage={errors[`${id}`]?.message} />
      </div>
    </div>
  );
};
