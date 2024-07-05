import React from 'react';
import { Paper } from '@mui/material';
import { SignUpForm } from './SignUpForm';
import { SignUpQueryBody } from '../../api/authApi';

type Props = {
  isLoading: boolean;
  signUpRequest: (authData: SignUpQueryBody) => void;
};

export const SignUp = React.memo(({ isLoading, signUpRequest }: Props) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Paper
        elevation={3}
        className="flex flex-col w-[500px] pl-4 pr-4"
      >
        <h2 className="text-[20px] leading-6 pt-4 pb-4">Регистрация</h2>
        <SignUpForm
          signUpRequest={signUpRequest}
          isLoading={isLoading}
        />
      </Paper>
    </div>
  );
});
