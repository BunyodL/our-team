import { UserType } from '../../api/usersApi.types';
import { Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { UserCheckBox } from './UserCheckBox';

type Props = {
  user: UserType;
};

export const User = ({ user }: Props) => {
  return (
    <NavLink
      to={`/team/${user.id}`}
      className="no-underline text-black"
    >
      <Paper
        elevation={2}
        className="w-[305px] h-[263px] flex flex-col justify-end items-center p-5 active:border-black"
      >
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[124px] h-[124px]">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="border rounded-full overflow-hidden"
              />
            </div>

            <span>{`${user.first_name} ${user.last_name}`}</span>
          </div>
          <div className="flex flex-col items-end w-full">
            <UserCheckBox userId={user.id} />
          </div>
        </div>
      </Paper>
    </NavLink>
  );
};
