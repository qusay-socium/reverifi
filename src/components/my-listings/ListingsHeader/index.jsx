import { ReactComponent as AddIcon } from 'assets/add-icon.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  CreateNewListingButton,
  Header,
} from './listings-header.style';

/**
 * My Listing Header component.
 *
 * @return {JSX.Element}
 */
function MyListingHeader() {
  const navigate = useNavigate();

  const handleCreateNewListing = () => {
    navigate('/my-listings/create');
  };

  return (
    <Header>
      <h2>My Listings</h2>

      <ButtonContainer>
        <CreateNewListingButton onClick={handleCreateNewListing}>
          <AddIcon />
          Add New Listing
        </CreateNewListingButton>
      </ButtonContainer>
    </Header>
  );
}

export default MyListingHeader;
