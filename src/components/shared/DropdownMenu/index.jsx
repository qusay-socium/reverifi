import propTypes from 'prop-types';
import React from 'react';
import {
  ErrorMessage,
  Placeholder,
  RequiredStar,
  SelectContainer,
  StyledLabel,
  StyledSelect,
} from './dropdown-menu.styles';

/**
 * shared Dropdown Menu
 *
 * @param {Boolean} dark dark color: ;
 * @param {String} label menu label
 * @param {JSX.Element} labelIcon menu label icon element
 * @param {String} leftIcon left icon inside the menu
 * @param {String} name menu name
 * @param {String} placeholder menu placeholder
 * @param {Boolean} small small size menu
 * @param {Boolean} smallBorderRadius small border radius menu
 * @param {Array} options menu options
 * @param {String} error validation error
 * @param {Function} register validation register function
 * @param {Boolean} required if true add red star (*) to the menu
 *
 * @return {JSX.Element}
 */
function DropdownMenu({
  dark,
  label,
  labelIcon: LabelIcon,
  leftIcon,
  name,
  placeholder,
  small,
  smallBorderRadius,
  options,
  error,
  register,
  required,
  onChange,
}) {
  return (
    <>
      {label && (
        <StyledLabel htmlFor={name}>
          {LabelIcon && LabelIcon}
          <span>{label}</span>
          {required && <RequiredStar>*</RequiredStar>}
        </StyledLabel>
      )}

      <SelectContainer
        dark={dark}
        leftIcon={leftIcon}
        small={small}
        smallBorderRadius={smallBorderRadius}
        error={error}
      >
        <StyledSelect
          dark={dark}
          id={name}
          leftIcon={leftIcon}
          name={name}
          small={small}
          {...(register ? register(name) : {})}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          <Placeholder disabled selected value="">
            {placeholder}
          </Placeholder>

          {options?.map(({ value, option }) => (
            <option value={value} key={value}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </SelectContainer>
      {register && <ErrorMessage>{error || ''}</ErrorMessage>}
    </>
  );
}

DropdownMenu.defaultProps = {
  dark: false,
  error: null,
  label: null,
  labelIcon: null,
  leftIcon: null,
  onChange: () => {},
  placeholder: '',
  register: null,
  required: false,
  small: false,
  smallBorderRadius: false,
};

DropdownMenu.propTypes = {
  dark: propTypes.bool,
  error: propTypes.string,
  label: propTypes.string,
  labelIcon: propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
  ]),
  leftIcon: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func,
  options: propTypes.arrayOf(propTypes.any).isRequired,
  placeholder: propTypes.string,
  register: propTypes.func,
  required: propTypes.bool,
  small: propTypes.bool,
  smallBorderRadius: propTypes.bool,
};

export default DropdownMenu;
