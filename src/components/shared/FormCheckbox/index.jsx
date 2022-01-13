import PropTypes from 'prop-types';
import React from 'react';
import { Container, Input, Label } from './form-checkbox.style';

/**
 * Render form checkbox.
 *
 * @param {Object}   props                 The component props.
 * @param {string}   [props.id=null]       Input ID.
 * @param {string}   [props.label=null]    Label text.
 * @param {string}   props.name            Input name.
 * @param {Function} [props.onChange=null] The on change event.
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
      {label && <Label htmlFor={id || name}>{label}</Label>}
    </Container>
  );
}

FormCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  register: PropTypes.func,
};

FormCheckbox.defaultProps = {
  id: null,
  label: null,
  onChange: null,
  register: null,
};

export default FormCheckbox;
