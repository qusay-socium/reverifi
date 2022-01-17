/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import { ReactComponent as ChevronLeft } from 'assets/images/left-arrow.svg';
import { ReactComponent as ChevronRight } from 'assets/images/right-arrow.svg';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  ActiveImage,
  ActiveImageWrapper,
  Container,
  CustomPaging,
  InActiveImage,
  InActiveImageWrapper,
  SliderArrow,
  Wrapper,
} from './slider.styles';

/**
 * Use Custom next arrow for react-slick slider.
 *
 * @return {JSX.Element} Next arrow.
 */
function NextArrow({ onClick }) {
  return (
    <SliderArrow onClick={onClick} right="0%">
      <ChevronRight />
    </SliderArrow>
  );
}

/**
 * Use Custom previous arrow for react-slick slider.
 *
 * @return {JSX.Element} Previous arrow.
 */
function PrevArrow({ onClick }) {
  return (
    <SliderArrow onClick={onClick} left="0%">
      <ChevronLeft />
    </SliderArrow>
  );
}

/**
 * Listing page slider section.
 *
 * @param {Object} props        The component props.
 * @param {Object} props.images Listing page slider images.
 *
 * @return {JSX.Element}
 */
function ListingPageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    beforeChange: (current, next) => setImageIndex(next),
    centerMode: true,
    centerPadding: '25%',
    customPaging(i) {
      return <img src={images[i].src} alt={images[i].alt} />;
    },
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          centerPadding: '0%',
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {images.map((img, idx) =>
            idx === imageIndex ? (
              <ActiveImageWrapper key={img.alt}>
                <ActiveImage src={img.src} alt={img.alt} />
                <CustomPaging>
                  {imageIndex + 1} / {images.length} Photo
                </CustomPaging>
              </ActiveImageWrapper>
            ) : (
              <InActiveImageWrapper key={img.alt}>
                <InActiveImage src={img.src} alt={img.alt} />
              </InActiveImageWrapper>
            )
          )}
        </Slider>
      </Wrapper>
    </Container>
  );
}

ListingPageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingPageSlider;
