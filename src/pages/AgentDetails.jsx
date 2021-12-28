import React from 'react';
import AgentInformation from 'components/AgentDetails/AgentInformation';
import AgentListings from 'components/AgentDetails/AgentListings';
import AgentRating from 'components/AgentDetails/AgentRating';

/**
 * Agent Details page component.
 *
 * @return {JSX.Element}
 */
function AgentDetails() {
  return (
    <div>
      <AgentInformation />
      <AgentListings />
      <AgentRating />
    </div>
  );
}

export default AgentDetails;
