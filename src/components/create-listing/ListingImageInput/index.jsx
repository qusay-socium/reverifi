import React from 'react';
import PropTypes from 'prop-types';
import FilesList from 'components/shared/FilesList';
import FormFileInput from 'components/shared/FormFileInput';
import {
  Container,
  ImageInputSection,
  Wrapper,
  InputInterface,
  UploadIcon,
} from './listingImageInput.styles';

function ListingImageInput({ images, onAddImages, onDeleteImage }) {
  return (
    <Container>
      <h2>Upload Images</h2>
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
