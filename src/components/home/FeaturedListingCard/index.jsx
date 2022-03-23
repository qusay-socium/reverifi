import { ReactComponent as BathtubIcon } from 'assets/icons/bathtub.svg';
import { ReactComponent as BedroomIcon } from 'assets/icons/bedroom.svg';
import { ReactComponent as GarageIcon } from 'assets/icons/garage.svg';
import agentImage from 'assets/listing-agent-image.png';
import listingImage from 'assets/listing-image.png';
import { ReactComponent as LocationIcon } from 'assets/location.svg';
import SaveAndShareButtons from 'components/shared/SaveAndShareButtons';
import { useShowModal } from 'contexts/ShowModalContext';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatesDifference } from 'utils/helpers';
import {
  AddressTextContainer,
  AreaText,
  BodyIconsContainer,
  CardBody,
  CardContainer,
  CardFooter,
  CardImageContainer,
  CardParent,
  FeaturedIconContainer,
  Image,
  InfoContainer,
  Overlay,
  OverlayAddress,
  OverlayBackground,
  OverlayBody,
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
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

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
    homeArea,
    garages,
    tags,
    id,
  } = data;
  const { setShowModal } = useShowModal();

  return (
    <CardParent>
      <CardContainer>
        <CardImageContainer>
          <Image src={images ? images[0] : listingImage} />
          <TagContainer>
            {getDatesDifference(createdAt, 7) && <Tag isNew>New</Tag>}
            {listingType?.type && <Tag>{listingType?.type}</Tag>}
            {tags?.length > 0 && tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </TagContainer>
          <PersonImg src={agent?.userInfo?.image || agentImage} />
        </CardImageContainer>

        <CardBody>
          <InfoContainer>
            <AddressTextContainer>
              <FeaturedIconContainer>
                <LocationIcon />
              </FeaturedIconContainer>
              <TextMedium>{address || 'USA'}</TextMedium>
            </AddressTextContainer>
            <TextSmall>
              {propertyType?.type ? propertyType?.type : 'Others'}
            </TextSmall>

            <BodyIconsContainer>
              {bedrooms && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{bedrooms}</ServiceQuantity>
                  <BedroomIcon />
                </FeaturedIconContainer>
              )}
              {fullBathrooms && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{fullBathrooms}</ServiceQuantity>
                  <BathtubIcon />
                </FeaturedIconContainer>
              )}
              {garages && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{garages} </ServiceQuantity> <GarageIcon />
                </FeaturedIconContainer>
              )}
              {homeArea && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{homeArea?.sqft} </ServiceQuantity>
                  <AreaText>sqft</AreaText>
                </FeaturedIconContainer>
              )}
            </BodyIconsContainer>
          </InfoContainer>
        </CardBody>

        <CardFooter>
          <TextLarge>$ {price.toLocaleString()}</TextLarge>

          <SaveAndShareButtons small="true" activeState={isActive} noFetch />
        </CardFooter>
      </CardContainer>

      <OverlayBackground image={images ? images[0] : ''}>
        <Overlay wordBreak>
          <OverlayBody>
            <OverlayAddress>{address || 'USA'}</OverlayAddress>
            <OverlayProperty>
              {propertyType?.type ? propertyType?.type : 'Others'}
            </OverlayProperty>
            <OverlayPrice>$ {price.toLocaleString()}</OverlayPrice>

            <OverlayFeatures>
              {bedrooms && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{bedrooms}</ServiceQuantity>
                  <BedroomIcon />
                </FeaturedIconContainer>
              )}

              {fullBathrooms && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{fullBathrooms}</ServiceQuantity>
                  <BathtubIcon />
                </FeaturedIconContainer>
              )}
              {garages && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{garages} </ServiceQuantity> <GarageIcon />
                </FeaturedIconContainer>
              )}
              {homeArea && (
                <FeaturedIconContainer>
                  <ServiceQuantity>{homeArea?.sqft} </ServiceQuantity>
                  <AreaText>sqft</AreaText>
                </FeaturedIconContainer>
              )}
            </OverlayFeatures>

            <OverlayButton onClick={() => navigate(`/listing/${id}`)}>
              View Listing
            </OverlayButton>

            <OverlayIcons>
              <SaveAndShareButtons
                listingId={id}
                setShowModal={setShowModal}
                small="true"
                changeActiveState={() => setIsActive(!isActive)}
              />
            </OverlayIcons>
          </OverlayBody>
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
    garages: PropTypes.number,
    homeArea: PropTypes.shape({
      sqft: PropTypes.objectOf(PropTypes.string),
    }),
    id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    listingType: PropTypes.objectOf(PropTypes.string),
    overview: PropTypes.string,
    price: PropTypes.number,
    propertyType: PropTypes.objectOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;
