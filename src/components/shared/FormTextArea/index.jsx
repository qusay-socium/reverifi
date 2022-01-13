import {
  Container,
  Error,
  Label,
} from 'components/shared/FormInput/form-input.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Input, Labels, LimitMessage } from './form-text-area.styles';

/**
 * Render form text-area input.
 *
 * @param {Object}   props                         The component props.
 * @param {string}   [props.error=null]            Error message.
 * @param {string}   [props.id=null]               Input ID.
 * @param {string}   [props.label=null]            Label text.
 * @param {node}     [props.labelIconElement=null] Label icon element.
 * @param {string}   props.name                    Input name.
 * @param {Function} [props.onChange=null]         The on change event.
 * @param {string}   [props.placeholder='']        Input placeholder.
 * @param {Function} [props.register=null]         The react-hook-form register function.
 * @param {boolean}  [props.rounded=true]          Is input borderers rounded.
 * @param {string}   [props.value='']              Textarea input value.
 *
 * @return {JSX.Element}
 */
function TextAreaInput({
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  register,
  rounded,
  limit,
  value,
  labelIconElement,
}) {
  return (
    <Container>
      <Labels>
        {label && (
          <Label htmlFor={id || name}>
            {labelIconElement}
            {label}
          </Label>
        )}
        <LimitMessage color={limit <= 10 ? 'red' : null}>
          ({limit} chars left)
        </LimitMessage>
      </Labels>

      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        placeholder={placeholder}
        onChange={onChange}
        rounded={rounded}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

TextAreaInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelIconElement: PropTypes.node,
  limit: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
  value: PropTypes.string,
};

TextAreaInput.defaultProps = {
  error: null,
  id: null,
  label: null,
  labelIconElement: null,
  limit: null,
  onChange: null,
  placeholder: '',
  register: null,
  rounded: true,
  value: '',
};

export default TextAreaInput;
