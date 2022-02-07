import AgentCard from 'components/agent-list/AgentCard';
import useEffectOnce from 'hooks/use-effect-once';
import useOnScreen from 'hooks/use-on-screen';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getUsersByType } from 'services/user';
import DesktopFilterSection from '../DesktopFilterSection';
import MobileFilterSection from '../MobileFilterSection';
import ResultNotFound from '../ResultNotFound';
import {
  BannerContainer,
  CardsContainer,
  Container,
  Heading,
  HiddenComponent,
  Wrapper,
} from './agent-cards-container.styles';

/**
 * Component holding the cards of agents, it maps agents to their cards.
 *
 * @return {JSX.Element} Container holding agent cards.
 */
function AgentCardsContainer() {
  const [agents, setAgents] = useState([]);
  const [page, setPage] = useState(1);
  const hiddenComponentRef = useRef();
  const nextPageTrigger = useOnScreen(hiddenComponentRef);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  /**
   * Fetches agents data from API and sets it to agents state.
   *
   * @param {Number} pg page number
   */
  const getUsers = async (pg) => {
    const type = searchParams.get('type') || 'agent';
    const location = searchParams.get('location') || '';
    const name = searchParams.get('name') || '';

    const users = await getUsersByType(type, location, name, pg);
    setAgents((prev) => [...prev, ...users]);
  };

  useEffectOnce(() => getUsers(page));

  /**
   * Fetches next page agents
   */
  useEffect(() => {
    if (nextPageTrigger) {
      setPage(page + 1);
      getUsers(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageTrigger]);

  /**
   * handle search function
   *
   * @param {Object} target form target object
   */
  const handleSearch = ({ target }) => {
    const { type, location, name } = target;
    navigate(
      `?type=${type.value}&location=${location.value}&name=${name.value}`
    );
  };

  return (
    <Container>
      <BannerContainer>
        <Heading>Connect with your agent on reverifi</Heading>
        <DesktopFilterSection handleSearch={handleSearch} />
        <MobileFilterSection handleSearch={handleSearch} />
      </BannerContainer>

      <CardsContainer>
        {agents.length ? (
          agents?.map(({ id, name, phone, email, userInfo }) => (
            <Wrapper key={id}>
              <AgentCard
                address={userInfo}
                agentImg={userInfo?.image}
                agentName={name}
                companyName={userInfo?.company?.name}
                email="ddddddddddddddddddddddddddddddddddddddddddd"
                phoneNumber={phone}
              />
            </Wrapper>
          ))
        ) : (
          <ResultNotFound />
        )}

        <HiddenComponent ref={hiddenComponentRef} />
      </CardsContainer>
    </Container>
  );
}

export default AgentCardsContainer;
