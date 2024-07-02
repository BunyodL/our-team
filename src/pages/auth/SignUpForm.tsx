import { NameFormInput } from '../../components/inputs/NameFormInput';
import { EmailFormInput } from '../../components/inputs/EmailFormInput';
import { PasswordFormInput } from '../../components/inputs/PasswordFormInput';
import { ConfirmPasswordFormInput } from '../../components/inputs/ConfirmPasswordFormInput';
import { FieldErrors, UseFormHandleSubmit, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { Inputs } from './SignUp';
import { Button } from '../../components/util-components/Button';

type Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  watch: UseFormWatch<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmit: (formData: Inputs) => void;
};

export function SignUpForm({ register, errors, watch, handleSubmit, onSubmit }: Props) {
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
        className="mb-4 mt-4 h-12 w-full rounded-[8px] border-0 bg-[#512689] text-white text-[16px] tracking-wide cursor-pointer active:scale-95"
        onClick={handleSubmit(onSubmit)}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
}
