import { ReactComponent as Arrow } from 'assets/arrow-right-green.svg';
import { ReactComponent as Bathtub } from 'assets/bathtub.svg';
import { ReactComponent as Bed } from 'assets/icons/bedroom.svg';
import { ReactComponent as PinIcon } from 'assets/icons/location.svg';
import listingImage from 'assets/listing-image.png';
import SaveAndShareButtons from 'components/shared/SaveAndShareButtons';
import PropTypes from 'prop-types/prop-types';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import {
  AreaText,
  Badge,
  BadgesContainer,
  BoldNumber,
  CardContainer,
  CardHeader,
  CardText,
  IconsContainer,
  IconsNumber,
  Image,
  ImageContainer,
  LocationContainer,
  LocationText,
  PriceText,
  ViewListingLink,
} from './card.style';

/**
 * Card component.
 *
 * @return {JSX.Element}
 */
function Card({ data }) {
  const {
    images,
    price,
    address,
    bedrooms,
    fullBathrooms,
    lotArea,
    homeArea,
    tags,
    id,
  } = data;

  if (data.length < 0) return null;

  return (
    <CardContainer>
      <ImageContainer>
        <BadgesContainer>
          <Badge>Sale</Badge>
          {tags?.length > 0 &&
            tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </BadgesContainer>

        <Image src={images ? images[0] : listingImage} />
      </ImageContainer>

      <CardText>
        <CardHeader>
          <PriceText>$ {price.toLocaleString()}</PriceText>
          <SaveAndShareButtons listingId={id} />
        </CardHeader>
        <LocationContainer>
          <div>
            <PinIcon />
          </div>
          <LocationText>{address}</LocationText>
        </LocationContainer>

        <IconsContainer>
          {bedrooms && (
            <IconsNumber>
              <BoldNumber>{bedrooms}</BoldNumber>
              <Bed />
            </IconsNumber>
          )}

          {fullBathrooms && (
            <IconsNumber>
              <BoldNumber>{fullBathrooms}</BoldNumber>
              <Bathtub />
            </IconsNumber>
          )}

          {homeArea && (
            <IconsNumber>
              <BoldNumber>{homeArea?.sqft} </BoldNumber>
              <AreaText>Sq.Ft</AreaText>
            </IconsNumber>
          )}

          {lotArea && (
            <IconsNumber>
              <BoldNumber>{lotArea?.sqft} </BoldNumber>{' '}
              <AreaText>Sq.Ft lot</AreaText>
            </IconsNumber>
          )}
          <ViewListingLink to={`${listingPaths.listing}/${id}`}>
            View listing
          </ViewListingLink>
          <Arrow />
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
    length: PropTypes.number,
    lotArea: PropTypes.shape({ sqft: PropTypes.string }),
    price: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;
