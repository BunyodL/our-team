import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useFetchUsersQuery } from '../../api/usersApi/usersApiSlice';
import { setTotalPages, setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';
import { Teammate } from './teammate/Teammate';
import { SignUpErrorResponseType } from '../../api/authApi';
import { loader } from '../../assets';
import { Paginator } from '../../components/util-components/Paginator';

export const Team = React.memo(() => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useFetchUsersQuery(page);

  if (isSuccess) {
    dispatch(setUsers(data.data));
    dispatch(setTotalUsersCount(data.total));
    dispatch(setTotalPages(data.total_pages));
  }

  const errorData = error as SignUpErrorResponseType;

  const { users, totalPages } = useAppSelector((state) => state.team);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 pb-12">
        {isError && <h2>{errorData.data.error}</h2>}
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
        <Paginator
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
});
