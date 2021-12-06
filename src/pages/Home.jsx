import ClaimAddress from 'components/ClaimAddress ';
import Events from 'components/Events';
import ExploreListing from 'components/ExploreListing';
import FeaturedListing from 'components/FeaturedListing';
import Footer from 'components/Footer';
import ReverifiPlus from 'components/ReverifiPlus';
import Storyboard from 'components/Storyboard';
import React from 'react';
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
