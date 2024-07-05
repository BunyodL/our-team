import React from 'react';
import { useAppDispatch } from '../../redux/store';
import { Button } from '../util-components/Button';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  navigateTo: string;
  callback?: () => { payload: undefined; type: string };
};

export const HeaderButton = React.memo(function HeaderButton({
  name,
  navigateTo,
  callback,
}: Props) {
  const dispatch = useAppDispatch();

  return (
    <Link to={navigateTo}>
      <Button
        onClick={() => dispatch(callback!())}
        className="w-[81px] border border-white pt-2 pb-2 pl-4 pr-4 capitalize bg-violet"
      >
        {name}
      </Button>
    </Link>
  );
});
