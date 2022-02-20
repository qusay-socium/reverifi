import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserListings } from 'services/listing';
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
  const { id } = useParams();
  const [userListings, setUserListings] = useState([]);

  const fetchUserListings = async () => {
    const listings = await getUserListings(id, 3);
    setUserListings(listings.data);
  };

  useEffectOnce(fetchUserListings);

  return userListings.length ? (
    <ListingsContainer>
      <h2>Listings</h2>
      <CardsContainer cardsNum={userListings.length}>
        {userListings?.map(
          ({
            id: listingId,
            listingType,
            address,
            images,
            price,
            perPeriod,
            createdAt,
            propertyType,
            bedrooms,
            fullBathrooms,
            homeArea,
            lotArea,
          }) => (
            <Card key={listingId}>
              <CardImage
                listingType={listingType?.type}
                address={address}
                images={images}
              />
              <CardInformation
                id={listingId}
                price={price}
                perPeriod={perPeriod}
                createdAt={createdAt}
                propertyType={propertyType?.type}
                bedrooms={bedrooms}
                fullBathrooms={fullBathrooms}
                homeArea={homeArea?.sqft}
                lotArea={lotArea?.sqft}
              />
            </Card>
          )
        )}
      </CardsContainer>
    </ListingsContainer>
  ) : null;
}

export default AgentListings;
