import ClaimAddress from 'components/ClaimAddress';
import Events from 'components/events/Events';
import ExploreListing from 'components/ExploreListing';
import FeaturedListing from 'components/FeaturedListing';
import ReverifiPlus from 'components/ReverifiPlus';
import Footer from 'components/shared/Footer';
import Storyboard from 'components/Storyboard';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
function Home() {
  return (
    <div>
      <Storyboard />
      <FeaturedListing />
      <Events />
      <ReverifiPlus />
      <ExploreListing />
      <ClaimAddress />
      <Footer />
    </div>
  );
}

export default Home;
