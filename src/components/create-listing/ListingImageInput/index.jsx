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
 * @param  {boolean}     images        A list of selected images to display.
 * @param  {Function}    onAddImages   Add images handler.
 * @param  {JSX.Element} onDeleteImage Delete image handler.
 *
 * @return {JSX.Element}
 */
function ListingImageInput({ images, onAddImages, onDeleteImage }) {
  return (
    <Container>
      <h2>Upload Images and Videos</h2>
      <Wrapper>
        <ImageInputSection>
          <UploadInput
            acceptedTypes={['image/png', 'image/gif', 'image/jpeg']}
            multiple
            onAddFiles={onAddImages}
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
          <FilesList files={images} onDelete={onDeleteImage} />
        </ImageInputSection>
      </Wrapper>
    </Container>
  );
}

ListingImageInput.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAddImages: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
};

export default ListingImageInput;
