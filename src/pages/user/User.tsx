import { useAppSelector } from '../../redux/store';
import { UserDescription } from './UserDescription';
import { UserPhoneAndEmail } from './UserPhoneAndEmail';
import { UserHeader } from './UserHeader';

export function User() {
  const { user } = useAppSelector((s) => s.user);

  return (
    <div>
      <UserHeader user={user} />

				<div className="flex md:gap-32 pt-[49px] max-sm:p-4 max-sm:flex-col gap-6">
					<UserPhoneAndEmail email={user?.email} />
					<UserDescription />
				</div>
			</div>
  );
}
// pl-[188px] pr-[188px]
