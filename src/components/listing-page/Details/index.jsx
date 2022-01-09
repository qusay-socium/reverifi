import PropTypes from 'prop-types';
import React from 'react';
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
 *
 * @param {Object} props         The component props.
 * @param {Object} props.details The component data.
 *
 * @return {JSX.Element}
 */
function Details({ details }) {
  return (
    <Container>
      <Title> Details </Title>
      <Wrapper>
        {Object.keys(details).map((key) => (
          <DetailsItem key={key}>
            <Key> {key}:</Key>
            <Value> {details[key]} </Value>
          </DetailsItem>
        ))}
      </Wrapper>
    </Container>
  );
}

Details.propTypes = {
  details: PropTypes.shape({
    Baths: PropTypes.string.isRequired,
    Beds: PropTypes.string.isRequired,
    Garages: PropTypes.string.isRequired,
    'Home Area': PropTypes.string.isRequired,
    'Lot Dimensions': PropTypes.string.isRequired,
    'Lot area': PropTypes.string.isRequired,
    Rooms: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
    'Year Built': PropTypes.string.isRequired,
  }).isRequired,
};

export default Details;
