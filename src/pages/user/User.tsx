import React from 'react';
import { useAppSelector } from '../../redux/store';
import { UserDescription, UserHeader, UserPhoneAndEmail } from './components';

type Props = {
  isLoading: boolean;
};

export const User = React.memo(function User({ isLoading }: Props) {
  const { user } = useAppSelector((s) => s.user);

  return (
    <div>
      <UserHeader
        isLoading={isLoading}
        user={user}
      />

      <div className="flex md:gap-32 pt-[49px] max-sm:p-4 max-sm:flex-col gap-6">
        <UserPhoneAndEmail email={user?.email} />
        <UserDescription />
      </div>
    </div>
  );
});
