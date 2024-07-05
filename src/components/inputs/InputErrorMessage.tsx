import { InputErrorMessageType } from '../../@types/inputs';

export const InputErrorMessage = ({ errorMessage, className, ...props }: InputErrorMessageType) => {
  return (
    <span
      {...props}
      className={`text-[12px] text-red tracking-wide ${className}`}
    >
      {errorMessage}
    </span>
  );
};
