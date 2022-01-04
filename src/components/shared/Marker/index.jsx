import pinImg from 'assets/icons/Group-red.svg';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Marker component.
 *
 * @param {Function} onMouseOverHandler  Hover event handler.
 * @param {Object}   data                Data needed for the rendered component.
 * @param {Number}   lat                 Latitude to specifiy where the element has to be shown on the map.
 * @param {Number}   lng                 Longitude to specifiy where the element has to be shown on the map.
 *
 * @return {JSX.Element}
 */
function Marker({ data, lat, lng, onMouseOverHandler }) {
  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <img
      lat={lat}
      lng={lng}
      src={pinImg}
      width={20}
      onMouseOver={() => onMouseOverHandler(data)}
      alt={data.title}
    />
  );
}

Marker.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }),
  lat: PropTypes.number,
  lng: PropTypes.number,
  onMouseOverHandler: PropTypes.func.isRequired,
};

Marker.defaultProps = {
  data: {
    title: 'No Title Available',
  },
  lat: 0,
  lng: 0,
};

export default Marker;
