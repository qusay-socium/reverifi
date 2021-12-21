import locationImg from 'assets/images/location.svg';
import React from 'react';
import { Container, Image, Title } from './location.styles';

/**
 * Listing page location section.
 *
 * @return {JSX.Element}
 */
function Location() {
  return (
    <Container>
      <Title>Location</Title>
      <Image src={locationImg} alt="map" />
    </Container>
  );
}

export default Location;
