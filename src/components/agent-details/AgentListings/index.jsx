import React from 'react';
import image from 'assets/img1.png';
import { ReactComponent as Camera } from 'assets/photo-camera.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import data from './data';
import {
  Card,
  CardImageContainer,
  CardsContainer,
  CornerItems,
  Image,
  ListingsContainer,
  LocationTagContainer,
  PhotosNumberContainer,
  Tag,
} from './agent-listings.style';
import CardInformation from './CardInformation';

/**
 * Listing details section.
 *
 * @return {JSX.Element}
 */
function AgentListings() {
  const { tag, photos, location } = data;
  return (
    <ListingsContainer>
      <h2>Listings</h2>
      <CardsContainer>
        {[1, 2, 3].map((index) => (
          <Card key={index}>
            <CardImageContainer>
              <Image src={image} />
              <CornerItems isRight={false} isBottom={false}>
                <Tag>{tag}</Tag>
              </CornerItems>
              <CornerItems isRight isBottom={false}>
                <PhotosNumberContainer>
                  {photos}
                  <Camera />
                </PhotosNumberContainer>
              </CornerItems>
              <CornerItems isBottom isRight={false}>
                <LocationTagContainer>
                  <Location />
                  {location}
                </LocationTagContainer>
              </CornerItems>
            </CardImageContainer>
            <CardInformation />
          </Card>
        ))}
      </CardsContainer>
    </ListingsContainer>
  );
}

export default AgentListings;
