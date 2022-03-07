import { ReactComponent as Bathtub } from 'assets/bathtub.svg';
import { ReactComponent as Bed } from 'assets/icons/bedroom.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location.svg';
import listingImage from 'assets/listing-image.png';
import PropTypes from 'prop-types';
import React from 'react';
import { AreaText, BoldNumber, IconsNumber } from '../Card/card.style';
import {
  AddressContainer,
  AddressText,
  CardContainer,
  CardText,
  Image,
  ImageContainer,
  MapCardIconsContainer,
  PriceText,
} from './map-card.style';

/**
 *  Map Card Component
 *
 * @param  {object}  data  for the card
 *
 * @return
 */
function MapCard({ data }) {
  const { images, price, address, bedrooms, fullBathrooms, lotArea, homeArea } =
    data;
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={images ? images?.[0] : listingImage} />
      </ImageContainer>

      <CardText>
        <PriceText>$ {price.toLocaleString()}</PriceText>
        <AddressContainer>
          <PinIcon />
          <AddressText>{address}</AddressText>
        </AddressContainer>
      </CardText>

      <MapCardIconsContainer>
        {bedrooms && (
          <IconsNumber>
            <BoldNumber>{bedrooms}</BoldNumber>
            <Bed />
          </IconsNumber>
        )}

        {fullBathrooms && (
          <IconsNumber>
            <BoldNumber>{fullBathrooms}</BoldNumber>
            <Bathtub />
          </IconsNumber>
        )}

        {homeArea && (
          <IconsNumber>
            <BoldNumber>{homeArea?.sqft} </BoldNumber>
            <AreaText>Sq.Ft</AreaText>
          </IconsNumber>
        )}

        {lotArea && (
          <IconsNumber>
            <BoldNumber>{lotArea?.sqft} </BoldNumber>{' '}
            <AreaText>Sq.Ft lot</AreaText>
          </IconsNumber>
        )}
      </MapCardIconsContainer>
    </CardContainer>
  );
}

MapCard.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    agent: PropTypes.string,
    bedrooms: PropTypes.number,
    fullBathrooms: PropTypes.number,
    homeArea: PropTypes.shape({ sqft: PropTypes.string }),
    id: PropTypes.number,
    images: PropTypes.string,
    listingBy: PropTypes.string,
    lotArea: PropTypes.shape({ sqft: PropTypes.string }),
    price: PropTypes.string,
  }).isRequired,
};

export default MapCard;
