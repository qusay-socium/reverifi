import pinImg from 'assets/icons/Group-red.svg';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Marker component.
 *
 * @param {Function} onMouseOverHandler  Hover event handler.
 * @param {Object}   data                Data needed for the rendered component.
 *
 * @return {JSX.Element}
 */
function Marker({ data, onMouseOverHandler }) {
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <img
      src={pinImg}
      width={18}
      onMouseOver={() => onMouseOverHandler(data)}
      alt={data?.title}
    />
  );
}

Marker.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
  onMouseOverHandler: PropTypes.func.isRequired,
};

Marker.defaultProps = {
  data: {
    title: 'No Title Available',
  },
};

export default Marker;
