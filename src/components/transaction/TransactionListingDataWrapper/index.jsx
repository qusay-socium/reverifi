import listingImage from 'assets/images/transaction-apartment.png';
import AgentCard from 'components/transaction/AgentCard';
import DataCard from 'components/transaction/DataCard';
import {
  CardsContainer,
  ImgContainer,
} from 'components/transaction/TransactionListingDataWrapper/transaction-listing-data-wrapper.styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getListingsById } from 'services/listing';

/**
 * Transaction Listing Data Wrapper
 *
 * @return {JSX.Element} The apartment and Agent data.
 */
export default function TransactionListingDataWrapper() {
  const { listingId } = useParams();
  const [listingDetails, setListingDetails] = useState({});

  const getListingDetails = async () => {
    const data = await getListingsById(listingId);
    setListingDetails(data);
  };

  useEffect(() => {
    getListingDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingId]);

  return (
    <ImgContainer
      image={
        listingDetails?.images ? listingDetails?.images?.[0] : listingImage
      }
    >
      <CardsContainer>
        <DataCard
          address={listingDetails?.address}
          propertyType={listingDetails?.propertyType?.type}
          price={listingDetails?.price}
          bathtubs={listingDetails?.fullBathrooms}
          rooms={listingDetails?.rooms}
          lotArea={listingDetails?.lotArea?.sqft}
          lotDimensions={listingDetails?.lotDimensions?.sqft}
        />
        <AgentCard
          agentImg={
            listingDetails.agent?.userInfo?.image ||
            listingDetails.owner?.userInfo?.image
          }
          agentName={listingDetails.agent?.name || listingDetails.owner?.name}
          companyName="Agent"
          email={listingDetails.agent?.email || listingDetails.owner?.email}
          phoneNumber={
            listingDetails.agent?.phone || listingDetails.owner?.phone
          }
        />
      </CardsContainer>
    </ImgContainer>
  );
}
