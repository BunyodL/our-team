import React from 'react';
import { Header, HeaderButton } from '../../components/header';
import { AllRoutes } from '../../@types/routes';
import { signOut } from '../../redux/reducers/authSlice';
import { UserType } from '../../api/usersApi';
import { UserProfile } from './UserProfile';

type Props = {
  user: UserType | null;
};

export const UserHeader = React.memo(function UserHeader({ user }: Props) {
  return (
    <Header>
      <div className="flex justify-between pt-8 pl-20 pr-20">
        <HeaderButton
          name="назад"
          navigateTo={AllRoutes.team}
        />
        <HeaderButton
          name="выход"
          navigateTo={AllRoutes.singUp}
          callback={signOut}
        />
      </div>

      <UserProfile user={user} />
    </Header>
  );
});
