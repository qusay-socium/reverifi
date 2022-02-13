import AgentCard from 'components/agent-list/AgentCard';
import useEffectOnce from 'hooks/use-effect-once';
import useOnScreen from 'hooks/use-on-screen';
import React, { useEffect, useRef, useState } from 'react';
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
  const [nameState, setNameState] = useState('');
  const [locationState, setLocationState] = useState('');
  const [typeState, setTypeState] = useState('agent');

  const hiddenComponentRef = useRef();
  const nextPageTrigger = useOnScreen(hiddenComponentRef);

  /**
   * Fetches agents data from API and sets it to agents state.
   *
   * @param {Number} pg page number
   * @param {String} type user type
   * @param {String} location user location (city or zip code)
   * @param {String} name user name
   *
   */
  const getUsers = async (pg, type = 'agent', location = '', name = '') => {
    const users = await getUsersByType(type, location, name, pg);

    // show users with information
    const filteredUsers = users.filter((user) => user.userInfo !== null);
    setAgents((prev) => [...prev, ...filteredUsers]);
  };

  useEffectOnce(() => getUsers(page));

  /**
   * handle search function
   *
   * @param {Object} event form event object
   */
  const handleSearch = (event) => {
    event.preventDefault();

    const { type, location, name } = event.target;

    setPage(1);
    setAgents([]);
    setNameState(name.value);
    setLocationState(location.value);
    setTypeState(type.value);

    getUsers(1, type.value, location.value, name.value);
  };

  /**
   * Fetches next page agents
   */
  useEffect(() => {
    if (nextPageTrigger) {
      setPage(page + 1);
      getUsers(page + 1, typeState, locationState, nameState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageTrigger, typeState, locationState, nameState]);

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
                email={email}
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
