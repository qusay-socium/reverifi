import locationImg from 'assets/images/location.svg';
import React from 'react';
import { LocationContainer } from './listing-form-map.styles';
/**
 * Render the map section in the listing form.
 *
 * @return {JSX.Element}
 */
function ListingFormMap() {
  return (
    <LocationContainer>
      <img src={locationImg} alt="map" />
    </LocationContainer>
  );
}

export default ListingFormMap;
