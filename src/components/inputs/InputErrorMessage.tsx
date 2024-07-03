type Props = {
  errorMessage?: string;
  className?: string;
};

export const InputErrorMessage = ({ errorMessage, className, ...props }: Props) => {
  return (
    <span
      {...props}
      className={`text-[12px] text-red tracking-wide ${className}`}
    >
      {errorMessage}
    </span>
  );
};
