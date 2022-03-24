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

function FilesList({ files, onDelete, headerText, filesLimit }) {
  return (
    <SelectedItemsList>
      <TextContainer>
        <NumOfImagesText>{headerText}</NumOfImagesText>
        <MaxLengthMessage max={files?.length === filesLimit}>
          ({files?.length} / {filesLimit})
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

FilesList.defaultProps = {
  filesLimit: 10,
  headerText: 'Uploaded images',
  onDelete: null,
};

FilesList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.any).isRequired,
  filesLimit: PropTypes.number,
  headerText: PropTypes.string,
  onDelete: PropTypes.func,
};

export default FilesList;
