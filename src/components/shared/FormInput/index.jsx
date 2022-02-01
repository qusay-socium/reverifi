import PropTypes from 'prop-types';
import React from 'react';
import { Container, Error, Input, Label } from './form-input.styles';

/**
 * Render form input.
 *
 * @param {Object}   props                         The component props.
 * @param {string}   [props.error=null]            Error message.
 * @param {string}   [props.id=null]               Input ID.
 * @param {string}   [props.label=null]            Label text.
 * @param {node}     [props.labelIconElement=null] Label Icon.
 * @param {string}   props.name                    Input name.
 * @param {Function} [props.onChange = null]       The on change event.
 * @param {string}   [props.placeholder='']        Input placeholder.
 * @param {Function} [props.register=null]         The react-hook-form register function.
 * @param {boolean}  [props.rounded=true]          Is input borderers rounded.
 * @param {string}   [props.type='text']           Input type.
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
  min,
  max,
  step,
  labelIconElement,
  defaultValue,
}) {
  return (
    <Container>
      {label && (
        <Label htmlFor={id || name}>
          {labelIconElement}
          {label}
        </Label>
      )}
      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        rounded={rounded}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

FormInput.propTypes = {
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelIconElement: PropTypes.node,
  max: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
  step: PropTypes.string,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  defaultValue: null,
  error: null,
  id: null,
  label: null,
  labelIconElement: null,
  max: null,
  min: null,
  onChange: null,
  placeholder: '',
  register: null,
  rounded: true,
  step: null,
  type: 'text',
};

export default FormInput;
