/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Input, Label } from './form-checkbox.style';

/**
 * Render form checkbox.
 *
 * @param {Object} props The component props.
 * @param {string} [props.id=null] Input ID.
 * @param {string} [props.label=null] Label text.
 * @param {string} props.name Input name.
 * @param {Function} [props.onChange] The on change event.
 * @param {Function} [props.register=null] The react-hook-form register function.
 *
 * @return {JSX.Element}
 */
function FormCheckbox({ id, label, name, onChange, register }) {
  return (
    <Container>
      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        onChange={onChange}
        type="checkbox"
      />
      {label && <Label>{label}</Label>}
    </Container>
  );
}

FormCheckbox.propTypes = {
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

FormCheckbox.defaultProps = {
  error: null,
  id: null,
  label: null,
  onChange: () => {},
  placeholder: null,
  register: null,
  rounded: true,
  type: 'text',
};
export default FormCheckbox;
