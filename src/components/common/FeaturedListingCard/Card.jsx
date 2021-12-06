import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from 'assets/placeholder.jpg';
import Person from 'assets/Images/download.jpeg';
import { ReactComponent as Like } from 'assets/Utilities Icons/Like.svg';
import { ReactComponent as Share } from 'assets/Utilities Icons/share.svg';

import {
  Avatar,
  ListingCard,
  ListingCardHeader,
  ListingCardBody,
  ListingCardFooter,
  ListingProperties,
  ListingCardImage,
  Property,
  ListingTitleDistance,
  ButtonContainer,
} from './Card.styles';

function Card({
  condition,
  transactionType,
  imgSource,
  title,
  distance,
  location,
  icons,
  price,
  userImage,
}) {
  return (
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
        <Avatar src={userImage || Person} />
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
        <ButtonContainer>
          <Like />

          <Share />
        </ButtonContainer>
      </ListingCardFooter>
    </ListingCard>
  );
}
Card.propTypes = {
  condition: PropTypes.string,
  distance: PropTypes.string,
  icons: PropTypes.string,
  imgSource: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  transactionType: PropTypes.string,
  userImage: PropTypes.string,
};

Card.defaultProps = {
  condition: 'New',
  distance: '1,100 km',
  icons: 'N/A',
  imgSource: '',
  location: 'Bronx, NY 12846',
  price: '$ 999 /Month',
  title: 'Apartment #1',
  transactionType: 'Sale',
  userImage: '',
};

export default Card;
