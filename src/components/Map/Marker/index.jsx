import PropTypes from 'prop-types';
import React from 'react';
import pinImg from '../../../assets/icons/Group-red.svg';

/**
 * Map component.
 *
 * @param {Object} data data needed for the rendered component
 * @param {lat} number latitude to specifiy where the element has to be shown on the map
 * @param {lng} number longitude to specifiy where the element has to be shown on the map
 * @param {Function} onMouseOverHandler hover event handler
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
  onMouseOverHandler: PropTypes.func,
};

Marker.defaultProps = {
  data: {
    title: 'No Title Available',
  },
  lat: 0,
  lng: 0,
  onMouseOverHandler: () => {},
};

export default Marker;
