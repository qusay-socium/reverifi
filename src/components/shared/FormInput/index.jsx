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
  maxLength,
  step,
  labelIconElement,
  defaultValue,
  required,
  disabled,
  onClickInputKey,
}) {
  return (
    <Container>
      {label && (
        <Label htmlFor={id || name}>
          {labelIconElement}
          {label}
          {required && <span>*</span>}
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
        maxLength={maxLength}
        step={step}
        defaultValue={defaultValue}
        error={error}
        disabled={disabled}
        onKeyDown={onClickInputKey}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

FormInput.propTypes = {
  defaultValue: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelIconElement: PropTypes.node,
  max: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickInputKey: PropTypes.func,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  rounded: PropTypes.bool,
  step: PropTypes.string,
  type: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  defaultValue: null,
  disabled: false,
  error: null,
  id: null,
  labelIconElement: null,
  max: null,
  maxLength: null,
  min: null,
  onClickInputKey: () => {},
  placeholder: '',
  register: null,
  required: false,
  rounded: true,
  step: null,
};

export default FormInput;
