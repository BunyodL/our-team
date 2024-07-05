import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TeamPage } from './pages/team/TeamPage';
import { User } from './pages/user/User';
import { useAppSelector } from './redux/store';
import { useEffect } from 'react';
import { AllRoutes } from './@types/routes';
import { useRestoreToken } from './hooks';
import { SignUpContainer } from './pages/auth/SignUpContainer';

export function App() {
  const { isAuth } = useAppSelector((s) => s.auth);

  const restoreToken = useRestoreToken();

  useEffect(() => {
    restoreToken();
  }, [isAuth, restoreToken]);

  return (
    <>
      <Routes>
        <Route
          path={AllRoutes.home}
          element={<TeamPage />}
        />
        <Route
          path={AllRoutes.team}
          element={<TeamPage />}
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
