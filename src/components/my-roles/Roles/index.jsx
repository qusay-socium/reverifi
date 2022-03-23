import RoleCardsContainer from 'components/my-roles/RoleCardsContainer';
import RolesTable from 'components/my-roles/RolesTable';
import Toast from 'components/shared/Toast';
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
  const [isSaved, setIsSaved] = useState(false);

  /**
   * handle start process button click
   */
  const handleOnClick = async () => {
    try {
      await updateUserRoles(Array.from(selectedRoles));
      setIsSaved(true);
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
      <StyledButton onClick={handleOnClick}>Save</StyledButton>
      {isSaved && (
        <Toast
          status="success"
          message="My Roles have been successfully saved"
        />
      )}
      <Wrapper>
        <RolesTable />
      </Wrapper>
    </PageContainer>
  );
}

export default Roles;
