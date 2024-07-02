import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Team } from './pages/team/Team';
import { Teammate } from './pages/teammate/Teammate';
import { SignUp } from './pages/auth/SignUp';
import { useAppDispatch, useAppSelector } from './redux/store';
import { useEffect } from 'react';
import { signUp } from './redux/reducers/authSlice';

export function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((s) => s.auth);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return navigate('signup');
    }
    if (localStorage.getItem('token')) {
      dispatch(signUp());
    }
  }, [isAuth, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={<Team />}
        />
        <Route
          path={'/team'}
          element={<Team />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/team/:teammateId"
          element={<Teammate />}
        />
      </Routes>
    </>
  );
}
