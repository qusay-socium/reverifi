import React from 'react';
import image from 'assets/img1.png';
import { ReactComponent as Camera } from 'assets/photo-camera.svg';
import { ReactComponent as Location } from 'assets/location.svg';
import data from './data';
import {
  CardImageContainer,
  CornerItems,
  Image,
  LocationTagContainer,
  PhotosNumberContainer,
  Tag,
} from './card-image.style';

/**
 * Card image section.
 *
 * @return {JSX.Element}
 */
function CardImage() {
  const { tag, photos, location } = data;
  return (
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
  );
}

export default CardImage;
