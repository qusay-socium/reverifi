import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as Bed } from 'assets/icons/bedroom.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import PropTypes from 'prop-types/prop-types';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  Badge,
  CardContainer,
  CardText,
  IconsContainer,
  IconsNumber,
  Image,
  ImageContainer,
  LocationIcon,
  LocationText,
  PriceText,
} from './card.style';

/**
 * Card component.
 *
 * @return {JSX.Element}
 */
function Card({ data }) {
  const { image, listingBy, price, location, services } = data;
  return (
    <CardContainer>
      <ImageContainer>
        <Badge>Sale</Badge>
        <Image src={image} />
      </ImageContainer>

      <CardText>
        <PriceText>{price}</PriceText>

        <LocationText>
          <LocationIcon>
            <PinIcon />
          </LocationIcon>
          <LocationIcon>{location}</LocationIcon>
        </LocationText>

        <p>Listing By: {listingBy}</p>
        <IconsContainer>
          <IconsNumber>
            {services.bedroom}
            <Bed />
          </IconsNumber>
          <WifiIcon />
          <IconsNumber>
            {services.bathroom}
            <BathtubIcon />
          </IconsNumber>
          <AirConditionerIcon />
          <BenchIcon />
        </IconsContainer>
      </CardText>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    listingBy: PropTypes.string,
    location: PropTypes.string,
    pin: PropTypes.string,
    price: PropTypes.string,
    services: PropTypes.shape({
      bathroom: PropTypes.number,
      bedroom: PropTypes.number,
    }),
  }).isRequired,
};

export default Card;
