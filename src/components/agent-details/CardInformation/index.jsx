import { ReactComponent as Comment } from 'assets/comment.svg';
import { ReactComponent as FilledHeart } from 'assets/filled-heart.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import Button from 'components/shared/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatesDifference } from 'utils/helpers';
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardInformationContainer,
  CardPrice,
  FooterIconGroup,
  HeaderIcons,
  HeaderIconWrapper,
  IconGroup,
  IconsContainers,
} from './card-information.style';

/**
 * Listing details section.
 *
 * @return {JSX.Element}
 */
function CardInformation({
  id,
  price,
  perPeriod,
  createdAt,
  propertyType,
  bedrooms,
  fullBathrooms,
  homeArea,
  lotArea,
}) {
  const navigate = useNavigate();
  return (
    <CardInformationContainer>
      <CardHeader>
        <CardPrice>
          <h3>
            ${price?.toLocaleString()}
            {perPeriod && `/${perPeriod}`}
          </h3>
          <span>
            {getDatesDifference(createdAt)} day
            <span>{getDatesDifference(createdAt) > 1 && 's'}</span> on reverifi
          </span>
        </CardPrice>
        <HeaderIcons>
          <HeaderIconWrapper stroke="true">
            <HeartIcon />
          </HeaderIconWrapper>
          <HeaderIconWrapper fill="true">
            <ShareIcon />
          </HeaderIconWrapper>
        </HeaderIcons>
      </CardHeader>
      <CardBody>
        <p>
          {propertyType === 'Apartments'
            ? propertyType?.slice(0, -1)
            : propertyType}
        </p>
        <IconsContainers>
          {bedrooms && (
            <IconGroup>
              <span>{bedrooms}</span>
              <BedroomIcon />
            </IconGroup>
          )}
          {fullBathrooms && (
            <IconGroup>
              <span>{fullBathrooms}</span>
              <BathtubIcon />
            </IconGroup>
          )}
          {homeArea ? (
            <IconGroup>
              <span>{homeArea} sqft</span>
            </IconGroup>
          ) : null}
          {lotArea ? (
            <IconGroup>
              <span>{lotArea} sqft lot</span>
            </IconGroup>
          ) : null}
        </IconsContainers>
      </CardBody>
      <CardFooter>
        <FooterIconGroup>
          <FilledHeart />
          <span>321</span>
        </FooterIconGroup>

        <FooterIconGroup>
          <Comment />
          <span>231 Views</span>
        </FooterIconGroup>
        <Button
          ariaLabel="View Listing"
          onClick={() => navigate(`/listing/${id}`)}
        >
          View Listing
        </Button>
      </CardFooter>
    </CardInformationContainer>
  );
}

CardInformation.defaultProps = {
  bedrooms: 0,
  fullBathrooms: 0,
  homeArea: 0,
  lotArea: 0,
  perPeriod: null,
};

CardInformation.propTypes = {
  bedrooms: PropTypes.number,
  createdAt: PropTypes.string.isRequired,
  fullBathrooms: PropTypes.number,
  homeArea: PropTypes.string,
  id: PropTypes.string.isRequired,
  lotArea: PropTypes.string,
  perPeriod: PropTypes.string,
  price: PropTypes.number.isRequired,
  propertyType: PropTypes.string.isRequired,
};

export default CardInformation;
