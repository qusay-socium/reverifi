import propTypes from 'prop-types';
import React from 'react';
import {
  Error,
  Placeholder,
  SelectContainer,
  StyledLabel,
  StyledSelect,
} from './dropdown-menu.styles';

/**
 * shared dropdown menu
 *
 * @param {JSX.Element} children the child component to wrap.
 * @param {String} label menu label
 * @param {String} name menu name
 * @param {JSX.Element} labelIcon menu label icon
 * @param {String} leftIcon icon inside the menu
 * @param {Boolean} small small menu height
 * @param {Boolean} smallBorderRadius small border radius
 * @param {Boolean} dark dark background
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
}) {
  return (
    <div>
      {label && (
        <StyledLabel htmlFor={name}>
          {LabelIcon && LabelIcon}
          <span>{label}</span>
        </StyledLabel>
      )}

      <SelectContainer
        dark={dark}
        leftIcon={leftIcon}
        small={small}
        smallBorderRadius={smallBorderRadius}
      >
        <StyledSelect
          dark={dark}
          id={name}
          leftIcon={leftIcon}
          name={name}
          small={small}
          {...(register ? register(name) : {})}
        >
          <Placeholder disabled selected>
            {placeholder}
          </Placeholder>

          {options?.map((value, index) => (
            <option value={value} key={index.toString()}>
              {value}
            </option>
          ))}
        </StyledSelect>
        {error && <Error>{error}</Error>}
      </SelectContainer>
    </div>
  );
}

DropdownMenu.defaultProps = {
  dark: false,
  error: null,
  label: null,
  labelIcon: null,
  leftIcon: null,
  placeholder: '',
  register: null,
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
  options: propTypes.arrayOf(propTypes.any).isRequired,
  placeholder: propTypes.string,
  register: propTypes.func,
  small: propTypes.bool,
  smallBorderRadius: propTypes.bool,
};

export default DropdownMenu;
