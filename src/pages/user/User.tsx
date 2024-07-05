import { useAppSelector } from '../../redux/store';
import { UserDescription } from './UserDescription';
import { UserPhoneAndEmail } from './UserPhoneAndEmail';
import { UserHeader } from './UserHeader';

export function User() {
  const { user } = useAppSelector((s) => s.user);

  return (
    <div>
      <UserHeader user={user} />

      <div className="flex gap-32 pl-[188px] pr-[188px] pt-[49px]">
        <UserDescription />
        <UserPhoneAndEmail email={user?.email} />
      </div>
    </div>
  );
}
