import React, { useState, useEffect } from 'react';
import mq from 'styles/media-query';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './data';
import {
  SectionDiv,
  ExploreListingDiv,
  MainHeaderH2,
  SliderDiv,
  ImgDiv,
  OverlayDiv,
  ImgContentDiv,
  StyledImg,
  FirstImgHeader,
  FirstImgListings,
  ImgHeader,
  ImgListings,
  Title,
} from './explore-listing.styles';

/**
 * Home page explore listing section.
 *
 * @return {JSX.Element}
 */
function ExploreListing() {
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 1200,
    });

    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth });
    }

    useEffect(() => {
      changeWindowSize();
      window.addEventListener('resize', changeWindowSize);

      return () => {
        window.removeEventListener('resize', changeWindowSize);
      };
    }, []);

    return windowSize;
  }

  const { width } = useWindowSize();

  return (
    <SectionDiv>
      <Title>TODO: implement explore listing.</Title>
      <ExploreListingDiv>
        <MainHeaderH2>Explore our Listings</MainHeaderH2>
        {width < 650 ? (
          <SliderDiv>
            <Slider
              dots
              infinite={false}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              responsive={[
                {
                  breakpoint: mq.tablet,
                  // settings: 'unslick',
                },
              ]}
            >
              {data.map((item, index) =>
                index === 0 ? (
                  <ImgDiv>
                    <StyledImg src={item.img} alt="Logo" />
                    <OverlayDiv>
                      <ImgContentDiv>
                        <FirstImgHeader>{item.city}</FirstImgHeader>
                        <FirstImgListings>
                          <span>{item.numOfListings}</span> Listings
                        </FirstImgListings>
                      </ImgContentDiv>
                    </OverlayDiv>
                  </ImgDiv>
                ) : (
                  <ImgDiv>
                    <StyledImg src={item.img} alt="Logo" />
                    <OverlayDiv>
                      <ImgContentDiv>
                        <ImgHeader>{item.city}</ImgHeader>
                        <ImgListings>
                          <span>{item.numOfListings}</span> Listings
                        </ImgListings>
                      </ImgContentDiv>
                    </OverlayDiv>
                  </ImgDiv>
                )
              )}
            </Slider>
          </SliderDiv>
        ) : (
          <SliderDiv>
            {data.map((item, index) =>
              index === 0 ? (
                <ImgDiv>
                  <StyledImg src={item.img} alt="Logo" />
                  <OverlayDiv>
                    <ImgContentDiv>
                      <FirstImgHeader>{item.city}</FirstImgHeader>
                      <FirstImgListings>
                        <span>{item.numOfListings}</span> Listings
                      </FirstImgListings>
                    </ImgContentDiv>
                  </OverlayDiv>
                </ImgDiv>
              ) : (
                <ImgDiv>
                  <StyledImg src={item.img} alt="Logo" />
                  <OverlayDiv>
                    <ImgContentDiv>
                      <ImgHeader>{item.city}</ImgHeader>
                      <ImgListings>
                        <span>{item.numOfListings}</span> Listings
                      </ImgListings>
                    </ImgContentDiv>
                  </OverlayDiv>
                </ImgDiv>
              )
            )}
          </SliderDiv>
        )}
      </ExploreListingDiv>
    </SectionDiv>
  );
}

export default ExploreListing;
