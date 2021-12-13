import React from 'react';
import PropTypes from 'prop-types/prop-types';

import colors from 'styles/colors';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location-pin.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import CardContainer, {
  CardBody,
  Flex,
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
} from './card.styles';

function Card({ data: info }) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={info.img} />
        <TagContainer>
          {info?.tags?.map((text) => (
            <Tag
              color={text === 'New' ? colors.orange : colors.lightgreen}
              key={text}
            >
              {text}
            </Tag>
          ))}
        </TagContainer>
        <PersonImg src={info.personImg} />
      </CardImageContainer>

      <CardBody>
        <Flex direction="column" align="flex-start">
          <TextLg>{info.title}</TextLg>

          <TextMd>{info.location}</TextMd>

          <Flex justify="space-between" gap="1rem">
            <Flex>
              <Span>{info.services.bedroom}</Span>
              <BedroomIcon />
            </Flex>
            <WifiIcon />
            <Flex>
              <Span>{info?.services?.bathroom}</Span>
              <BathtubIcon />
            </Flex>
            <AirConditionerIcon />
            <BenchIcon />
          </Flex>
        </Flex>

        <Flex gap="0.5rem">
          <PinIcon />
          <TextSm>{info.distance}</TextSm>
        </Flex>
      </CardBody>

      <CardFooter>
        <TextLg>{info.price}</TextLg>

        <Flex gap="0.4375rem">
          <IconContainer iconName="heart">
            <HeartIcon />
          </IconContainer>
          <IconContainer iconName="share">
            <ShareIcon />
          </IconContainer>
        </Flex>
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
