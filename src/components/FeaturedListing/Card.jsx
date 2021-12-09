import React from 'react';
import PropTypes from 'prop-types/prop-types';

import colors from 'styles/colors';
import {
  CardBody,
  CardContainer,
  Flex,
  Image,
  CardFooter,
  CardImageContainer,
  Tag,
  TagContainer,
  PersonImg,
  Text,
  Span,
  IconContainer,
} from './featured-listing.styles';
import { ReactComponent as BedroomIcon } from '../../assets/icons/bedroom.svg';
import { ReactComponent as WifiIcon } from '../../assets/icons/wifi.svg';
import { ReactComponent as BathtubIcon } from '../../assets/icons/bathtub.svg';
import { ReactComponent as AirConditionerIcon } from '../../assets/icons/air-conditioner.svg';
import { ReactComponent as BenchIcon } from '../../assets/icons/bench.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/location-pin.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

function Card({ data: info }) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={info.img} />

        <TagContainer>
          {info.tags.map((text) => (
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
          <Text
            size="1.125rem"
            weight="600"
            margin="0 0 3px 0"
            lineHeight="22px"
          >
            {info.title}
          </Text>

          <Text
            size="0.875rem"
            margin="0 0 13px 0"
            lineHeight="17px"
            color={colors.grey}
          >
            {info.location}
          </Text>

          <Flex justify="space-between" gap="16px">
            <Flex>
              <Span>{info.services.bedroom}</Span>
              <BedroomIcon />
            </Flex>
            <WifiIcon />
            <Flex>
              <Span>{info.services.bathroom}</Span>
              <BathtubIcon />
            </Flex>
            <AirConditionerIcon />
            <BenchIcon />
          </Flex>
        </Flex>

        <Flex gap="8px">
          <PinIcon />
          <Text size="0.75rem" lineHeight="15px" color={colors.grey}>
            {info.distance}
          </Text>
        </Flex>
      </CardBody>

      <CardFooter>
        <Text
          size="1.125rem"
          weight="600"
          color={colors.black}
          lineHeight="22px"
        >
          {info.price}
        </Text>

        <Flex gap="7px">
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
