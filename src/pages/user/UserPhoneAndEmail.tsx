import { Button } from '../../components/util-components/Button';
import { mail, phone } from '../../assets';
import React from 'react';

type Props = {
  email?: string;
};

export const UserPhoneAndEmail = React.memo(function UserPhoneAndEmail({ email }: Props) {
  return (
    <div className="flex flex-col gap-6 md:absolute md:left-[947px] max-sm:pt-3">
      <Button className="bg-[#fff] border-0 flex gap-2 w-fit items-center">
        <img
          src={phone}
          alt=""
        />
        <a
          href={`tel:+7 (954) 333-44-55`}
          className="no-underline text-black"
        >
          {'+7 (954) 333-44-55'}
        </a>
      </Button>

      <Button className="bg-[#fff] border-0 flex gap-2 w-fit items-center">
        <img
          src={mail}
          alt=""
        />
        <a
          href={`mailto:${email}`}
          className="no-underline text-black"
        >
          {email}
        </a>
      </Button>
    </div>
  );
})
