import { setFollowedUsers } from '../redux/reducers/userSlice';
import { useAppDispatch } from '../redux/store';

export const useSetFollowedUsers = () => {
  const dispatch = useAppDispatch();

  return () => {
    if (localStorage.getItem('followedUsers')) {
      const followedUsers = localStorage.getItem('followedUsers')!;
      dispatch(setFollowedUsers(JSON.parse(followedUsers)));
    }
  };
};
