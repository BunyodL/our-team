import React from 'react';
import { Header, HeaderButton } from '../../components/header';
import { AllRoutes } from '../../@types/routes';
import { signOut } from '../../redux/reducers/authSlice';

export const TeamHeader = React.memo(() => {
  return (
    <Header>
      <div className="flex justify-end pt-8 pl-20 pr-20">
        <HeaderButton
          name="выход"
          navigateTo={AllRoutes.singUp}
          callback={signOut}
        />
      </div>

      <div className="flex justify-center w-full absolute top-16">
        <div className="text-white w-[846px] text-center flex flex-col items-center">
          <h1 className="text-[64px] ">Наша команда</h1>
          <p className="text-[20px]">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
          </p>
        </div>
      </div>
    </Header>
  );
});
