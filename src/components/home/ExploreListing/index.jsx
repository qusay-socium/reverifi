import React from 'react';
import Slider from 'react-slick';
import data from './data';
import {
  ImgContainer,
  ImgContent,
  ImgHeader,
  ImgListings,
  ItemsContainer,
  MainContainer,
  MainHeader,
  Overlay,
  SliderContainer,
  StyledImg,
} from './explore-listing.styles';

/**
 * Home page explore listing section.
 *
 * @return {JSX.Element}
 */
function ExploreListing() {
  const getItems = () =>
    data.map((item) => (
      <ImgContainer key={item.city}>
        <StyledImg src={item.img} alt="Logo" />
        <Overlay>
          <ImgContent>
            <ImgHeader>{item.city}</ImgHeader>
            <ImgListings>
              <span>{item.numOfListings}</span> Listings
            </ImgListings>
          </ImgContent>
        </Overlay>
      </ImgContainer>
    ));

  return (
    <MainContainer>
      <MainHeader>Explore our Listings</MainHeader>
      <SliderContainer>
        <Slider
          dots
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          {getItems()}
        </Slider>
      </SliderContainer>
      <ItemsContainer>{getItems()}</ItemsContainer>
    </MainContainer>
  );
}

export default ExploreListing;
