import listingImage from 'assets/listing-image.png';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Badge,
  CardContainer,
  CardText,
  Image,
  ImageContainer,
  PriceText,
  TimeText,
} from './map-card.style';

/**
 *  Map Card Component
 *
 * @param  {object}  data  for the card
 *
 * @return
 */
function MapCard({ data }) {
  const { images, price, agent, address, tags } = data;
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={images ? images[0] : listingImage} />
      </ImageContainer>

      <CardText>
        <div>
          <h2>{address}</h2>
          <Badge>New</Badge>
        </div>

        <h2>Listing By: {agent ? agent?.roles?.[0]?.role : 'Owner'}</h2>

        <div>
          <PriceText>
            <h2>$ {price}</h2> Est./month
          </PriceText>
          <TimeText>
            <h4>{tags ? tags?.[0] : 'Others'}</h4>
          </TimeText>
        </div>
      </CardText>
    </CardContainer>
  );
}

MapCard.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    agent: PropTypes.string,
    id: PropTypes.number,
    images: PropTypes.string,
    listingBy: PropTypes.string,
    price: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default MapCard;
