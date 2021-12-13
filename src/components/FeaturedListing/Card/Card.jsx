import React from 'react';
import PropTypes from 'prop-types/prop-types';

import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location-pin.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import {
  CardContainer,
  CardBody,
  Container,
  Image,
  CardFooter,
  CardImageContainer,
  Tag,
  TagContainer,
  PersonImg,
  TextLg,
  TextMd,
  Span,
  IconContainer,
  TextSm,
  InfoContainer,
  BodyIconsContainer,
  IconsContainer,
} from './card.styles';

function Card({ data: info }) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={info.img} />
        <TagContainer>
          {info?.tags?.map((text) => (
            <Tag isNew={text === 'New'} key={text}>
              {text}
            </Tag>
          ))}
        </TagContainer>
        <PersonImg src={info.personImg} />
      </CardImageContainer>

      <CardBody>
        <InfoContainer>
          <TextLg>{info.title}</TextLg>

          <TextMd>{info.location}</TextMd>

          <BodyIconsContainer>
            <Container>
              <Span>{info.services.bedroom}</Span>
              <BedroomIcon />
            </Container>
            <WifiIcon />
            <Container>
              <Span>{info?.services?.bathroom}</Span>
              <BathtubIcon />
            </Container>
            <AirConditionerIcon />
            <BenchIcon />
          </BodyIconsContainer>
        </InfoContainer>

        <IconsContainer>
          <PinIcon />
          <TextSm>{info.distance}</TextSm>
        </IconsContainer>
      </CardBody>

      <CardFooter>
        <TextLg>{info.price}</TextLg>

        <IconsContainer>
          <IconContainer stroke="true">
            <HeartIcon />
          </IconContainer>
          <IconContainer fill="true">
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
