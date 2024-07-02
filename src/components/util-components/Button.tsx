import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={' border border-white' + ' ' + className}
    >
      {children}
    </button>
  );
};
