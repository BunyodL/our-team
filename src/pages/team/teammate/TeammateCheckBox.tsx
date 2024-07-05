import React, { MouseEvent, useState } from 'react';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useAppDispatch } from '../../../redux/store';
import { followUser, unfollowUser } from '../../../redux/reducers/userSlice';
import { IsTeammateFollowed } from './IsTeammateFollowed';

type UserCheckBoxType = {
  teammateId: number;
};

export const TeammateCheckBox = React.memo(({ teammateId }: UserCheckBoxType) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const onFollowUser = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(followUser(teammateId));
  };

  const onUnfollowUser = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    dispatch(unfollowUser(teammateId));
  };

  const onCheckboxValueChange = () => setIsChecked((v) => !v);

  return (
    <>
      <IsTeammateFollowed
        setIsChecked={setIsChecked}
        teammateId={teammateId}
      />
      <Checkbox
        size="small"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onClick={!isChecked ? onFollowUser : onUnfollowUser}
        checked={isChecked}
        onChange={onCheckboxValueChange}
        className={`bg-white rounded-[4px] text-black ${isChecked && 'text-violet'}`}
      />
    </>
  );
});
