import FilesList from 'components/shared/FilesList';
import FormFileInput from 'components/shared/FormFileInput';
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
          <FormFileInput
            acceptedTypes={['image/png', 'image/gif', 'image/jpeg']}
            multiple
            onAddFiles={onAddImages}
          >
            <InputInterface>
              <UploadIcon />
              <span>Drag and drop here</span>
              <span>or</span>
              <span>browse</span>
            </InputInterface>
          </FormFileInput>
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
