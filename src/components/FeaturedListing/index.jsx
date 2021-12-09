import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import Card from './Card';
import data from './data';
import SectionContainer, {
  StyledSlide,
  Title,
} from './featured-listing.styles';
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
      breakpoint: 1180,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
  ];
  return (
    <SectionContainer>
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
          responsive={slideBreakPoints}
          dotsClass="slideDots"
          lazyLoad="ondemand"
          arrows={false}
          easing="ease-in-out"
        >
          {data.map((item) => (
            <Card data={item} key={item.title} />
          ))}
        </Slider>
      </StyledSlide>
    </SectionContainer>
  );
}

export default FeaturedListing;
