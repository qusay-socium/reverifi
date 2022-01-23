import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSearch = (searchKey) => {
    const appPaths = {
      listingPaths: {
        search: '/listing/search',
      },
    };

    navigate(`${appPaths.listingPaths.search}?key=${searchKey}`);
  };

  const getItems = () =>
    data.map(({ city, img, searchKey, numOfListings }) => (
      <ImgContainer key={city}>
        <StyledImg src={img} alt="Logo" />
        <Overlay
          onClick={() => {
            handleSearch(searchKey);
          }}
        >
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
