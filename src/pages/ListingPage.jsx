import data from 'components/listing-page/data';
import Details from 'components/listing-page/Details';
import Features from 'components/listing-page/Features';
import Location from 'components/listing-page/Location';
import OfferDetails from 'components/listing-page/OfferDetails';
import Overview from 'components/listing-page/Overview';
import SimilarListings from 'components/listing-page/SimilarListings';
import ListingPageSlider from 'components/listing-page/Slider';
import Footer from 'components/shared/Footer';
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
    <>
      <OfferDetails data={{ location, price }} />
      <ListingPageSlider data={{ images }} />
      <Overview data={{ overview, statistics }} />
      <Details data={{ details }} />
      <Features data={{ features, icons: featuresIcons }} />
      <Location />
      <SimilarListings data={{ similarListings }} />
      <Footer />
    </>
  );
}

export default ListingPage;
