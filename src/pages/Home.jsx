import ClaimAddress from 'components/home/ClaimAddress';
import Events from 'components/home/Events';
import ExploreListing from 'components/home/ExploreListing';
import FeaturedListing from 'components/home/FeaturedListing';
import ReverifiPlus from 'components/home/ReverifiPlus';
import Storyboard from 'components/home/Storyboard';
import ListingShareModal from 'components/ListingShareModal';
import Footer from 'components/shared/Footer';
import ShowModalProvider from 'contexts/ShowModalContext';
import React from 'react';

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
function Home() {
  return (
    <div>
      <ContactForm />
      <ScheduleVisit />
      <Storyboard />
      <ShowModalProvider>
        <FeaturedListing />
        <ListingShareModal />
      </ShowModalProvider>
      <Events />
      <ReverifiPlus />
      <ExploreListing />
      <ClaimAddress />
      <Footer />
    </div>
  );
}

export default Home;
