import React from 'react';
import { UserType } from '../../api/usersApi.types';
import { Checkbox, Paper } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

type Props = {
  user: UserType;
};

export const User = ({ user }: Props) => {
  const onClickOnUser = () => {};

  return (
    <NavLink to={`/team/${user.id}`}>
      <Paper
        elevation={2}
        className="w-[305px] h-[263px] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center gap-5">
          <div className="w-[124px] h-[124px]">
            <img
              src={user.image}
              alt={user.firstName}
              className="border rounded-full overflow-hidden"
            />
          </div>
          <span>{`${user.firstName} ${user.lastName}`}</span>
          <Checkbox
            size="small"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </div>
      </Paper>
    </NavLink>
  );
};
