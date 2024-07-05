import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { signUp } from '../redux/reducers/authSlice';

export const useRestoreToken = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return () => {
    if (!localStorage.getItem('token')) {
      return navigate('signup');
    }
    if (localStorage.getItem('token')) {
      dispatch(signUp());
    }
  };
};
