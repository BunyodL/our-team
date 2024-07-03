import { useForm, SubmitHandler } from 'react-hook-form';
import { Paper } from '@mui/material';
import { useSignUpRequestMutation } from '../../api/authApiSlice';
import { useAppDispatch } from '../../redux/store';
import { setError, signUp } from '../../redux/reducers/authSlice';
import { SignUpForm } from './SignUpForm';
import { useNavigate } from 'react-router-dom';
import { SignUpErrorResponseType } from '../../api/authApi.types';

export type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignUp = () => {
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

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // функция запроса на регистрацию
    signUpRequest({
      // подставлены хардкодом левые данные из API, так как не смог
      // найти Fake API, где можно сделать запрос на регистрацию
      // во всех таких API запрос на регистрацию доступен только
      // имеющимся пользователям в каждом конкретном API
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Paper
        elevation={3}
        className="flex flex-col w-[500px] pl-4 pr-4"
      >
        <h2 className="text-[20px] leading-6 pt-4 pb-4">Регистрация</h2>
        <SignUpForm
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          watch={watch}
          isLoading={isLoading}
        />
      </Paper>
    </div>
  );
};
