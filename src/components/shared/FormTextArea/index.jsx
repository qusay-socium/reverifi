import {
  Container,
  Error,
  Label,
} from 'components/shared/FormInput/form-input.styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
  defaultValue,
  onChange,
  required,
}) {
  const [charactersCount, setCharactersCount] = useState(0);

  return (
    <Container>
      <Labels hasLabel={label}>
        {label && (
          <Label htmlFor={id || name}>
            {labelIconElement}
            {label}
            {required && <span>*</span>}
          </Label>
        )}
        <LimitMessage color={limit === charactersCount ? 'red' : null}>
          {charactersCount >= 0
            ? `(${charactersCount}/${limit} chars)`
            : `(${limit} chars)`}
        </LimitMessage>
      </Labels>

      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        placeholder={placeholder}
        rounded={rounded}
        defaultValue={defaultValue}
        maxLength={limit}
        onChange={(event) => {
          onChange();
          setCharactersCount(event.target.value.length);
        }}
        onFocus={(event) => {
          setCharactersCount(event.target.value.length);
        }}
        error={error}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

TextAreaInput.propTypes = {
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelIconElement: PropTypes.node,
  limit: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  rounded: PropTypes.bool,
};

TextAreaInput.defaultProps = {
  defaultValue: null,
  error: null,
  id: null,
  label: null,
  labelIconElement: null,
  limit: null,
  onChange: () => {},
  placeholder: '',
  register: null,
  required: false,
  rounded: true,
};

export default TextAreaInput;
