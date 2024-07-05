import { memo, useEffect, useState } from 'react';

type Props = {
  name: string;
  svgIcon: string;
};

export const DefineScreenType = memo(({ name, svgIcon }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const defineScreenType = () => setIsMobile(window.innerWidth <= 630);

  useEffect(() => {
    window.addEventListener('load', defineScreenType);
    window.addEventListener('resize', defineScreenType);
    window.addEventListener('click', defineScreenType);
    return () => {
      window.removeEventListener('load', defineScreenType);
      window.removeEventListener('resize', defineScreenType);
      window.addEventListener('click', defineScreenType);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <img
          src={svgIcon}
          alt=""
        />
      ) : (
        name
      )}
    </>
  );
});
