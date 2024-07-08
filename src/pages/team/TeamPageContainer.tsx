import { useEffect } from 'react';
import { useSetFetchUsersParams, useSetFollowedUsers } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setTotalPages, setTotalUsersCount, setUsers } from '../../redux/reducers/teamSlice';
import { TeamPage } from './TeamPage';
import { useFetchUsersQuery } from '../../api/usersApi/usersApiSlice';
import { SignUpErrorResponseType } from '../../api/authApi';

export const TeamPageContainer = () => {
  // определяем пользователей, на которых мы подписаны
  const setFollowedUsers = useSetFollowedUsers();

  useEffect(() => {
    setFollowedUsers();
  }, [setFollowedUsers]);

  // в зависимости от расширения экрана устанавливаем количество запрашиваемых пользователей на одну страницу
  const { isMobile } = useAppSelector((s) => s.screen);
  const { setFetchUsersParams } = useSetFetchUsersParams();

  useEffect(() => {
    setFetchUsersParams();
  }, [isMobile]);

  return (
    <>
      {/* <SetFollowedUsers /> */}
      {/* <SetFetchUsersParams /> */}
      <TeamPage
        isLoading={false}
        isError={false}
        // error={errorData}
      />
    </>
  );
};
