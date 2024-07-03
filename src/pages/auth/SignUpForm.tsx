import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { Inputs } from './SignUp';
import { Button } from '../../components/util-components/Button';
import { ConfirmPasswordFormInput, EmailFormInput, NameFormInput, PasswordFormInput } from '../../components/inputs';

type Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmit: (formData: Inputs) => void;
  isLoading: boolean;
};

export function SignUpForm({ register, errors, watch, handleSubmit, onSubmit, isLoading }: Props) {
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
        className="mb-4 mt-4 h-12 w-full border-0 active:scale-95"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
}
