/* eslint-disable react/jsx-props-no-spreading */
import {
  Container,
  Error,
  Label,
} from 'components/shared/FormInput/form-input.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Input } from './select.styles';

/**
 * Render form select input.
 *
 * @param {Object} props                    The component props.
 * @param {string} [props.error=null]       Error message.
 * @param {string} [props.id=null]          Input ID.
 * @param {string} [props.label=null]       Label text.
 * @param {string} props.name               Input name.
 * @param {Function} [props.onChange]       The on change event.
 * @param {string} [props.placeholder=null] Input placeholder.
 * @param {Function} [props.register=null]  The react-hook-form register function.
 * @param {boolean} [props.rounded=true]    Is input borderers rounded.
 * @param {String[]} props.options          The select menu options.
 *
 * @return {JSX.Element}
 */
function SelectInput({
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  register,
  rounded,
  options,
}) {
  return (
    <Container>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Input
        {...(register ? register(name) : {})}
        id={id || name}
        placeholder={placeholder}
        onChange={onChange}
        rounded={rounded}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Input>
      {error && <Error>{error}</Error>}
    </Container>
  );
}

SelectInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
};

SelectInput.defaultProps = {
  error: null,
  id: null,
  label: null,
  onChange: null,
  placeholder: null,
  register: null,
  rounded: true,
};

export default SelectInput;
