import { Container } from '../../components/util-components/Container';
import { Team } from './Team';
import { TeamHeader } from './TeamHeader';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useFetchUsersQuery } from '../../api/usersApi/usersApiSlice';
import { setTotalPages, setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';
import { SignUpErrorResponseType } from '../../api/authApi';

export const TeamPage = () => {
  const dispatch = useAppDispatch();
  const { fetchUsersParams } = useAppSelector((s) => s.team);

  // запрос пользователей
  const { data, isLoading, isSuccess, isError, error } = useFetchUsersQuery(fetchUsersParams);

  if (isSuccess) {
    dispatch(setUsers(data.data));
    dispatch(setTotalUsersCount(data.total));
    dispatch(setTotalPages(data.total_pages));
  }

  const errorData = error as SignUpErrorResponseType;

  return (
    <>
      <TeamHeader />
      <Container className="pt-12 pb-12 flex">
        <Team
          isLoading={isLoading}
          isError={isError}
          error={errorData}
        />
      </Container>
    </>
  );
};
