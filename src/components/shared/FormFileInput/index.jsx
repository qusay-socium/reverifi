import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputWrapper } from './formFileInput.styles';

/**
 * Renders a form file input
 *
 * @param  {string}       acceptedType  Accepted files types.
 * @param  {boolean}      multiple      Determines files quantity to single or many.
 * @param  {Function}     setFiles      A function to set and update files.
 * @param  {JSX.Element}  children      The child component as an interface for the file input.
 *
 * @return {JSX.Element}
 */
function FormFileInput({ acceptedTypes, multiple, onAddFiles, children }) {
  const isFileTypeAccepted = (f) =>
    !acceptedTypes || acceptedTypes.includes(f.type);

  const handleChange = (e) => {
    const acceptedFiles = [...e.target.files].filter((f) =>
      isFileTypeAccepted(f)
    );

    if (!acceptedFiles.length) return;

    onAddFiles(acceptedFiles);

    e.target.value = null;
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

FormFileInput.propTypes = {
  acceptedTypes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  multiple: PropTypes.bool,
  onAddFiles: PropTypes.func.isRequired,
};

FormFileInput.defaultProps = {
  acceptedTypes: null,
  multiple: false,
};

export default FormFileInput;
