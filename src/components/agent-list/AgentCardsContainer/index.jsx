import AgentCard from 'components/agent-list/AgentCard';
import React, { useEffect, useState } from 'react';
import getAgents from 'services/fake-agents-service';
import {
  CardsContainer,
  Container,
  Wrapper,
} from './agent-cards-container.styles';

/**
 * Component holding the cards of agents, it maps agents to their cards.
 *
 * @return {JSX.Element} Container holding agent cards.
 */
function AgentCardsContainer() {
  const [agents, setAgents] = useState([]);

  /**
   * Fetches agents data from API and sets it to agents state.
   */
  useEffect(() => {
    const fetchAgents = async () => {
      const data = await getAgents();
      setAgents(data);
    };
    fetchAgents();
  });

  return (
    <Container>
      <CardsContainer>
        {agents.map((agent) => (
          <Wrapper key={agent.id}>
            <AgentCard
              address={agent.address}
              agentImg={agent.agentImg}
              agentName={agent.agentName}
              companyName={agent.companyName}
              email={agent.email}
              phoneNumber={agent.phoneNumber}
            />
          </Wrapper>
        ))}
      </CardsContainer>
    </Container>
  );
}

export default AgentCardsContainer;
