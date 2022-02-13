import { ReactComponent as AddIcon } from 'assets/add-icon.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowDownContainer,
  ButtonContainer,
  CreateNewListingButton,
  FilterButton,
  FilterIconContainer,
  Header,
  HeaderTitle,
} from './listings-header.style';

/**
 * My Profile page component.
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
      <HeaderTitle>My Listings</HeaderTitle>
      <ButtonContainer>
        <FilterButton>
          <FilterIconContainer />
          Filter
          <ArrowDownContainer />
        </FilterButton>
        <CreateNewListingButton onClick={handleCreateNewListing}>
          <AddIcon />
          Add New Listing
        </CreateNewListingButton>
      </ButtonContainer>
    </Header>
  );
}

export default MyListingHeader;
