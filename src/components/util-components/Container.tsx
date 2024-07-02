import React from 'react';

export const Container = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <div
        style={{ maxWidth: 1280 }}
        className="ml-auto mr-auto"
      >
        {children}
      </div>
    </div>
  );
};
