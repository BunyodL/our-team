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
    <div className="flex md:gap-3 items-center justify-center md:absolute top-[39px] left-[188px] max-sm:flex-col gap-5">
      <div className="flex gap-4 max-sm:flex-col items-center justify-center relative w-full h-full">
        <div className="w-[187px] h-[187px] max-sm:mt-28">
          <img
            src={isLoading ? loader : user?.avatar}
            alt={user?.first_name}
            className="border rounded-full overflow-hidden w-[187px] h-[187px]"
          />
        </div>

        <div className="flex flex-col max-sm:items-center text-white  max-sm:gap-4">
          <div className="flex flex-col max-sm:items-center max-sm:gap-4 max-sm:absolute top-0">
            <span className="capitalize text-[64px] max-sm:text-[36px]">{`${user?.first_name} ${user?.last_name}`}</span>
            <span className="capitalize text-[32px] mb-4 max-sm:text-[20px]">{'Partner'}</span>
          </div>
          <UpdateUserPhoto userId={user?.id} />
        </div>
      </div>
    </div>
  );
});
