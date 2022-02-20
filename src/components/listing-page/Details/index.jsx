import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { splitCamelCaseString } from 'utils/helpers';
import {
  Container,
  DetailsItem,
  Key,
  Title,
  Value,
  Wrapper,
} from './details.styles';

/**
 * Listing page details section.

 * @param {Object} details Details section data.
 *
 * @return {JSX.Element}
 */
function Details({ details }) {
  const [listingDetails, setListingDetails] = useState([]);
  const [listingSize, setListingSize] = useState([]);

  const {
    rooms,
    bedrooms,
    lotArea,
    lotDimensions,
    yearBuilt,
    fullBathrooms,
    homeArea,
    garages,
    partialBathrooms,
  } = details;

  useEffect(() => {
    setListingDetails([
      { rooms },
      { bedrooms },
      { yearBuilt },
      { fullBathrooms },
      { garages },
      { partialBathrooms },
    ]);
    setListingSize([{ lotArea }, { lotDimensions }, { homeArea }]);
  }, [
    rooms,
    bedrooms,
    lotArea,
    lotDimensions,
    yearBuilt,
    fullBathrooms,
    homeArea,
    garages,
    partialBathrooms,
  ]);

  if (listingDetails.length === 0 && listingDetails.length === 0) return null;
  return (
    <Container>
      <Title> Details </Title>
      <Wrapper>
        {listingDetails.map((key) => (
          <DetailsItem key={Object.keys(key)}>
            <Key>{splitCamelCaseString(Object.keys(key)[0])}:</Key>
            <Value> {Object.values(key)} </Value>
          </DetailsItem>
        ))}
        {listingSize.map((key) => (
          <DetailsItem key={Object.keys(key)}>
            <Key>{splitCamelCaseString(Object.keys(key)[0])}:</Key>
            <Value> {Object.values(key)[0].sqft} </Value>
          </DetailsItem>
        ))}
      </Wrapper>
    </Container>
  );
}

Details.propTypes = {
  details: PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.string,
    fullBathrooms: PropTypes.number,
    garages: PropTypes.number,
    homeArea: PropTypes.shape({
      sqft: PropTypes.string,
    }),
    lotArea: PropTypes.shape({
      sqft: PropTypes.string,
    }),
    lotDimensions: PropTypes.shape({
      sqft: PropTypes.string,
    }),
    partialBathrooms: PropTypes.number,
    rooms: PropTypes.number,
    yearBuilt: PropTypes.number,
  }).isRequired,
};

export default Details;
