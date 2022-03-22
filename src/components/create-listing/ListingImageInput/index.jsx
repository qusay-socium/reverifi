import FilesList from 'components/shared/FilesList';
import UploadInput from 'components/shared/UploadInput';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  ImageInputSection,
  InputInterface,
  UploadIcon,
  Wrapper,
} from './listingImageInput.styles';

/**
 * Renders a form listing images input selector with image list
 *
 * @param  {boolean}     images      images array state
 * @param  {Function}    setImages   set images state function
 *
 * @return {JSX.Element}
 */
function ListingImageInput({ images, setImages }) {
  /**
   * handle Add Images function
   */
  const handleAddImages = (acceptedImages) => {
    if (images.length < 10) {
      const updated = [...images, ...acceptedImages];
      setImages(updated);
    }
  };

  /**
   * handle Delete Image function
   */
  const handleDeleteImage = (imageToDelete) => {
    const updated = [...images];
    const index = updated.indexOf(imageToDelete);
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <Container>
      <h2>Upload Images and Videos</h2>
      <Wrapper>
        <ImageInputSection>
          <UploadInput
            acceptedTypes={['image/png', 'image/gif', 'image/jpeg']}
            multiple
            onAddFiles={handleAddImages}
          >
            <InputInterface>
              <span>or</span>
              <UploadIcon />
              <span>Drag and drop here</span>
              <span>browse</span>
            </InputInterface>
          </UploadInput>
        </ImageInputSection>

        <ImageInputSection>
          <FilesList files={images} onDelete={handleDeleteImage} />
        </ImageInputSection>
      </Wrapper>
    </Container>
  );
}

ListingImageInput.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default ListingImageInput;
