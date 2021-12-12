import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import { OverLay, StyledMenu } from './menu.styles';
import { debounce, getScrollbarWidth } from './util';

/**
 * Renders Anchored Menu.
 *
 * @param {Object}   anchorRef        Anchor element reference.
 * @param {boolean}  isOpen           State of the menu.
 * @param {children} children         JSX.Element.
 * @param {Function} onClose          OnClose handler.
 * @param {boolean}  [isSticky=false] Is anchor sticky.
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

  const getRight = () =>
    `calc(100vw - (${anchorCoords.right}px + ${getScrollbarWidth()}px))`;

  const getTop = () =>
    `${
      anchorCoords.bottom + (isSticky ? 0 : document.documentElement.scrollTop)
    }px`;

  return (
    <>
      <StyledMenu right={getRight()} top={getTop()} isOpen={isOpen}>
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
