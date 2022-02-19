import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  Container,
  Items,
  ItemsContainer,
  ItemsWrapper,
  NearbyText,
} from './nearby-listings.style';

/**
 * NearbyListings  component.
 *
 * @return {JSX.Element}
 */
function NearbyListings() {
  return (
    <Container>
      <NearbyText>Nearby Real Estate</NearbyText>
      <ItemsContainer>
        <ItemsWrapper>
          <Items>Condominiums for Sale Near Me</Items>
          <Items>Houses for Sale Near Me</Items>
          <Items>Co-op for Sale Near Me by Owner</Items>
          <Items>Single Family Home Near Me</Items>
        </ItemsWrapper>

        <ItemsWrapper>
          <Items>Land for Sale Near Me</Items>
          <Items>Townhouse for Sale Near Me</Items>
          <Items>Multi Family Home Real Estate</Items>
          <Items>7989087 Real Estate</Items>
        </ItemsWrapper>
      </ItemsContainer>
    </Container>
  );
}

export default NearbyListings;
