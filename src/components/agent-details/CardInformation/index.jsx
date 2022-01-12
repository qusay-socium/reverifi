import React from 'react';
import { ReactComponent as Comment } from 'assets/comment.svg';
import { ReactComponent as FilledHeart } from 'assets/filled-heart.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import Button from 'components/shared/Button';
import AvailableServices from '../AvailableServices';
import data from './data';
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardInformationContainer,
  CardPrice,
  HeaderIcons,
  IconGroup,
} from './card-information.style';

/**
 * Listing details section.
 *
 * @return {JSX.Element}
 */
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
      <AvailableServices />
      <CardFooter>
        <IconGroup>
          <FilledHeart />
          <span>{likes}</span>
        </IconGroup>

        <IconGroup>
          <Comment />
          <span>{comments}</span>
        </IconGroup>
        <Button ariaLabel="View Listing">View Listing</Button>
      </CardFooter>
    </CardInformationContainer>
  );
}

export default CardInformation;
