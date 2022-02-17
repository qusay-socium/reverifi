import Details from 'components/listing-page/Details';
import Features from 'components/listing-page/Features';
import Offer from 'components/listing-page/Offer';
import { Location } from 'components/listing-page/Offer/offer.styles';
import Overview from 'components/listing-page/Overview';
import ListingPageSlider from 'components/listing-page/Slider';
import ListingShareModal from 'components/ListingShareModal';
import ShowModalProvider from 'contexts/ShowModalContext/index';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getListingsById } from 'services/listing';

/**
 * Listing page component.
 *
 * @return {JSX.Element}
 */
function ListingPage() {
  const { id } = useParams();

  const [listingDetails, setListingDetails] = useState({});

  const getListingDetails = async (listingId) => {
    setListingDetails(await getListingsById(listingId));
  };

  useEffect(() => {
    if (id) {
      getListingDetails(id);
    }
  }, [id]);

  if (!listingDetails?.id) return null;
  return (
    <ShowModalProvider>
      <Offer address={listingDetails?.address} price={listingDetails?.price} />
      <ListingPageSlider images={listingDetails?.images} />
      <Overview listing={listingDetails} />
      <Details details={listingDetails} />
      <Features features={listingDetails?.features} />
      <Location />
      <ListingShareModal />
    </ShowModalProvider>
  );
}

export default ListingPage;
