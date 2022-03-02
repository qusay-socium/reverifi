import React, { useEffect, useState } from 'react';
import {
  ImgContainer,
  CardsContainer,
} from 'components/transaction/advertisement/advertisement.styles';
import AgentCard from 'components/transaction/AgentCard';
import DataCard from 'components/transaction/DataCard';
import { getListingsById } from 'services/listing';
import { useParams } from 'react-router-dom';

/**
 * Advertisement.
 *
 * @param {String} listingId Id of showed listing.
 *
 * @return {JSX.Element} The apartment and Agent data.
 */
export default function Advertisement() {
  const { listingId } = useParams();
  const [listingDetails, setListingDetails] = useState({});

  const getListingDetails = async (id) => {
    const data = await getListingsById(id);
    setListingDetails(data);
  };

  useEffect(() => {
    getListingDetails(listingId);
    console.log(listingId);
  }, []);

  return (
    <ImgContainer image={listingDetails.images && listingDetails.images[0]}>
      <CardsContainer>
        <DataCard
          title={listingDetails.overview}
          address={listingDetails.address}
          price={listingDetails.price}
          bathtubs={listingDetails.fullBathrooms}
          rooms={listingDetails.rooms}
          lotArea={listingDetails.lotArea?.sqft}
          lotDimensions={listingDetails.lotDimensions?.sqft}
        />
        <AgentCard
          agentImg={listingDetails.agent?.userInfo?.image}
          agentName={listingDetails.agent?.name}
          companyName="Agent"
          email={listingDetails.agent?.email}
          phoneNumber={listingDetails.agent?.phone}
        />
      </CardsContainer>
    </ImgContainer>
  );
}
