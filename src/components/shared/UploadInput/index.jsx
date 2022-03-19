import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputWrapper } from './uploadInput.styles';

/**
 * Renders a form file input
 *
 * @param  {string}      acceptedType Accepted files types.
 * @param  {boolean}     multiple     Determines files quantity to single or many.
 * @param  {Function}    setFiles     A function to set and update files.
 * @param  {JSX.Element} children     The child component as an interface for the file input.
 *
 * @return {JSX.Element}
 */
function UploadInput({ acceptedTypes, multiple, onAddFiles, children }) {
  const isFileTypeAccepted = (file) =>
    !acceptedTypes || acceptedTypes.includes(file.type);

  const handleChange = (event) => {
    const acceptedFiles = [...event.target.files].filter((file) =>
      isFileTypeAccepted(file)
    );

    if (!acceptedFiles.length) return;

    onAddFiles(acceptedFiles);

    event.target.value = null;
  };

  return (
    <InputWrapper>
      <Input
        accept={acceptedTypes}
        multiple={multiple}
        onChange={handleChange}
        type="file"
      />
      {children}
    </InputWrapper>
  );
}

UploadInput.propTypes = {
  acceptedTypes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  onAddFiles: PropTypes.func.isRequired,
};

UploadInput.defaultProps = {
  acceptedTypes: null,
  multiple: false,
};

export default UploadInput;
