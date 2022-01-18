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
 * @param {Object} props.details Details section data.
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
  details: PropTypes.shape({}).isRequired,
};

export default Details;
