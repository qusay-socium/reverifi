import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from '../../assets/placeholder.jpg';
import {
  ListingContainer,
  ListingCard,
  ListingCardHeader,
  ListingCardImage,
  ListingCardBody,
  ListingProperties,
  ListingCardFooter,
  FeatuedListingSectionContainer,
  Property,
  ListingTitleDistance,
} from './featured-listing.styles';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing({
  imgSource,
  title,
  price,
  transactionType,
  condition,
  location,
  distance,
  icons,
}) {
  return (
    <FeatuedListingSectionContainer>
      <h2>Our Featured Listings</h2>
      <ListingContainer>
        <ListingCard>
          <ListingProperties>
            <Property condition={condition}>{condition}</Property>
            <Property>{transactionType}</Property>
          </ListingProperties>
          <ListingCardHeader>
            <ListingCardImage
              alt="Real Estate Listing"
              src={imgSource || Placeholder}
            />
          </ListingCardHeader>
          <ListingCardBody>
            <ListingTitleDistance>
              <h3>{title}</h3>
              <p>{distance}</p>
            </ListingTitleDistance>
            <h4>{location}</h4>
            <span>{icons}</span>
          </ListingCardBody>
          <ListingCardFooter>
            <p>{price}</p>
            <div>Like Share</div>
          </ListingCardFooter>
        </ListingCard>
      </ListingContainer>
      <div>
        <p>Pagination</p>
      </div>
    </FeatuedListingSectionContainer>
  );
}

FeaturedListing.propTypes = {
  condition: PropTypes.string,
  distance: PropTypes.string,
  icons: PropTypes.string,
  imgSource: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  transactionType: PropTypes.string,
};

FeaturedListing.defaultProps = {
  condition: 'New',
  distance: '1,100 km',
  icons: 'N/A',
  imgSource: '',
  location: 'Bronx, NY 12846',
  price: '$ 999 /Month',
  title: 'Apartment #1',
  transactionType: 'Sale',
};
export default FeaturedListing;
