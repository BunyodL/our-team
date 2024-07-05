import { TextField } from '@mui/material';
import { InputErrorMessage } from './InputErrorMessage';
import { InputType } from '../../@types/inputs';
import React from 'react';

export const NameFormInput = React.memo(
  ({ id, placeholder, label, register, errors, className, ...props }: InputType) => {
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
              pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                message: 'Можно использовать только буквы. Проверьте наличие пробелов',
              },
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
  }
);
