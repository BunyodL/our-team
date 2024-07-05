import React from 'react';
import { Button } from './Button';

type Props = {
  totalPages: number;
  setPage: (p: number) => void;
  page: number;
};

export const Paginator = React.memo(({ totalPages, setPage, page }: Props) => {
  return (
    <>
      {new Array(totalPages).fill(1).map((_, n: number) => (
        <Button
          className={`pt-2 pb-2 pl-3 pr-3 rounded-full  ${
            page !== n + 1 ? 'bg-[#fff]' : 'bg-violet'
          }`}
          onClick={() => setPage(n + 1)}
          key={n + 1}
        >
          <span className={`${page !== n + 1 && 'text-black'}`}>{n + 1}</span>
        </Button>
      ))}
    </>
  );
});
