import React from 'react';
import MyListingHeader from '../ListingsHeader';
import ListingsTable from '../ListingsTable';
import { MyListingContainer } from './my-lsitings.style';

/**
 * My Profile page component.
 *
 * @return {JSX.Element}
 */
function MyProfile() {
  return (
    <MyListingContainer>
      <MyListingHeader />
      <ListingsTable />
    </MyListingContainer>
  );
}

export default MyProfile;
