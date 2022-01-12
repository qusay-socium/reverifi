import React from 'react';
import CardImage from '../CardImage';
import CardInformation from '../CardInformation/index';
import {
  Card,
  CardsContainer,
  ListingsContainer,
} from './agent-listings.style';

/**
 * Listing details section.
 *
 * @return {JSX.Element}
 */
function AgentListings() {
  return (
    <ListingsContainer>
      <h2>Listings</h2>
      <CardsContainer>
        {[1, 2, 3].map((index) => (
          <Card key={index}>
            <CardImage />
            <CardInformation />
          </Card>
        ))}
      </CardsContainer>
    </ListingsContainer>
  );
}

export default AgentListings;
