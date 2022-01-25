import RoleCardsContainer from 'components/my-roles/RoleCardsContainer';
import RolesTable from 'components/my-roles/RolesTable';
import React, { useState } from 'react';
import { updateUserRoles } from 'services/user';
import { Header, PageContainer, StyledButton, Wrapper } from './roles.styles';

/**
 * Component holding myRoles page components.
 *
 * @returns Container aligning myRoles page components.
 */
function Roles() {
  const [selectedRoles, setSelectedRoles] = useState(() => new Set());

  /**
   * handle start process button click
   */
  const handleOnClick = async () => {
    try {
      await updateUserRoles(Array.from(selectedRoles));
    } catch (err) {
      // handel error here
    }
  };

  return (
    <PageContainer>
      <Wrapper>
        <Header>What am I:</Header>
      </Wrapper>
      <RoleCardsContainer setSelectedRoles={setSelectedRoles} />
      <StyledButton onClick={handleOnClick}>
        Start New Selling/Buying Process
      </StyledButton>
      <Wrapper>
        <RolesTable />
      </Wrapper>
    </PageContainer>
  );
}

export default Roles;
