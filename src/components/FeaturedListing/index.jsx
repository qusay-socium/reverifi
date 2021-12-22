import React from 'react';
import Slider from 'react-slick';
import Card from './Card/Card';
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
          {data?.map((item) => (
            <Card data={item} key={item.title} />
          ))}
        </Slider>
      </StyledSlide>
    </SectionContainer>
  );
}

export default FeaturedListing;
