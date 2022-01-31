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
  placeholder,
  register,
  rounded,
  limit,
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
          ({limit} chars)
        </LimitMessage>
      </Labels>

      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        placeholder={placeholder}
        rounded={rounded}
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
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
};

TextAreaInput.defaultProps = {
  error: null,
  id: null,
  label: null,
  labelIconElement: null,
  limit: null,
  placeholder: '',
  register: null,
  rounded: true,
};

export default TextAreaInput;
