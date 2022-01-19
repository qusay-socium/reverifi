import PropTypes from 'prop-types/prop-types';
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
 * MapCard component.
 *
 * @return {JSX.Element}
 */
function MapCard({ data }) {
  const { listingBy, price, image, time, locationStreet } = data;
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>

      <CardText>
        <div>
          <h2>{locationStreet}</h2>
          <Badge>New</Badge>
        </div>

        <h2>Listing By: {listingBy}</h2>

        <div>
          <PriceText>
            <h2>{price}</h2> Est./month
          </PriceText>
          <TimeText>
            Time on reverifi<h4>{time}</h4>
          </TimeText>
        </div>
      </CardText>
    </CardContainer>
  );
}

MapCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    listingBy: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    locationStreet: PropTypes.string,
    price: PropTypes.string,
    time: PropTypes.number,
  }).isRequired,
};

export default MapCard;
