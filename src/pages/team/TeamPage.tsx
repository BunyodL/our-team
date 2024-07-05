import { useEffect } from 'react';
import { Container } from '../../components/util-components/Container';
import { useSetFollowedUsers } from '../../hooks';
import { Team } from './Team';
import { TeamHeader } from './TeamHeader';

export const TeamPage = () => {
  const setFollowedUsers = useSetFollowedUsers();

  useEffect(() => {
    setFollowedUsers();
  }, [setFollowedUsers]);

  return (
    <>
      <TeamHeader />
      <Container className="pt-12 pb-12 flex">
        <Team />
      </Container>
    </>
  );
};
