import { ReactComponent as Bathtub } from 'assets/bathtub.svg';
import { ReactComponent as Bed } from 'assets/icons/bedroom.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location.svg';
import PropTypes from 'prop-types/prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import {
  AreaText,
  Badge,
  BoldNumber,
  CardContainer,
  CardText,
  IconsContainer,
  IconsNumber,
  Image,
  ImageContainer,
  Label,
  LocationContainer,
  LocationText,
  PriceText,
} from './card.style';

/**
 * Card component.
 *
 * @return {JSX.Element}
 */
function Card({ data }) {
  const {
    agent,
    images,
    price,
    address,
    bedrooms,
    fullBathrooms,
    lotArea,
    homeArea,
  } = data;
  const listingBy = `Listing By : ${agent.roles[0]?.role} / ${
    agent.roles[1]?.role ? agent.roles[1]?.role : ''
  }`;
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  if (data.length < 0) return null;

  const handleClick = () => {
    navigate(`${listingPaths.details}/${data.id}`);
  };
  return (
    <CardContainer onClick={handleClick}>
      <ImageContainer>
        <Badge>Sale</Badge>
        <Image src={images[0]} />
      </ImageContainer>

      <CardText>
        <PriceText>$ {price.toLocaleString()}</PriceText>
        <LocationContainer>
          <div>
            <PinIcon />
          </div>
          <LocationText>{address}</LocationText>
        </LocationContainer>
        <Label>{listingBy}</Label>

        <IconsContainer>
          {bedrooms && (
            <IconsNumber>
              <Bed />
              <BoldNumber>{data.bedrooms}</BoldNumber>
            </IconsNumber>
          )}

          {fullBathrooms && (
            <IconsNumber>
              <Bathtub />
              <BoldNumber>{data.fullBathrooms}</BoldNumber>
            </IconsNumber>
          )}

          {homeArea && (
            <IconsNumber>
              <BoldNumber>{homeArea.sqft} </BoldNumber>
              <AreaText>sqft</AreaText>
            </IconsNumber>
          )}

          {lotArea && (
            <IconsNumber>
              <BoldNumber>{lotArea.sqft} </BoldNumber>{' '}
              <AreaText>sqft lot</AreaText>
            </IconsNumber>
          )}
        </IconsContainer>
      </CardText>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    agent: PropTypes.shape({
      roles: PropTypes.arrayOf(
        PropTypes.shape({
          role: PropTypes.string,
        })
      ),
    }),
    bedrooms: PropTypes.number,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        feature: PropTypes.string,
      })
    ),
    fullBathrooms: PropTypes.number,
    homeArea: PropTypes.shape({ sqft: PropTypes.string }),
    id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    lotArea: PropTypes.shape({ sqft: PropTypes.string }),

    price: PropTypes.number,
  }).isRequired,
};

export default Card;
