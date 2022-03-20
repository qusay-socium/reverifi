import FilesList from 'components/shared/FilesList';
import PropTypes from 'prop-types';
import React from 'react';
import UploadInput from '../UploadInput';
import {
  Container,
  ImageInputSection,
  InputInterface,
  Label,
  UploadIcon,
  Wrapper,
} from './listingImageInput.styles';

/**
 * Renders a form listing images input selector with image list
 *
 * @param  {boolean}     images        A list of selected images to display.
 * @param  {Function}    onAddImages   Add images handler.
 * @param  {JSX.Element} onDeleteImage Delete image handler.
 * @param  {string}      label         Text for the
 *
 * @return {JSX.Element}
 */
function ListingImageInput({ images, onAddImages, onDeleteImage, label }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper>
        <ImageInputSection>
          <UploadInput
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
          </UploadInput>
        </ImageInputSection>

        {images && (
          <ImageInputSection>
            <FilesList files={images} onDelete={onDeleteImage} />
          </ImageInputSection>
        )}
      </Wrapper>
    </Container>
  );
}

ListingImageInput.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  label: PropTypes.string.isRequired,
  onAddImages: PropTypes.func.isRequired,
  onDeleteImage: PropTypes.func.isRequired,
};

export default ListingImageInput;
