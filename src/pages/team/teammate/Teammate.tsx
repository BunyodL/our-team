import { UserType } from '../../../api/usersApi';
import { Paper } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { TeammateCheckBox } from './TeammateCheckBox';
import { AllRoutes } from '../../../@types/routes';
import React from 'react';

type Props = {
  teammate: UserType;
};

export const Teammate = React.memo(({ teammate }: Props) => {
  return (
    <NavLink
      to={AllRoutes.team + `/${teammate.id}`}
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
                src={teammate.avatar}
                alt={teammate.first_name}
                className="border rounded-full overflow-hidden w-[124px] h-[124px] object-cover"
              />
            </div>

            <span>{`${teammate.first_name} ${teammate.last_name}`}</span>
          </div>
          <div className="flex flex-col items-end w-full">
            <TeammateCheckBox teammateId={teammate.id} />
          </div>
        </div>
      </Paper>
    </NavLink>
  );
});
