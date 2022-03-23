import PropTypes from 'prop-types';
import React from 'react';
import {
  DeleteIcon,
  MaxLengthMessage,
  NumOfImagesText,
  SelectedItem,
  SelectedItemInnerSection,
  SelectedItemsList,
  TextContainer,
  ThumbnailWrapper,
} from './filesList.styles';

function FilesList({ files, onDelete }) {
  return (
    <SelectedItemsList>
      <TextContainer>
        <NumOfImagesText>Uploaded images</NumOfImagesText>
        <MaxLengthMessage max={files?.length === 10}>
          ({files?.length} / 10)
        </MaxLengthMessage>
      </TextContainer>

      {files?.map((file) => (
        <SelectedItem key={file?.name}>
          <SelectedItemInnerSection>
            <ThumbnailWrapper>
              <img
                src={file?.name ? URL.createObjectURL(file) : file}
                alt="listingImg"
              />
            </ThumbnailWrapper>

            {file?.name}
          </SelectedItemInnerSection>

          <SelectedItemInnerSection>
            <span>{file?.size && `${file?.size / 1000}kb`}</span>

            {onDelete && <DeleteIcon onClick={() => onDelete(file)} />}
          </SelectedItemInnerSection>
        </SelectedItem>
      ))}
    </SelectedItemsList>
  );
}

FilesList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func,
};

FilesList.defaultProps = {
  onDelete: null,
};

export default FilesList;
