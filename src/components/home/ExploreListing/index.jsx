import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { listingPaths } from 'utils/appPaths';
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
  const navigate = useNavigate();

  const handleSearch = (searchKey) => {
    navigate(`${listingPaths.search}?key=${searchKey}`);
  };

  const getItems = () =>
    data.map(({ city, img, searchKey, numOfListings }) => (
      <ImgContainer
        key={city}
        onClick={() => {
          handleSearch(searchKey);
        }}
      >
        <StyledImg src={img} alt="Logo" />
        <Overlay>
          <ImgContent>
            <ImgHeader>{city}</ImgHeader>
            <ImgListings>
              <span>{numOfListings}</span> Listings
            </ImgListings>
          </ImgContent>
        </Overlay>
      </ImgContainer>
    ));

  return (
    <MainContainer>
      <MainHeader>Explore Our Listings</MainHeader>
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
