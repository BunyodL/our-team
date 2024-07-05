import React from 'react';
import { Header, HeaderButton } from '../../components/header';
import { AllRoutes } from '../../@types/routes';
import { signOut } from '../../redux/reducers/authSlice';
import { exit } from '../../assets';


export const TeamHeader = React.memo(() => {
  return (
    <Header className='h-[265px]'>
      <div className="flex justify-end pt-8 pl-20 pr-20 max-sm:pt-3 max-sm:pl-4 max-sm:pr-4">
        <HeaderButton
          name="выход"
          navigateTo={AllRoutes.singUp}
          callback={signOut}
					svgIcon={exit}
        />
      </div>

      <div className="flex justify-center w-full absolute top-16">
        <div className="text-white max-w-[846px] text-center flex flex-col items-center ml-4 mr-4">
          <h1 className="text-[64px] max-sm:text-[36px]">Наша команда</h1>
          <p className="text-[20px] max-sm:text-[16px]">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
          </p>
        </div>
      </div>
    </Header>
  );
});
