import { useEffect } from 'react';
import { useSetFollowedUsers } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setPageParam, setPerPageParam } from '../../redux/reducers/teamSlice';
import { TeamPage } from './TeamPage';

export const TeamPageContainer = () => {
  const dispatch = useAppDispatch();

  // определяем пользователей, на которых мы подписаны
  const setFollowedUsers = useSetFollowedUsers();

  useEffect(() => {
    setFollowedUsers();
  }, [setFollowedUsers]);

  // в зависимости от расширения экрана устанавливаем количество запрашиваемых пользователей на одну страницу
  const { isMobile } = useAppSelector((s) => s.screen);

  if (isMobile) {
    dispatch(setPerPageParam(4));
  } else {
    // диспатчим setPageParam для избежания бага, когда мы в мобильном
    // расширении находимся на 3 странице и меняем расширение экрана,
    // так как в десктопном расширении у нас только 2 страницы
    dispatch(setPageParam(1));

    dispatch(setPerPageParam(8));
  }

  return <TeamPage />;
};
