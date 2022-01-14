import RoleCardsContainer from 'components/my-roles/RoleCardsContainer';
import RolesTable from 'components/my-roles/RolesTable';
import React, { useState } from 'react';
import { Wrapper, Header, PageContainer, StyledButton } from './roles.styles';

/**
 * Component holding myRoles page components.
 *
 * @returns Container aligning myRoles page components.
 */
function Roles() {
  // eslint-disable-next-line no-unused-vars
  const [selectedRoles, setSelectedRoles] = useState(() => new Set());

  return (
    <PageContainer>
      <Wrapper>
        <Header>What am I:</Header>
      </Wrapper>
      <RoleCardsContainer setSelectedRoles={setSelectedRoles} />
      <StyledButton
        onClick={() => {
          // TODO: Pass SelectedRoles.
        }}
      >
        Start New Selling/Buying Process
      </StyledButton>
      <Wrapper>
        <RolesTable />
      </Wrapper>
    </PageContainer>
  );
}

export default Roles;
