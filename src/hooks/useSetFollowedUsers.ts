import { LocalStorage } from '../@types/localStorage';
import { setFollowedUsers } from '../redux/reducers/userSlice';
import { useAppDispatch } from '../redux/store';

export const useSetFollowedUsers = () => {
  const dispatch = useAppDispatch();

  return () => {
    if (localStorage.getItem(LocalStorage.followedUsers)) {
      const followedUsers = localStorage.getItem(LocalStorage.followedUsers)!;
      dispatch(setFollowedUsers(JSON.parse(followedUsers)));
    }
  };
};
