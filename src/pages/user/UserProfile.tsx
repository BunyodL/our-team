import React from 'react';
import { UpdateUserPhoto } from './UpdateUserPhoto';
import { UserType } from '../../api/usersApi';
import { loader } from '../../assets';
import { setUser } from '../../redux/reducers/userSlice';
import { useFetchUserByIdQuery } from '../../api/usersApi/usersApiSlice';
import { useAppDispatch } from '../../redux/store';
import { useParams } from 'react-router-dom';

type Props = {
  user: UserType | null;
};

export const UserProfile = React.memo(({ user }: Props) => {
  const dispatch = useAppDispatch();
  const { teammateId } = useParams();

  if (+teammateId! >= 13) {
    return <h2>Запрашиваемый пользователь не найден</h2>;
  }

  const { data, isLoading, isSuccess } = useFetchUserByIdQuery(teammateId!);

  if (isSuccess) {
    dispatch(setUser(data.data));
  }

  return (
    <div className="flex gap-3 items-center absolute top-[39px] left-[188px]">
      <div className="w-[187px] h-[187px]">
        <img
          src={isLoading ? loader : user?.avatar}
          alt={user?.first_name}
          className="border rounded-full overflow-hidden w-[187px] h-[187px]"
        />
      </div>
      <div className="flex flex-col text-white">
        <span className="capitalize text-[64px]">{`${user?.first_name} ${user?.last_name}`}</span>
        <span className="capitalize text-[32px] mb-4">{'Partner'}</span>
        <UpdateUserPhoto userId={user?.id} />
      </div>
    </div>
  );
})
