/* eslint-disable react-hooks/exhaustive-deps */
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import defaultProps from './map-constants';
import { GoogleMapContainer } from './map.styles';
import Marker from './Marker';

/**
 * Map component.
 *
 * @param {React.Component} ComponentOnMap component that will appear on the map when hovering over marker , this component must accept lng , lat , data as props
 * @param {boolean} isMarkerShown specifiy map to be with or without markers
 * @param {Array} listings data needed for the Marker
 *
 * @return {JSX.Element}
 */

function Map({ ComponentOnMap, isMarkerShown, listings }) {
  const [center, setCenter] = useState();
  const [data, setData] = useState([]);
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const [listingonMap, setListingonMap] = useState({});

  const showListingOnMap = (listingData) => {
    setIsMarkerHovered(true);
    setListingonMap(listingData);
  };

  function getAverageCoordinate(coordsList, direction) {
    const total = coordsList.reduce((acc, current) => acc + current);
    const coordCenter = total
      ? total / coordsList.length
      : defaultProps.center[direction];
    return coordCenter;
  }

  const getCenter = () => {
    const tempData = [...listings];
    const latDataList = tempData?.map((item) => item.location.lat);
    const lngDataList = tempData?.map((item) => item.location.lng);

    if (!latDataList || !lngDataList) return defaultProps.center;

    const avgLngCenter = getAverageCoordinate(lngDataList, 'lng');
    const avgLatCenter = getAverageCoordinate(latDataList, 'lat');

    return { lat: avgLatCenter, lng: avgLngCenter };
  };

  useEffect(() => {
    const setupMap = () => {
      setData(listings);
      setCenter(getCenter());
    };

    setupMap();
  }, [listings]);

  return (
    <GoogleMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={defaultProps.apiKey}
        center={center}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChildMouseLeave={() => setIsMarkerHovered(false)}
        onClick={() => setIsMarkerHovered(false)}
      >
        {isMarkerShown &&
          data?.map((item) => {
            const {
              location: { lng, lat },
            } = item;
            return (
              <Marker
                key={item.location.lat}
                data={item}
                lat={lat}
                lng={lng}
                onMouseOverHandler={showListingOnMap}
              />
            );
          })}
        {isMarkerHovered && (
          <ComponentOnMap
            data={listingonMap}
            lng={listingonMap.location.lng}
            lat={listingonMap.location.lat}
          />
        )}
      </GoogleMapReact>
    </GoogleMapContainer>
  );
}

Map.propTypes = {
  ComponentOnMap: PropTypes.func,
  isMarkerShown: PropTypes.bool,
  listings: PropTypes.arrayOf(PropTypes.object),
};

Map.defaultProps = {
  ComponentOnMap: () => {},
  isMarkerShown: false,
  listings: [],
};

export default Map;
