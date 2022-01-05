import Card from 'components/home/FeaturedListingCard';
import Button from 'components/shared/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import {
  Container,
  SeeMore,
  SimilarItemsList,
  StyledSlide,
  Title,
  Wrapper,
} from './similar-listings.styles';

const slideBreakPoints = [
  {
    breakpoint: 650,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1,
    },
  },
];

/**
 * Home page featured listing section.
 *
 * @param {Object} props                 The component props.
 * @param {Object} props.similarListings The component data.
 *
 * @return {JSX.Element}
 */
function SimilarListings({ similarListings }) {
  return (
    <Container>
      <Title>Similar Listings</Title>

      <Wrapper>
        <StyledSlide>
          <Slider
            dots
            speed={500}
            slidesToShow={2}
            slidesToScroll={2}
            responsive={slideBreakPoints}
            dotsClass="slide-dots"
            arrows={false}
            easing="ease-in-out"
          >
            {similarListings?.map((item) => (
              <Card data={item} key={item.title} />
            ))}
          </Slider>
        </StyledSlide>
      </Wrapper>

      <SimilarItemsList>
        {similarListings?.map((item) => (
          <Card data={item} key={item.title} />
        ))}
      </SimilarItemsList>

      <SeeMore>
        <Button
          aria-label="See more"
          type="button"
          onClick={() => {
            /* To Do */
          }}
        >
          See more
        </Button>
      </SeeMore>
    </Container>
  );
}

SimilarListings.propTypes = {
  similarListings: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      personImg: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      services: PropTypes.shape({
        bathroom: PropTypes.number.isRequired,
        bedroom: PropTypes.number.isRequired,
      }).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SimilarListings;
