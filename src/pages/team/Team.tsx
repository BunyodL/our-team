import React from 'react';
import { useAppSelector } from '../../redux/store';
import { Teammate } from './teammate/Teammate';
import { SignUpErrorResponseType } from '../../api/authApi';
import { loader } from '../../assets';
import { Paginator } from '../../components/util-components/Paginator';

type Props = {
  isLoading: boolean;
  isError: boolean;
  error: SignUpErrorResponseType;
};

export const Team = React.memo(({ error, isError, isLoading }: Props) => {
  const { users, totalPages } = useAppSelector((state) => state.team);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 pb-12 max-sm:grid-cols-1">
        {isError && <h2>{error.data.error}</h2>}
        {isLoading && (
          <img
            src={loader}
            alt=""
          />
        )}
        {users.map((u) => (
          <Teammate
            teammate={u}
            key={u.id}
          />
        ))}
      </div>

      <div className="w-full flex gap-6 justify-center">
        <Paginator totalPages={totalPages} />
      </div>
    </>
  );
});
