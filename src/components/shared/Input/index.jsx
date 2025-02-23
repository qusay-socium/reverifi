import PropTypes from 'prop-types';
import React from 'react';
import { StyledInput, StyledInputGroup } from './input.style';

// TODO: Fix input outline when focused.
function Input({ leftElement, rightElement, size, placeholder }) {
  return (
    <StyledInputGroup>
      {leftElement}
      <StyledInput size={size} placeholder={placeholder} />
      {rightElement}
    </StyledInputGroup>
  );
}

Input.propTypes = {
  leftElement: PropTypes.element,
  placeholder: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
  size: PropTypes.string,
};

Input.defaultProps = {
  leftElement: null,
  rightElement: null,
  size: 'md',
};

export default Input;
