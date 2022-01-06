import React from 'react';
import AgentInformation from 'components/agent-details/AgentInformation';
import AgentListings from 'components/agent-details/AgentListings';
import AgentRating from 'components/agent-details/AgentRating';

/**
 * Agent Details page component.
 *
 * @return {JSX.Element}
 */
function AgentDetails() {
  return (
    <>
      <AgentInformation />
      <AgentListings />
      <AgentRating />
    </>
  );
}

export default AgentDetails;
