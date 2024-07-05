import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Button } from '../util-components/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  navigateTo: string;
  callback?: () => { payload: undefined; type: string };
  svgIcon: string;
};

export const HeaderButton = React.memo(function HeaderButton({
  name,
  navigateTo,
  callback,
  svgIcon,
}: Props) {
  const dispatch = useAppDispatch();
  const { isMobile } = useAppSelector((s) => s.screen);

  return (
    <Link
      to={navigateTo}
      className="no-underline"
    >
      <Button
        onClick={() => dispatch(callback!())}
        className="flex max-w-[81px] border border-white pt-2 pb-2 pl-4 pr-4 capitalize bg-violet max-sm:p-3 max-sm:border-0"
      >
        {isMobile ? (
          <img
            src={svgIcon}
            alt=""
          />
        ) : (
          name
        )}
      </Button>
    </Link>
  );
});
