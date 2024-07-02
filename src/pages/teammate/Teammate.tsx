import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from '../../components/util-components/Button';
import { useFetchUserByIdQuery } from '../../api/usersApiSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setUser } from '../../redux/reducers/userSlice';
import { Container } from '../../components/util-components/Container';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../redux/reducers/authSlice';

// не смог найти api, где у пользователей есть описание
// поэтому взял из задания
const desc1 = `Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.`;

const desc2 = `В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно.`;

const desc3 = `Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов`;

export function Teammate() {
  const dispatch = useAppDispatch();
  const { teammateId } = useParams();

  const { data, isError, isLoading, isSuccess, error } = useFetchUserByIdQuery(teammateId);

  if (isSuccess) {
    dispatch(setUser(data));
  }

  const { user } = useAppSelector((s) => s.user);

  return (
    <div>
      <Header>
        <NavLink to={'/team'}>
          <Button>Назад</Button>
        </NavLink>
        <Button onClick={() => dispatch(signOut())}>Выход</Button>
        <div className="flex">
          <div className="w-[187px] h-[187px]">
            <img
              src={user?.image}
              alt={user?.firstName}
            />
          </div>
          <div className="flex flex-col">
            <span>{`${user?.firstName} ${user?.lastName}`}</span>
            <span>{user?.role}</span>
          </div>
        </div>
      </Header>
      <Container>
        <div className="flex w-full justify-between">
          <div className="w-[65%] text-justify">
            <div className="pt-2 pb-2">{desc1}</div>
            <div className="pt-2 pb-2">{desc2}</div>
            <div className="pt-2 pb-2">{desc3}</div>
          </div>
          <div className="w-[30%]  flex flex-col">
            <a href={`tel:${user?.phone}`}>{user?.phone}</a>
            <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
