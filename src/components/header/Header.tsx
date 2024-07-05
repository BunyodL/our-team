import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export const Header = React.memo(({ children, className, ...props }: Props) => {
  return (
    <header {...props}>
      <div
        style={{ maxWidth: 1616 }}
        className={'ml-auto mr-auto bg-violet ' + className}
      >
        {children}
      </div>
    </header>
  );
});
