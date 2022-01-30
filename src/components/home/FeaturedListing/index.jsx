import Card from 'components/home/FeaturedListingCard';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import Slider from 'react-slick';
import getFeaturedListings from 'services/listing';
import data from './data';
import {
  SectionContainer,
  StyledSlide,
  Title,
} from './featured-listing.styles';

const slideBreakPoints = [
  {
    breakpoint: 650,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 1180,
    settings: {
      slidesToScroll: 2,
      slidesToShow: 2,
    },
  },
];

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  const [featuredListings, setFeaturedListings] = useState([]);

  /**
   * get featured listings data function
   */
  const fetchFeaturedListingsData = async () => {
    try {
      const listingsData = await getFeaturedListings();
      setFeaturedListings(listingsData);
    } catch (err) {
      setFeaturedListings(data);
      console.log(err);
    }
  };

  useEffectOnce(fetchFeaturedListingsData);

  return (
    <SectionContainer>
      <Title>Our Featured Listing</Title>
      <StyledSlide>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          responsive={slideBreakPoints}
          dotsClass="slide-dots"
          lazyLoad="ondemand"
          arrows={false}
          easing="ease-in-out"
        >
          {featuredListings?.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Slider>
      </StyledSlide>
    </SectionContainer>
  );
}

export default FeaturedListing;
