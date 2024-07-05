import { useSignUpRequestMutation } from '../../api/authApi/authApiSlice';
import { useAppDispatch } from '../../redux/store';
import { setError, signUp } from '../../redux/reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import { SignUpErrorResponseType } from '../../api/authApi';
import { SignUp } from './SignUp';
import React from 'react';

export const SignUpContainer = React.memo(function SignUpContainer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signUpRequest, { isLoading, isError, isSuccess, data, error }] =
    useSignUpRequestMutation();

  if (isError) {
    const errorData = error as SignUpErrorResponseType;
    dispatch(setError(errorData.data.error));
  }

  if (isSuccess) {
    dispatch(signUp());
    navigate('/');
  }

  return (
    <SignUp
      signUpRequest={signUpRequest}
      isLoading={isLoading}
    />
  );
})
