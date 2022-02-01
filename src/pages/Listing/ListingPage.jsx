import Details from 'components/listing-page/Details';
import Features from 'components/listing-page/Features';
import Offer from 'components/listing-page/Offer';
import { Location } from 'components/listing-page/Offer/offer.styles';
import Overview from 'components/listing-page/Overview';
import ListingPageSlider from 'components/listing-page/Slider';
import ListingShareModal from 'components/ListingShareModal';
import ShowModalProvider from 'contexts/ShowModalContext/index';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { getListingData } from 'services/listing-create-service';
import { useParams } from 'react-router-dom';

const {
  location,
  images,
  statistics,
  features,
  featuresIcons,
  similarListings,
} = { ...data };
=======
import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { getListingsById } from 'services/listing';
>>>>>>> connect listing page wit backend

/**
 * Listing page component.
 *
 * @return {JSX.Element}
 */
function ListingPage() {
  const { id } = useParams();

<<<<<<< HEAD
  const [detailsData, setDetailsData] = useState({
    bedrooms: '',
    fullBathrooms: '',
    garage: '',
    homeArea: '',
    lotArea: '',
    lotDimensions: '',
    overview: '',
    partialBathrooms: '',
    price: '0',
    propertyCondition: '',
    rooms: '',
    yearBuilt: '',
  });

  const {
    yearBuilt,
    bedrooms,
    fullBathrooms,
    partialBathrooms,
    homeArea,
    lotArea,
    lotDimensions,
    rooms,
    garage,
    propertyCondition,
  } = detailsData;
=======
  const [listingDetails, setListingDetails] = useState({});
>>>>>>> connect listing page wit backend

  const getListingDetails = async (listingId) => {
    setListingDetails(await getListingsById(listingId));
  };

  useEffect(() => {
    if (id) {
      getListingDetails(id);
    }
  }, [id]);

  if (listingDetails.id) {
    return (
      <ShowModalProvider>
        <Offer address={listingDetails.address} price={listingDetails.price} />
        <ListingPageSlider images={listingDetails.images} />
        <Overview listing={listingDetails} />
        <Details details={listingDetails} />
        <Features features={listingDetails.features} />
        <Location />
        {/* <SimilarListings similarListings={similarListings} /> */}
        <ListingShareModal />
      </ShowModalProvider>
    );
  }
  return null;
}

export default ListingPage;
