import ShowModalProvider from 'contexts/ShowModalContext';
import React, { useState } from 'react';
import DeleteBox from '../DeleteBox';
import MyListingHeader from '../ListingsHeader';
import ListingsTable from '../ListingsTable';
import { MyListingContainer } from './my-lsitings.style';

/**
 * My Profile page component.
 *
 * @return {JSX.Element}
 */
function MyProfile() {
  const [deleteId, setDeleteId] = useState(null);
  return (
    <MyListingContainer>
      <MyListingHeader />
      <ShowModalProvider>
        <ListingsTable setDeleteId={setDeleteId} />
        <DeleteBox deleteId={deleteId} />
      </ShowModalProvider>
    </MyListingContainer>
  );
}

export default MyProfile;
