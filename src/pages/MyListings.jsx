import MyListingsWrapper from 'components/my-listings/MyListings';
import ShowModalProvider from 'contexts/ShowModalContext';
import React from 'react';

/**
 * My Listings page component.
 *
 * @return {JSX.Element}
 */
function MyListings() {
  return (
    <ShowModalProvider>
      <MyListingsWrapper />
    </ShowModalProvider>
  );
}

export default MyListings;
