import listingImage from 'assets/listing-image.png';
import { ReactComponent as Location } from 'assets/location.svg';
import { ReactComponent as Camera } from 'assets/photo-camera.svg';
import PropTypes from 'prop-types';
import React from 'react';
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
function CardImage({ listingType, address, images, tags }) {
  return (
    <CardImageContainer>
      <Image src={images?.[0] || listingImage} />
      <CornerItems isRight={false} isBottom={false}>
        {listingType && <Tag>{listingType}</Tag>}
        {tags?.length > 0 && tags?.map((tag) => <Tag>{tag}</Tag>)}
      </CornerItems>

      {images?.length > 0 && (
        <CornerItems isRight isBottom={false}>
          <PhotosNumberContainer>
            {images?.length}
            <Camera />
          </PhotosNumberContainer>
        </CornerItems>
      )}

      {address && (
        <CornerItems isBottom isRight={false}>
          <LocationTagContainer>
            <Location />
            <span>{address}</span>
          </LocationTagContainer>
        </CornerItems>
      )}
    </CardImageContainer>
  );
}

CardImage.defaultProps = {
  tags: [],
};

CardImage.propTypes = {
  address: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  listingType: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default CardImage;
