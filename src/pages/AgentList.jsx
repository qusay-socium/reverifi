import AgentCardsContainer from 'components/agent-list/AgentCardsContainer';
import AgentsListBanner from 'components/agent-list/AgentsListBanner';
import React from 'react';

/**
 * Agent's List page component.
 *
 * @return {JSX.Element}
 */
function AgentList() {
  return (
    <>
      <AgentsListBanner />
      <AgentCardsContainer />
    </>
  );
}

export default AgentList;
