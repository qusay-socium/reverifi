import React from 'react';
import PropTypes from 'prop-types';

import colors from 'styles/colors';
import data from './data';
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
} from './featured-listing.styles';
import { ReactComponent as BedroomIcon } from '../../assets/icons/bedroom.svg';
import { ReactComponent as WifiIcon } from '../../assets/icons/wifi.svg';
import { ReactComponent as BathtubIcon } from '../../assets/icons/bathtub.svg';
import { ReactComponent as AirConditionerIcon } from '../../assets/icons/air-conditioner.svg';
import { ReactComponent as BenchIcon } from '../../assets/icons/bench.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/location-pin.svg';

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
          <Text size="18px" weight="600" margin="0 0 3px 0" lineHeight="22px">
            {info.title}
          </Text>

          <Text
            size="14px"
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
          <Text size="12px" lineHeight="15px" color={colors.grey}>
            {info.distance}
          </Text>
        </Flex>
      </CardBody>

      <CardFooter>
        <div>{data.price}</div>
        <div>icons</div>
      </CardFooter>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.objectOf(data).isRequired,
};

export default Card;
