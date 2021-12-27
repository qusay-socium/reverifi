import PropTypes from 'prop-types';
import React from 'react';
import { StyledInput, StyledInputGroup } from './input.style';

function Input({
  label,
  leftElement,
  name,
  onChange,
  placeholder,
  rightElement,
  shape,
  size,
  type,
  value,
}) {
  return (
    <StyledInputGroup shape={shape}>
      {leftElement}
      {label && <label htmlFor="input-field">{label}</label>}
      <StyledInput
        type={type}
        value={value}
        name={name}
        size={size}
        placeholder={placeholder}
        onChange={onChange}
      />
      {rightElement}
    </StyledInputGroup>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  leftElement: PropTypes.element,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rightElement: PropTypes.element,
  shape: PropTypes.oneOf(['pill', 'line', 'square']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['text', 'number', 'password']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Input.defaultProps = {
  label: null,
  leftElement: null,
  name: null,
  onChange: () => {},
  placeholder: '',
  rightElement: null,
  shape: 'pill',
  size: 'md',
  type: 'text',
};

export default Input;
