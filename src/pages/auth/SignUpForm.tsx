import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../components/util-components/Button';
import {
	ConfirmPasswordFormInput,
	EmailFormInput,
	NameFormInput,
	PasswordFormInput,
} from '../../components/inputs';
import { SignUpQueryBody } from '../../api/authApi';
import { Inputs } from '../../@types/inputs';
import React from 'react';

type Props = {
  isLoading: boolean;
  signUpRequest: (authData: SignUpQueryBody) => void;
};

export const SignUpForm = React.memo(({ isLoading, signUpRequest }: Props) => {
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
    <form>
      <div className="flex flex-col gap-4">
        <NameFormInput
          id={'name'}
          placeholder="Артур"
          register={register}
          errors={errors}
          label="Имя"
        />
        <EmailFormInput
          id={'email'}
          placeholder="example@mail.ru"
          register={register}
          errors={errors}
          label="Электронная почта"
        />
        <PasswordFormInput
          placeholder="*****"
          id="password"
          register={register}
          errors={errors}
          label="Пароль"
        />
        <ConfirmPasswordFormInput
          label="Подтвердите пароль"
          id="confirmPassword"
          register={register}
          errors={errors}
          watch={watch}
          placeholder="*****"
        />
      </div>

      <Button
        className="mb-4 mt-4 h-12 w-full border-0 active:scale-95 bg-violet"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
});
