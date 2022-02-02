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
  Label,
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
  // eslint-disable-next-line react/prop-types
  if (data.length < 0) return null;

  const { images, price, address, fullBathrooms, bedrooms } = data;

  return (
    <CardContainer>
      <ImageContainer>
        <Badge>Sale</Badge>
        <Image src={images[0]} />
      </ImageContainer>

      <CardText>
        <PriceText>$ {price}</PriceText>
        <LocationText>
          <LocationIcon>
            <PinIcon />
          </LocationIcon>
          <LocationIcon>{address}</LocationIcon>
        </LocationText>
        <Label> Listing By:</Label>
        <IconsContainer>
          <IconsNumber>
            {bedrooms}
            <Bed />
          </IconsNumber>
          <WifiIcon />
          <IconsNumber>
            {fullBathrooms}
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
    address: PropTypes.string,
    bedrooms: PropTypes.number,
    fullBathrooms: PropTypes.number,
    id: PropTypes.string,
    images: PropTypes.arrayOfObject,
    price: PropTypes.number,
  }).isRequired,
};

export default Card;