import { Container } from '../../components/util-components/Container';
import { Team } from './Team';
import { TeamHeader } from './TeamHeader';
import { SignUpErrorResponseType } from '../../api/authApi';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useFetchUsersQuery } from '../../api/usersApi/usersApiSlice';
import { setTotalPages, setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';

export const TeamPage = React.memo(() => {
  const dispatch = useAppDispatch();

  // запрос пользователей
  const { fetchUsersParams } = useAppSelector((s) => s.team);
  // const { isMobile } = useAppSelector((s) => s.screen);

  const { data, isLoading, isSuccess, isError, error } = useFetchUsersQuery(fetchUsersParams);

  // useEffect(() => {
    if (isSuccess) {
      dispatch(setUsers(data.data));
      dispatch(setTotalUsersCount(data.total));
      dispatch(setTotalPages(data.total_pages));
    }
  // }, [isSuccess, dispatch, isMobile]);

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
});
