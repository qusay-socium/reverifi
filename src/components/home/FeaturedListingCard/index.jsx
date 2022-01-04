import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location-pin.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';
import {
  BodyIconsContainer,
  CardBody,
  CardContainer,
  CardFooter,
  CardImageContainer,
  Container,
  IconContainer,
  IconsContainer,
  Image,
  InfoContainer,
  PersonImg,
  ServiceQuantity,
  Tag,
  TagContainer,
  TextLarge,
  TextMedium,
  TextSmall,
} from './featured-listing-card.styles';

function Card({ data }) {
  const { img, tags, personImg, title, location, services, distance, price } =
    data;

  const { setShowModal } = useShowModal();

  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={img} />
        <TagContainer>
          {tags?.map((text) => (
            <Tag isNew={text === 'New'} key={text}>
              {text}
            </Tag>
          ))}
        </TagContainer>
        <PersonImg src={personImg} />
      </CardImageContainer>

      <CardBody>
        <InfoContainer>
          <TextLarge>{title}</TextLarge>

          <TextMedium>{location}</TextMedium>

          <BodyIconsContainer>
            <Container>
              <ServiceQuantity>{services.bedroom}</ServiceQuantity>
              <BedroomIcon />
            </Container>
            <WifiIcon />
            <Container>
              <ServiceQuantity>{services?.bathroom}</ServiceQuantity>
              <BathtubIcon />
            </Container>
            <AirConditionerIcon />
            <BenchIcon />
          </BodyIconsContainer>
        </InfoContainer>

        <IconsContainer>
          <PinIcon />
          <TextSmall>{distance}</TextSmall>
        </IconsContainer>
      </CardBody>

      <CardFooter>
        <TextLarge>{price}</TextLarge>

        <IconsContainer>
          <IconContainer stroke="true">
            <HeartIcon />
          </IconContainer>
          <IconContainer fill="true" onClick={() => setShowModal(true)}>
            <ShareIcon />
          </IconContainer>
        </IconsContainer>
      </CardFooter>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    distance: PropTypes.string,
    img: PropTypes.string,
    location: PropTypes.string,
    personImg: PropTypes.string,
    price: PropTypes.string,
    services: PropTypes.shape({
      bathroom: PropTypes.number,
      bedroom: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }).isRequired,
};

export default Card;
