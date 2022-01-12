import PropTypes from 'prop-types';
import React from 'react';
import StyledButton from './Button.style';

/**
 * Component for rendering buttons.
 *
 * @param {boolean}  ariaLabel        Aria label for button.
 * @param {node}     children         Child nodes to render.
 * @param {boolean}  [disabled=false] Whether button disabled.
 * @param {Object}   forwardedRef     Forwarded ref from a parent component.
 * @param {Function} onClick          Event get fired when button clicked.
 * @param {string}   [type='button']  Button type (can be 'button' or 'submit').
 * @param {Object}   props            Object used to pass props for component.
 *
 */
function Button({
  ariaLabel,
  children,
  disabled,
  forwardedRef,
  onClick,
  type,
  ...props
}) {
  return (
    <StyledButton
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      ref={forwardedRef}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  ariaLabel: 'Button',
  disabled: false,
  forwardedRef: null,
  onClick: null,
  type: 'button',
};

export default Button;
