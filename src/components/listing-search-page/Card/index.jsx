import { ReactComponent as AirConditioner } from 'assets/air-conditioner.svg';
import { ReactComponent as Bathtub } from 'assets/bathtub.svg';
import { ReactComponent as DiningSpoon } from 'assets/dining-spoon.svg';
import { ReactComponent as HairDryer } from 'assets/hair-dryer.svg';
import { ReactComponent as Bed } from 'assets/icons/bedroom.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location.svg';
import { ReactComponent as MopWaterBucket } from 'assets/mop-water-bucket.svg';
import { ReactComponent as Parking } from 'assets/parking.svg';
import { ReactComponent as RingsGym } from 'assets/rings-gym.svg';
import { ReactComponent as Sauna } from 'assets/sauna.svg';
import { ReactComponent as SwimmingPool } from 'assets/swimming-pool.svg';
import { ReactComponent as Tv } from 'assets/tv.svg';
import { ReactComponent as Wifi } from 'assets/wifi.svg';
import PropTypes from 'prop-types/prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
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
  const { features, agent } = data;
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
        <Image src={data.images[0]} />
      </ImageContainer>

      <CardText>
        <PriceText>$ {data.price}</PriceText>
        <LocationText>
          <LocationIcon>
            <PinIcon />
          </LocationIcon>
          <LocationIcon>{data.address}</LocationIcon>
        </LocationText>
        <Label>{listingBy}</Label>

        <IconsContainer>
          {data.bedrooms ? (
            <IconsNumber>
              {data.bedrooms}
              <Bed />
            </IconsNumber>
          ) : null}

          {data.fullBathrooms ? (
            <IconsNumber>
              {data.fullBathrooms}
              <Bathtub />
            </IconsNumber>
          ) : null}

          {features.find((feature) => feature.feature === 'Dining Room') ? (
            <IconsNumber>
              <DiningSpoon />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'Central Heating') ? (
            <IconsNumber>
              <Bathtub />
            </IconsNumber>
          ) : null}
          {features.find(
            (feature) => feature.feature === 'Air Conditioning'
          ) ? (
            <IconsNumber>
              <AirConditioner />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'Dryer') ? (
            <IconsNumber>
              <HairDryer />
            </IconsNumber>
          ) : null}

          {features.find(
            (feature) => feature.feature === 'Cleaning Service'
          ) ? (
            <IconsNumber>
              <MopWaterBucket />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'Parking') ? (
            <IconsNumber>
              <Parking />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'GYM') ? (
            <IconsNumber>
              <RingsGym />
            </IconsNumber>
          ) : null}

          {features.find((feature) => feature.feature === 'Sauna') ? (
            <IconsNumber>
              <Sauna />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'Swimming Pool') ? (
            <IconsNumber>
              <SwimmingPool />
            </IconsNumber>
          ) : null}
          {features.find((feature) => feature.feature === 'TV Cable') ? (
            <IconsNumber>
              <Tv />
            </IconsNumber>
          ) : null}

          {features.find((feature) => feature.feature === 'WIFI') ? (
            <IconsNumber>
              <Wifi />
            </IconsNumber>
          ) : null}
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
    id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }).isRequired,
};

export default Card;
