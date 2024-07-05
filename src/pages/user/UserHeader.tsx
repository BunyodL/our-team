import React from 'react';
import { Header, HeaderButton } from '../../components/header';
import { AllRoutes } from '../../@types/routes';
import { signOut } from '../../redux/reducers/authSlice';
import { UserType } from '../../api/usersApi';
import { UserProfile } from './UserProfile';
import { chevronLeft, exit } from '../../assets';

type Props = {
  user: UserType | null;
};

export const UserHeader = React.memo(function UserHeader({ user }: Props) {
  return (
    <Header className="min-h-[265px] max-sm:min-h-[420px]">
      <div className="flex justify-between pt-8 pl-20 pr-20 max-sm:pt-3 max-sm:pl-4 max-sm:pr-4">
        <HeaderButton
          name="назад"
          navigateTo={AllRoutes.team}
          svgIcon={chevronLeft}
        />
        <HeaderButton
          name="выход"
          navigateTo={AllRoutes.singUp}
          callback={signOut}
          svgIcon={exit}
        />
      </div>

      <UserProfile user={user} />
    </Header>
  );
});
