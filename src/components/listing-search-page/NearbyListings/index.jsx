import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  NearbyContainer,
  NearbyItems,
  NearbyItemsContainer,
  NearbyItemsWrapper,
  NearbyText,
} from './nearby-listings.style';

/**
 * NearbyListings  component.
 *
 * @return {JSX.Element}
 */
function NearbyListings() {
  return (
    <NearbyContainer>
      <NearbyText>Nearby Real Estate</NearbyText>
      <NearbyItemsContainer>
        <NearbyItemsWrapper>
          <NearbyItems>Condominiums for Sale Near Me</NearbyItems>
          <NearbyItems>Houses for Sale Near Me</NearbyItems>
          <NearbyItems>Co-op for Sale Near Me by Owner</NearbyItems>
          <NearbyItems>Single Family Home Near Me</NearbyItems>
        </NearbyItemsWrapper>

        <NearbyItemsWrapper>
          <NearbyItems>Land for Sale Near Me</NearbyItems>
          <NearbyItems>Townhouse for Sale Near Me</NearbyItems>
          <NearbyItems>Multi Family Home Real Estate</NearbyItems>
          <NearbyItems>7989087 Real Estate</NearbyItems>
        </NearbyItemsWrapper>
      </NearbyItemsContainer>
    </NearbyContainer>
  );
}

export default NearbyListings;
