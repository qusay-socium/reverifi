import locationImg from 'assets/images/location.svg';
import React from 'react';
import {
  Title,
  Container,
} from 'components/listing-page/Details/details.styles';
import { Image } from './location.styles';

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
