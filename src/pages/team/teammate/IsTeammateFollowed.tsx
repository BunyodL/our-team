import { useEffect } from 'react';
import { useAppSelector } from '../../../redux/store';

type IsTeammateFollowedType = {
  teammateId: number;
  setIsChecked: (b: boolean) => void;
};

export const IsTeammateFollowed = ({ teammateId, setIsChecked }: IsTeammateFollowedType) => {
  const { followedUsers } = useAppSelector((s) => s.user);

  useEffect(() => {
    if (followedUsers.includes(teammateId)) {
      setIsChecked(true);
    }
  }, []);

  return null;
};
