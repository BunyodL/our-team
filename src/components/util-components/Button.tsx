import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={
        'cursor-pointer rounded-[8px] text-white text-[16px] tracking-wide ' +
        className
      }
    >
      {children}
    </button>
  );
};
