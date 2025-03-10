import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { InputErrorMessage } from './InputErrorMessage';
import { ConfirmPasswordFormInputType } from '../../@types/inputs';

export const ConfirmPasswordFormInput = React.memo(({
  id,
  label,
  placeholder,
  register,
  errors,
  watch,
  className,
  ...props
}: ConfirmPasswordFormInputType) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((v) => !v);
  };

  return (
    <div
      className="flex flex-col gap-2"
      {...props}
    >
      <label htmlFor={id}>{label}</label>
      <FormControl
        variant="outlined"
        fullWidth
        size="small"
      >
        <InputLabel htmlFor={id}>{placeholder}</InputLabel>

        <div className="flex flex-col gap-1">
          <OutlinedInput
            {...register(id, {
              required: 'Ошибка',
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Пароли не совпадают';
                }
              },
            })}
            id={id}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                </IconButton>
              </InputAdornment>
            }
            label={placeholder}
            error={!!errors[`${id}`]}
            className={`bg-[#f8f8f8] ${className}`}
          />
          <InputErrorMessage errorMessage={errors[`${id}`]?.message} />
        </div>
      </FormControl>
    </div>
  );
});
