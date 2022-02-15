import { ReactComponent as AirConditionerIcon } from 'assets/icons/air-conditioner.svg';
import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as BenchIcon } from 'assets/icons/bench.svg';
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg';
import { ReactComponent as ShareIcon } from 'assets/icons/share.svg';
import { ReactComponent as WifiIcon } from 'assets/icons/wifi.svg';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React from 'react';
import { getDatesDifference } from 'utils/helpers';
import {
  BodyIconsContainer,
  CardBody,
  CardContainer,
  CardFooter,
  CardImageContainer,
  CardParent,
  Container,
  IconContainer,
  IconsContainer,
  Image,
  InfoContainer,
  Overlay,
  OverlayAddress,
  OverlayBackground,
  OverlayButton,
  OverlayFeatures,
  OverlayIcons,
  OverlayPrice,
  OverlayProperty,
  PersonImg,
  ServiceQuantity,
  Tag,
  TagContainer,
  TextLarge,
  TextMedium,
  TextSmall,
} from './featured-listing-card.styles';

function Card({ data }) {
  const {
    address,
    agent,
    bedrooms,
    fullBathrooms,
    images,
    price,
    propertyType,
    listingType,
    createdAt,
  } = data;

  const propertyTypeConverter = (property) => {
    if (property.type === 'Apartments') {
      return 'Apartment';
    }
    return property.type;
  };

  const { setShowModal } = useShowModal();

  return (
    <CardParent>
      <CardContainer>
        <CardImageContainer>
          <Image src={images ? images[0] : ''} />
          <TagContainer>
            {getDatesDifference(createdAt, 7) && <Tag isNew>New</Tag>}
            {listingType?.type && <Tag>{listingType?.type}</Tag>}
          </TagContainer>
          {agent?.userInfo?.image && <PersonImg src={agent?.userInfo?.image} />}
        </CardImageContainer>

        <CardBody>
          <InfoContainer>
            <TextMedium>{address}</TextMedium>
            <TextSmall>
              {propertyType?.type
                ? propertyTypeConverter(propertyType)
                : 'Others'}
            </TextSmall>

            <BodyIconsContainer>
              {bedrooms && (
                <Container>
                  <ServiceQuantity>{bedrooms}</ServiceQuantity>
                  <BedroomIcon />
                </Container>
              )}
              {fullBathrooms && (
                <Container>
                  <ServiceQuantity>{fullBathrooms}</ServiceQuantity>
                  <BathtubIcon />
                </Container>
              )}
              <WifiIcon />
              <BenchIcon />
              <AirConditionerIcon />
            </BodyIconsContainer>
          </InfoContainer>
        </CardBody>

        <CardFooter>
          <TextLarge>$ {price.toLocaleString()}</TextLarge>

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

      <OverlayBackground image={images ? images[0] : ''}>
        <Overlay>
          <OverlayAddress>{address}</OverlayAddress>
          <OverlayProperty>
            {propertyType?.type
              ? propertyTypeConverter(propertyType)
              : 'Others'}
          </OverlayProperty>
          <OverlayPrice>$ {price.toLocaleString()}</OverlayPrice>

          <OverlayFeatures>
            {bedrooms && (
              <Container>
                <ServiceQuantity>{bedrooms}</ServiceQuantity>
                <BedroomIcon />
              </Container>
            )}
            <WifiIcon />
            {fullBathrooms && (
              <Container>
                <ServiceQuantity>{fullBathrooms}</ServiceQuantity>
                <BathtubIcon />
              </Container>
            )}
            <AirConditionerIcon />
            <BenchIcon />
          </OverlayFeatures>

          <OverlayButton>View Listing</OverlayButton>

          <OverlayIcons>
            <IconsContainer>
              <IconContainer stroke="true">
                <HeartIcon />
              </IconContainer>
              <IconContainer fill="true" onClick={() => setShowModal(true)}>
                <ShareIcon />
              </IconContainer>
            </IconsContainer>
          </OverlayIcons>
        </Overlay>
      </OverlayBackground>
    </CardParent>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    agent: PropTypes.shape({
      image: PropTypes.string,
      userInfo: PropTypes.objectOf(PropTypes.string),
    }),
    bedrooms: PropTypes.number,
    createdAt: PropTypes.string,
    fullBathrooms: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    listingType: PropTypes.objectOf(PropTypes.string),
    overview: PropTypes.string,
    price: PropTypes.number,
    propertyType: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default Card;
