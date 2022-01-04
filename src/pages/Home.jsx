import ClaimAddress from 'components/home/ClaimAddress';
import Events from 'components/home/Events';
import ExploreListing from 'components/home/ExploreListing';
import FeaturedListing from 'components/home/FeaturedListing';
import ReverifiPlus from 'components/home/ReverifiPlus';
import Storyboard from 'components/home/Storyboard';
import Footer from 'components/shared/Footer';
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
