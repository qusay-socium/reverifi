/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { StyledInputGroup, StyledInput } from './input.style';

// eslint-disable-next-line react/function-component-definition
const Input = ({ leftElement, rightElement, size, placeholder }) => (
  <StyledInputGroup>
    {leftElement}
    <StyledInput size={size} placeholder={placeholder} />
    {rightElement}
  </StyledInputGroup>
);

Input.propTypes = {
  leftElement: PropTypes.element,
  placeholder: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
  size: PropTypes.string.isRequired,
};

Input.defaultProps = {
  leftElement: null,
  rightElement: null,
};

export default Input;
