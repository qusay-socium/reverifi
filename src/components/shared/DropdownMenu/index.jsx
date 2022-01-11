import propTypes from 'prop-types';
import React from 'react';
import {
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
  children,
  label,
  name,
  labelIcon: LabelIcon,
  leftIcon,
  small,
  smallBorderRadius,
  dark,
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
        leftIcon={leftIcon}
        small={small}
        smallBorderRadius={smallBorderRadius}
        dark={dark}
      >
        <StyledSelect
          name={name}
          id={name}
          leftIcon={leftIcon}
          small={small}
          dark={dark}
        >
          {children}
        </StyledSelect>
      </SelectContainer>
    </div>
  );
}

DropdownMenu.defaultProps = {
  dark: false,
  label: null,
  labelIcon: null,
  leftIcon: null,
  small: false,
  smallBorderRadius: false,
};

DropdownMenu.propTypes = {
  children: propTypes.node.isRequired,
  dark: propTypes.bool,
  label: propTypes.string,
  labelIcon: propTypes.oneOfType([
    propTypes.func,
    propTypes.shape({ current: propTypes.instanceOf(Element) }),
  ]),
  leftIcon: propTypes.string,
  name: propTypes.string.isRequired,
  small: propTypes.bool,
  smallBorderRadius: propTypes.bool,
};

export default DropdownMenu;
