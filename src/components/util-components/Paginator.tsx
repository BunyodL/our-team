import { Button } from './Button';

type Props = {
  totalPages: number;
  setPage: (p: number) => void;
  page: number;
};

export function Paginator({ totalPages, setPage, page }: Props) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map((n: number) => (
        <Button
          className={`pt-2 pb-2 pl-3 pr-3 rounded-full ${page !== n && 'bg-[#fff]'}`}
          onClick={() => setPage(n)}
          key={n}
        >
          <span className={`${page !== n && 'text-black'}`}>{n}</span>
        </Button>
      ))}
    </>
  );
}
