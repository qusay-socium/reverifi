import data from 'components/listing-page/data';
import Details from 'components/listing-page/Details';
import Features from 'components/listing-page/Features';
import Location from 'components/listing-page/Location';
import Offer from 'components/listing-page/Offer';
import Overview from 'components/listing-page/Overview';
import SimilarListings from 'components/listing-page/SimilarListings';
import ListingPageSlider from 'components/listing-page/Slider';
import ListingShareModal from 'components/ListingShareModal';
import ShowModalProvider from 'contexts/ShowModalContext/index';
import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { getListingData } from 'services/listing-create-service';

const {
  location,
  images,
  statistics,
  features,
  featuresIcons,
  similarListings,
} = { ...data };

/**
 * Listing page component.
 *
 * @return {JSX.Element}
 */
function ListingPage() {
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState({
    bedrooms: '',
    fullBathrooms: '',
    garage: '',
    homeArea: '',
    lotArea: '',
    lotDimensions: '',
    partialBathrooms: '',
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

  const details = {
    Bedrooms: bedrooms,
    'Full bathrooms': fullBathrooms,
    Garage: garage,
    'Home area': `${homeArea} sqft`,
    'Lot area': `${lotArea} sqft`,
    'Lot dimensions': `${lotDimensions} sqft`,
    'Partial Bathrooms': partialBathrooms,
    'Property condition': propertyCondition,
    Rooms: rooms,
    'Year Built': yearBuilt,
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getListingData(id);
      setDetailsData(response);
    }

    if (id) fetchData();
  }, [id]);

  return (
    <ShowModalProvider>
      <Offer data={{ location, price: detailsData.price }} />
      <ListingPageSlider images={images} />
      <Overview data={{ overview: detailsData.overview, statistics }} />
      <Details details={details} />
      <Features data={{ features, icons: featuresIcons }} />
      <Location />
      <SimilarListings similarListings={similarListings} />
      <ListingShareModal />
    </ShowModalProvider>
  );
}

export default ListingPage;
