import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { signUp } from '../redux/reducers/authSlice';
import { LocalStorage } from '../@types/localStorage';

export const useRestoreToken = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return () => {
    if (!localStorage.getItem(LocalStorage.token)) {
      return navigate('signup');
    }
    if (localStorage.getItem(LocalStorage.token)) {
      dispatch(signUp());
    }
  };
};
