import { MouseEvent, useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { followUser, unfollowUser } from '../../redux/reducers/userSlice';

type UserCheckBoxType = {
  userId: number;
};

export function UserCheckBox({ userId }: UserCheckBoxType) {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const { followedUsers } = useAppSelector((s) => s.user);

  useEffect(() => {
    if (followedUsers.includes(userId)) {
      setIsChecked(true);
    }
  }, []);

  const onFollowUser = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(followUser(userId));
  };

  const onUnfollowUser = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(unfollowUser(userId));
  };

  const onCheckboxValueChange = () => {
    setIsChecked((v) => !v);
  };

  return (
    <Checkbox
      size="small"
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      onClick={!isChecked ? onFollowUser : onUnfollowUser}
      checked={isChecked}
      onChange={onCheckboxValueChange}
      className={`bg-white rounded-[4px] text-black ${isChecked && 'text-violet'}`}
    />
  );
}
