/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import {
  DeleteIcon,
  SelectedItem,
  SelectedItemInnerSection,
  SelectedItemsList,
  ThumbnailWrapper,
} from './filesList.styles';

function FilesList({ files, onDelete }) {
  return (
    <SelectedItemsList>
      <span>{files.length} Files Selected</span>
      {files.map((file, i) => (
        <SelectedItem key={i}>
          <SelectedItemInnerSection>
            <ThumbnailWrapper>
              <img src={URL.createObjectURL(file)} alt="test" />
            </ThumbnailWrapper>

            {file.name}
          </SelectedItemInnerSection>

          <SelectedItemInnerSection>
            <span>{file.size / 1000}kb</span>

            {onDelete && <DeleteIcon onClick={() => onDelete(file)} />}
          </SelectedItemInnerSection>
        </SelectedItem>
      ))}
    </SelectedItemsList>
  );
}

FilesList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDelete: PropTypes.func,
};

FilesList.defaultProps = {
  onDelete: null,
};

export default FilesList;
