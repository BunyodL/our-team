import { Route, Routes } from 'react-router-dom';
import './App.css';
import { User } from './pages/user/User';
import { useAppSelector } from './redux/store';
import { useEffect } from 'react';
import { AllRoutes } from './@types/routes';
import { useDefineScreenType, useRestoreToken } from './hooks';
import { SignUpContainer } from './pages/auth/SignUpContainer';
import { TeamPageContainer } from './pages/team/TeamPageContainer';

export function App() {
  const { isAuth } = useAppSelector((s) => s.auth);

  // устанавливаем значение расширения экрана
  const defineScreenType = useDefineScreenType();
  useEffect(() => {
    defineScreenType();
  }, []);

  // проверяем себя на авторизованность
  const restoreToken = useRestoreToken();
  useEffect(() => {
    restoreToken();
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route
          path={AllRoutes.home}
          element={<TeamPageContainer />}
        />
        <Route
          path={AllRoutes.team}
          element={<TeamPageContainer />}
        />
        <Route
          path={AllRoutes.singUp}
          element={<SignUpContainer />}
        />
        <Route
          path={AllRoutes.team + '/:teammateId'}
          element={<User />}
        />
      </Routes>
    </>
  );
}
