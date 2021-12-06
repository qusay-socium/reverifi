import Card from 'components/common/FeaturedListingCard/Card';
import PaginationButton from 'components/common/Pagination/PaginationButton';
import React from 'react';
import {
  ListingContainer,
  FeatuedListingSectionContainer,
  PaginationContainer,
} from './featured-listing.styles';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  return (
    <FeatuedListingSectionContainer>
      <h2>Our Featured Listings</h2>
      <ListingContainer>
        <Card />
        <Card />
        <Card />
      </ListingContainer>
      <PaginationContainer>
        <PaginationButton />
        <PaginationButton />
        <PaginationButton />
        <PaginationButton />
      </PaginationContainer>
    </FeatuedListingSectionContainer>
  );
}

export default FeaturedListing;
