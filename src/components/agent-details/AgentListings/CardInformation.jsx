import React from 'react';
import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as Comment } from 'assets/comment.svg';
import { ReactComponent as FilledHeart } from 'assets/filled-heart.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import data from './data';
import {
  BodyContainers,
  CardBody,
  CardFooter,
  CardHeader,
  CardInformationContainer,
  CardPrice,
  HeaderIcons,
  IconGroup,
} from './agent-listings.style';

function CardInformation() {
  const { price, time, description, likes, comments } = data;
  return (
    <CardInformationContainer>
      <CardHeader>
        <CardPrice>
          <h3>{price}</h3>
          <span>{time}</span>
        </CardPrice>
        <HeaderIcons>
          <HeartIcon />
          <ShareIcon />
        </HeaderIcons>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <BodyContainers>
        <IconGroup>
          <span>2</span>
          <BedroomIcon />
        </IconGroup>

        <WifiIcon />

        <IconGroup>
          <span>1</span>
          <BathtubIcon />
        </IconGroup>

        <AirConditionerIcon />

        <BenchIcon />
      </BodyContainers>

      <CardFooter>
        <IconGroup>
          <FilledHeart />
          <span>{likes}</span>
        </IconGroup>

        <IconGroup>
          <Comment />
          <span>{comments}</span>
        </IconGroup>
      </CardFooter>
    </CardInformationContainer>
  );
}

export default CardInformation;
