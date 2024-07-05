import React from 'react';

export const Container = React.memo(({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
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
});
