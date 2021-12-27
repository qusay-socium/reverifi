import RoleCardsContainer from 'components/my-roles/RoleCardsContainer';
import RolesTable from 'components/my-roles/RolesTable';
import React, { useState } from 'react';
import {
  Container,
  Header,
  PageContainer,
  StyledButton,
} from './my-roles.styles';

/**
 * My Roles page component.
 *
 * @return {JSX.Element}
 */
function MyRoles() {
  // eslint-disable-next-line no-unused-vars
  const [selectedRoles, setSelectedRoles] = useState(() => new Set());

  return (
    <PageContainer>
      <Container>
        <Header>What am I:</Header>
      </Container>
      <RoleCardsContainer setSelectedRoles={setSelectedRoles} />
      <StyledButton
        onClick={() => {
          // TODO: Pass SelectedRoles.
        }}
      >
        Start New Selling/Buying Process
      </StyledButton>
      <Container>
        <RolesTable />
      </Container>
    </PageContainer>
  );
}
export default MyRoles;
