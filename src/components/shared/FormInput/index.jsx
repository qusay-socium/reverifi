/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Error, Input, Label } from './form-input.styles';

/**
 * Render form input.
 *
 * @param {Object} props The component props.
 * @param {string} [props.error=null] Error message.
 * @param {string} [props.id=null] Input ID.
 * @param {string} [props.label=null] Label text.
 * @param {string} props.name Input name.
 * @param {Function} [props.onChange] The on change event.
 * @param {string} [props.placeholder=null] Input placeholder.
 * @param {Function} [props.register=null] The react-hook-form register function.
 * @param {boolean} [props.rounded=true] Is input borderers rounded.
 * @param {string} [props.type='text'] Input type.
 *
 * @return {JSX.Element}
 */
function FormInput({
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  register,
  rounded,
  type,
}) {
  return (
    <Container>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        rounded={rounded}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

FormInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  error: null,
  id: null,
  label: null,
  onChange: () => {},
  placeholder: null,
  register: null,
  rounded: true,
  type: 'text',
};

export default FormInput;
