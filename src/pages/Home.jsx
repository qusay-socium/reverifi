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
import styled from 'styled-components';

export const DetailedCardContainer = styled.div`
  height: auto;
  width: 18.75rem;
`;

function DetailedCard({ data: x }) {
  return (
    <DetailedCardContainer>
      <Card data={x} />
    </DetailedCardContainer>
  );
}

DetailedCard.propTypes = {
  data: PropTypes.shape(PropTypes.any),
};

DetailedCard.defaultProps = {
  data: {},
};

const maxLong = -74.871826;
const minLong = -74.9;
const minLat = 39.833851;
const maxLat = 39.84;

const randomIntFromInterval = (min, max) => Math.random() * (max - min) + min;

const listings = data.map((obj) => ({
  ...obj,
  location: {
    lat: randomIntFromInterval(minLat, maxLat),
    lng: randomIntFromInterval(minLong, maxLong),
    location: obj.location,
  },
}));

/**
 * Home page component.
 *
 * @return {JSX.Element}
 */
function Home() {
  return (
    <div>
      {/* <Storyboard />
      <FeaturedListing />
      <Events />
      <ReverifiPlus />
      <ExploreListing />
      <ClaimAddress />
      <Footer /> */}
      <Map ComponentOnMap={DetailedCard} isMarkerShown listings={listings} />
    </div>
  );
}

export default Home;
