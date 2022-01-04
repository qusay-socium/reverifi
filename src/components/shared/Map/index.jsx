/* eslint-disable react-hooks/exhaustive-deps */
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Marker from '../Marker';
import defaultMapData from './map-constants';
import { GoogleMapContainer } from './map.styles';

/**
 * Map component.
 *
 * @param {React.Component} ComponentOnMap  Component that will appear on the map when hovering over the marker , this component must accept lng , lat , data as props.
 * @param {boolean}         isMarkerShown   Wheather map markers or not.
 * @param {Array}           listings        Data needed for the Marker.
 *
 * @return {JSX.Element}
 */
function Map({ ComponentOnMap, isMarkerShown, listings }) {
  const [center, setCenter] = useState();
  const [data, setData] = useState([]);
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const [listingonMap, setListingonMap] = useState({});
  const { center: defaultCenter, zoom, apiKey } = defaultMapData;

  /**
   * Show listing on the map.
   *
   * @param {Object}  listingData  Listing Data to be shown for each marker , recieves from the marker component when hovering.
   *
   */
  const showListingOnMap = (listingData) => {
    setIsMarkerHovered(true);
    setListingonMap(listingData);
  };

  /**
   * get Average Coordinates.
   *
   * @param {Array}   coordsList  List of longitude or latitude.
   * @param {string}  direction   lng or lat
   *
   * @return {Number}
   */
  const getAverageCoordinate = (coordsList, direction) => {
    const total = coordsList.reduce((acc, current) => acc + current);
    const coordCenter = total
      ? total / coordsList.length
      : defaultCenter[direction];
    return coordCenter;
  };

  /**
   * get Map Center.
   *
   * @return {Object} Center Object with lat & lng properties.
   */
  const getCenter = () => {
    const tempData = [...listings];
    const latDataList = tempData?.map((item) => item.location.lat);
    const lngDataList = tempData?.map((item) => item.location.lng);

    if (!latDataList || !lngDataList) return defaultCenter;

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
        bootstrapURLKeys={apiKey}
        center={center}
        defaultCenter={defaultCenter}
        defaultZoom={zoom}
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
