import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Container } from '../../components/util-components/Container';
import { Header } from '../../components/Header';
import { useFetchUsersQuery } from '../../api/usersApiSlice';
import { setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';
import { User } from './User';
import { Button } from '../../components/util-components/Button';
import { signOut } from '../../redux/reducers/authSlice';
import { ErrorType } from '../auth/SignUp';

export const Team = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useFetchUsersQuery(page);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUsers(data.users));
      dispatch(setTotalUsersCount(data.total));
    }
  }, []);

  const errorData = error as ErrorType;

  const { users } = useAppSelector((state) => state.team);

  console.log(users);

  return (
    <>
      <Header>
        <Button onClick={() => dispatch(signOut())}>Выход</Button>
        <h2>Наша команда</h2>
        <p>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
          плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
        </p>
      </Header>
      <Container>
        <div className="grid grid-cols-4 gap-4">
          {isError && <h2>{errorData.data.error}</h2>}
          {users.map((u) => (
            <User
              user={u}
              key={u.id}
            />
          ))}
        </div>
      </Container>
    </>
  );
};
