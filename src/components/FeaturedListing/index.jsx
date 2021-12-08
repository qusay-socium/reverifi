import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { ReactComponent as ArrowL } from 'assets/icons/arrowL.svg';
import { ReactComponent as ArrowR } from 'assets/icons/arrowR.svg';
import Card from './Card';
import data from './data';
import Title, { StyledSlide } from './featured-listing.styles';
// import Scrollable from './Scrollable';

/**
 * Home page featured listing section.
 *
 * @return {JSX.Element}
 */
function FeaturedListing() {
  const slideBreakPoints = [
    {
      breakpoint: 650,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ];
  return (
    <>
      <Title>Our Featured Listing</Title>
      {/* custom sliders */}
      {/* <Scrollable initialCount={3} cardsNum={data.length}>
        {data.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </Scrollable> */}

      <StyledSlide>
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={3}
          nextArrow={<ArrowR />}
          prevArrow={<ArrowL />}
          responsive={slideBreakPoints}
          dotsClass="slideDots"
          centerPadding="50px"
          lazyLoad="ondemand"
        >
          {data.map((item) => (
            <Card data={item} key={item.title} />
          ))}
        </Slider>
      </StyledSlide>
    </>
  );
}

export default FeaturedListing;
