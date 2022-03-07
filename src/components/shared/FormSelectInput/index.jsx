import { ReactComponent as Arrow } from 'assets/icons/arrow-down.svg';
import {
  Container,
  Error,
  InputContainer,
  Label,
} from 'components/shared/FormInput/form-input.styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Input, Placeholder } from './select.styles';

/**
 * Render form select input.
 *
 * @param {Object}   props                         The component props.
 * @param {string}   [props.error=null]            Error message.
 * @param {string}   [props.id=null]               Input ID.
 * @param {string}   [props.label=null]            Label text.
 * @param {node}     [props.labelIconElement=null] Label Icon.
 * @param {string}   props.name                    Input name.
 * @param {Function} [props.onChange=null]         The on change event.
 * @param {string}   [props.placeholder='']        Input placeholder.
 * @param {Function} [props.register=null]         The react-hook-form register function.
 * @param {boolean}  [props.rounded=true]          Is input borderers rounded.
 * @param {String[]} props.options                 The select menu options.
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
  labelIconElement,
}) {
  return (
    <Container>
      {label && (
        <Label htmlFor={id || name}>
          {labelIconElement}
          {label}
        </Label>
      )}
      <InputContainer>
        <Input
          {...(register ? register(name) : {})}
          id={id || name}
          onChange={onChange}
          rounded={rounded}
        >
          <Placeholder disabled selected>
            {placeholder}
          </Placeholder>

          {options.map(({ type, id: typeId }) => (
            <option value={typeId} key={typeId}>
              {type}
            </option>
          ))}
        </Input>
        {error && <Error>{error}</Error>}
        <Arrow />
      </InputContainer>
    </Container>
  );
}

SelectInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelIconElement: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  rounded: PropTypes.bool,
};

SelectInput.defaultProps = {
  error: null,
  id: null,
  label: null,
  labelIconElement: null,
  onChange: null,
  placeholder: '',
  register: null,
  rounded: true,
};

export default SelectInput;
