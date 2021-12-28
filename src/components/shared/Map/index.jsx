import Marker from 'components/shared/Marker';
import { googleMapApiKey } from 'config/config';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GoogleMapContainer from './map.styles';

const mapDefaults = {
  center: {
    lat: 39.84,
    lng: -74.85,
  },
  zoom: 6,
};

/**
 * Map component.
 *
 * @param {React.Component} ComponentOnMap Component that will appear on the map when hovering over the marker , this component must accept lng , lat , data as props.
 * @param {boolean} isMarkerShown Whether map markers or not.
 * @param {Array} listings Data needed for the Marker.
 *
 * @return {JSX.Element}
 */
function Map({ ComponentOnMap, isMarkerShown, listings }) {
  const [center, setCenter] = useState();
  const [data, setData] = useState([]);
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const [listingOnMap, setListingOnMap] = useState({});

  /**
   * Show listing on the map.
   *
   * @param {Object} listingData Listing Data to be shown for each marker , receives from the marker component when hovering.
   */
  const showListingOnMap = (listingData) => {
    setIsMarkerHovered(true);
    setListingOnMap(listingData);
  };

  /**
   * Get average coordinates.
   *
   * @param {Array} coordsList List of longitude or latitude.
   * @param {string} direction Lng or lat.
   *
   * @return {Number}
   */
  const getAverageCoordinate = (coordsList, direction) => {
    const total = coordsList.reduce((acc, current) => acc + current);
    const coordCenter = total
      ? total / coordsList.length
      : mapDefaults.center[direction];
    return coordCenter;
  };

  /**
   * Get map center.
   *
   * @return {Object} Center Object with lat & lng properties.
   */
  const getCenter = () => {
    const tempData = [...listings];
    const latDataList = tempData?.map((item) => item.location.lat);
    const lngDataList = tempData?.map((item) => item.location.lng);

    if (!latDataList || !lngDataList) {
      return mapDefaults.center;
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  return (
    <GoogleMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={googleMapApiKey}
        center={center}
        defaultCenter={mapDefaults.center}
        defaultZoom={mapDefaults.zoom}
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
            data={listingOnMap}
            lng={listingOnMap.location.lng}
            lat={listingOnMap.location.lat}
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
