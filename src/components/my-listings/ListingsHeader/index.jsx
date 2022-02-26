/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ReactComponent as AddIcon } from 'assets/add-icon.svg';
import FilterIcon from 'assets/filter-button.svg';
import ScheduleIcon from 'assets/icons/schedule.svg';
import DropdownMenu from 'components/shared/DropdownMenu';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  CreateNewListingButton,
  Header,
} from './listings-header.style';

/**
 * My Profile page component.
 *
 * @return {JSX.Element}
 */
function MyListingHeader({ setOrder }) {
  const DateOptions = [
    { option: 'Newest', value: 'DESC' },
    { option: 'Oldest', value: 'ASC' },
  ];
  const navigate = useNavigate();

  const handleCreateNewListing = () => {
    navigate('/my-listings/create');
  };

  return (
    <Header>
      <h2>My Listings</h2>

      <ButtonContainer>
        <DropdownMenu
          name="Date"
          placeholder="Date"
          leftIcon={ScheduleIcon}
          options={DateOptions}
          onChange={setOrder}
          small
        />

        <DropdownMenu
          name="Status"
          placeholder="Status"
          leftIcon={FilterIcon}
          onChange={setOrder}
          small
        />

        <CreateNewListingButton onClick={handleCreateNewListing}>
          <AddIcon />
          Add New Listing
        </CreateNewListingButton>
      </ButtonContainer>
    </Header>
  );
}

export default MyListingHeader;
