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
import React from 'react';

const {
  price,
  location,
  images,
  statistics,
  overview,
  details,
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
  return (
    <ShowModalProvider>
      <Offer data={{ location, price }} />
      <ListingPageSlider images={images} />
      <Overview data={{ overview, statistics }} />
      <Details details={details} />
      <Features data={{ features, icons: featuresIcons }} />
      <Location />
      <SimilarListings similarListings={similarListings} />
      <ListingShareModal />
    </ShowModalProvider>
  );
}

export default ListingPage;
