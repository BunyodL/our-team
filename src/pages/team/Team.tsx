import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container } from '../../components/util-components/Container';
import { useFetchUsersQuery } from '../../api/usersApi/usersApiSlice';
import { setTotalPages, setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';
import { User } from './User';
import { signOut } from '../../redux/reducers/authSlice';
import { setFollowedUsers } from '../../redux/reducers/userSlice';
import { Paginator } from '../../components/util-components/Paginator';
import { Header, HeaderButton } from '../../components/header';
import { SignUpErrorResponseType } from '../../api/authApi';

export const Team = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useFetchUsersQuery(page);

  if (isSuccess) {
    dispatch(setUsers(data.data));
    dispatch(setTotalUsersCount(data.total));
    dispatch(setTotalPages(data.total_pages));
  }

  useEffect(() => {
    if (localStorage.getItem('followedUsers')) {
      const followedUsers = localStorage.getItem('followedUsers')!;
      dispatch(setFollowedUsers(JSON.parse(followedUsers)));
    }
  }, []);

  const errorData = error as SignUpErrorResponseType;

  const { users, totalPages } = useAppSelector((state) => state.team);

  return (
    <>
      <Header>
        <div className="flex justify-end pt-8 pl-20 pr-20">
          <HeaderButton
            name="выход"
            navigateTo="/signup"
            callback={signOut}
          />
        </div>

        <div className="flex justify-center w-full absolute top-16">
          <div className="text-white w-[846px] text-center flex flex-col items-center">
            <h1 className="text-[64px] ">Наша команда</h1>
            <p className="text-[20px]">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
              плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
            </p>
          </div>
        </div>
      </Header>
      <Container className="pt-12 pb-12">
        <div className="grid grid-cols-4 gap-5 pb-12">
          {isError && <h2>{errorData.data.error}</h2>}
          {users.map((u) => (
            <User
              user={u}
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
      </Container>
    </>
  );
};
