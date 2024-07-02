type Props = {
  errorMessage?: string;
  className?: string;
};

export const InputErrorMessage = ({ errorMessage, className, ...props }: Props) => {
  return (
    <span
      {...props}
      className={`text-[12px] text-[#d32f2f] tracking-wide ${className}`}
    >
      {errorMessage}
    </span>
  );
};
