import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { setUser } from '../../redux/reducers/userSlice';
import { useFetchUserByIdQuery } from '../../api/usersApi/usersApiSlice';
import { User } from './User';
import { useEffect } from 'react';

export function UserContainer() {
  const dispatch = useAppDispatch();
  const { teammateId } = useParams();

  if (+teammateId! >= 13) {
    return <h2>Запрашиваемый пользователь не найден</h2>;
  }

  const { data, isLoading, isSuccess } = useFetchUserByIdQuery(teammateId!);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data.data));
    }
  }, [isSuccess]);

  return <User isLoading={isLoading} />;
}
