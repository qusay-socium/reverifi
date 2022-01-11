import PropTypes from 'prop-types';
import React from 'react';
import StyledButton from './Button.style';

/**
 * Component for rendering buttons.
 *
 * @param {boolean}  ariaLabel        Aria label for button.
 * @param {node}     children         Child nodes to render.
 * @param {boolean}  [disabled=false] Whether button disabled.
 * @param {Function} onClick          Event get fired when button clicked.
 * @param {string}   [type='button']  Button type (can be 'button' or 'submit').
 * @param {Object}   props            Object used to pass props for component.
 *
 */
function Button({ ariaLabel, children, disabled, onClick, type, ...props }) {
  return (
    <StyledButton
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * Aria label for button.
   */
  ariaLabel: PropTypes.string,
  /**
   * Child nodes to render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether button disabled
   */
  disabled: PropTypes.bool,
  /**
   * Event get fired when button clicked.
   */
  onClick: PropTypes.func,
  /**
   * Button type (can be 'button' or 'submit').
   */
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  ariaLabel: 'Button',
  disabled: false,
  onClick: null,
  type: 'button',
};

export default Button;
