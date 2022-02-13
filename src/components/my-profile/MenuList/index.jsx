import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const height = 30;

/**
 * Menu List component enhance react-select menu speed
 *
 * @param {Object} options react-select options
 * @param {Node} children react-select children
 * @param {Number} maxHeight react-select maxHeight
 * @param {Function} getValue react-select getValue function
 *
 * @return {*}
 */
function MenuList({ options, children, maxHeight, getValue }) {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;

  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
}

MenuList.propTypes = {
  children: PropTypes.node.isRequired,
  getValue: PropTypes.func.isRequired,
  maxHeight: PropTypes.node.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MenuList;
