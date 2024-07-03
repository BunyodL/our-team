import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/Header';
import { useFetchUserByIdQuery } from '../../api/usersApiSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUser } from '../../redux/reducers/userSlice';
import { signOut } from '../../redux/reducers/authSlice';
import { HeaderButton } from '../../components/header/HeaderButton';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import { Button } from '../../components/util-components/Button';

// не смог найти api, где у пользователей есть описание
// поэтому взял из задания
const desc1 = `Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.`;

const desc2 = `В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно.`;

const desc3 = `Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.`;

export function Teammate() {
  const dispatch = useAppDispatch();
  const { teammateId } = useParams();

  if (+teammateId! >= 209) {
    return <h2>Запрашиваемый пользователь не найден</h2>;
  }

  const { data, isError, isLoading, isSuccess, error } = useFetchUserByIdQuery(teammateId!);

  if (isSuccess) {
    dispatch(setUser(data.data));
  }

  const { user } = useAppSelector((s) => s.user);

  return (
    <div>
      <Header>
        <div className="flex justify-between pt-8 pl-20 pr-20">
          <HeaderButton
            name="назад"
            navigateTo="/team"
          />
          <HeaderButton
            name="выход"
            navigateTo="/signup"
            callback={signOut}
          />
        </div>

        <div className="flex gap-3 items-center absolute top-[39px] left-[188px]">
          <div className="w-[187px] h-[187px]">
            <img
              src={user?.avatar}
              alt={user?.first_name}
              className="border rounded-full overflow-hidden w-[187px] h-[187px]"
            />
          </div>
          <div className="flex flex-col text-white">
            <span className="capitalize text-[64px]">{`${user?.first_name} ${user?.last_name}`}</span>
            <span className="capitalize text-[32px]">{'Partner'}</span>
          </div>
        </div>
      </Header>

      <div className="flex gap-32 pl-[188px] pr-[188px] pt-[49px]">
        <div className="w-[630px] text-justify text-[16px] text-black">
          <div className="pb-4">{desc1}</div>
          <div className="pb-4">{desc2}</div>
          <div className="pb-4">{desc3}</div>
        </div>

        <div className="flex flex-col gap-6">
          <Button className="bg-[#fff] border-0 flex gap-2 w-fit">
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

          <Button className="bg-[#fff] border-0 flex gap-2 w-fit">
            <img
              src={mail}
              alt=""
            />
            <a
              href={`mailto:${user?.email}`}
              className="no-underline text-black"
            >
              {user?.email}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
