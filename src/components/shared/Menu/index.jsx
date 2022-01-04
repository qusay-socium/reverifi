import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import debounce from 'utils/debounce';
import { getScrollbarWidth } from 'utils/window';
import { OverLay, StyledMenu } from './menu.styles';

/**
 * Renders anchored Menu.
 *
 * @param {Object} anchorRef Anchor element reference.
 * @param {boolean} isOpen State of the menu.
 * @param {JSX.Element} children Children element.
 * @param {Function} onClose On close handler.
 * @param {boolean} [isSticky=false] Is anchor sticky.
 *
 * @return {JSX.Element}
 */
function Menu({ anchorRef, isOpen, children, onClose, isSticky }) {
  const [anchorCoords, setAnchorCoords] = useState({});

  useLayoutEffect(() => {
    const updateCoords = () =>
      setAnchorCoords(anchorRef.current.getBoundingClientRect());

    updateCoords();
    const debouncedUpdateCoords = debounce(updateCoords, 50);

    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdateCoords();
    });

    if (isOpen) {
      resizeObserver.observe(document.documentElement);
    }
    return () => resizeObserver.disconnect();
  }, [isOpen, anchorRef]);

  return (
    <>
      <StyledMenu
        right={anchorCoords.right + getScrollbarWidth()}
        top={
          anchorCoords.bottom +
          (isSticky ? 0 : document.documentElement.scrollTop)
        }
        isOpen={isOpen}
      >
        {children}
      </StyledMenu>
      <OverLay isOpen={isOpen} onClick={onClose} />
    </>
  );
}

Menu.propTypes = {
  anchorRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSticky: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isSticky: false,
};

export default Menu;
