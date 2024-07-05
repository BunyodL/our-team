import React from 'react';
import { Button } from './Button';
import { setPageParam } from '../../redux/reducers/teamSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

type Props = {
  totalPages: number;
};

export const Paginator = React.memo(({ totalPages }: Props) => {
  const dispatch = useAppDispatch();
  const {
    fetchUsersParams: { page },
  } = useAppSelector((s) => s.team);

  return (
    <>
      {new Array(totalPages).fill(1).map((_, n: number) => (
        <Button
          className={`pt-2 pb-2 pl-3 pr-3 rounded-full  ${
            page !== n + 1 ? 'bg-[#fff]' : 'bg-violet'
          }`}
          onClick={() => dispatch(setPageParam(n + 1))}
          key={n + 1}
        >
          <span className={`${page !== n + 1 && 'text-black'}`}>{n + 1}</span>
        </Button>
      ))}
    </>
  );
});
