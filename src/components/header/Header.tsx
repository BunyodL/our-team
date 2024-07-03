import React from 'react';

export const Header = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header {...props}>
      <div
        style={{ maxWidth: 1616 }}
        className="ml-auto mr-auto h-[265px] bg-[#512689]"
      >
        {children}
      </div>
    </header>
  );
};
