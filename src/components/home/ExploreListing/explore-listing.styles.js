import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainHeader = styled.h2`
  margin: 0 auto 2rem auto;
  text-align: center;

  ${mq.tablet`
    font-size: 2rem;
  `}
`;

export const SliderContainer = styled.div`
  .slick-slider {
    width: 100%;
  }

  .slick-dots {
    bottom: 0;
    height: 2.3rem;
  }

  .slick-dots li {
    background: ${colors.white};
    border-radius: 50%;
    height: 0.68rem;
    margin: 0 0.6rem;
    width: 0.68rem;
  }

  .slick-dots .slick-active {
    background: transparent !important;
    border: 0.06rem ${colors.green} solid;
    height: 0.8rem !important;
    outline: 0.06rem ${colors.green} solid;
    width: 0.8rem !important;
  }

  .slick-dots li button {
    height: 0.68rem;
    margin: 0;
    padding: 0;
    width: 0.68rem;
  }

  .slick-dots li button:before {
    content: '';
    font-size: 0;
    height: 0.68rem;
    width: 0.68rem;
  }
`;

export const ItemsContainer = styled.div`
  gap: 2.32vw;
  grid-template-columns: [first] 36.9% repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 0 2rem;
`;

export const MainContainer = styled.div`
  background: ${colors.alabaster};
  margin: 0 0 2.25rem 0;
  padding: 2.25rem 0 0 0;

  ${SliderContainer} {
    display: block;
  }

  ${ItemsContainer} {
    display: none;
  }

  ${mq.tablet`
    margin: 0;
    padding: 2.25rem 0 2.25rem 0;

    ${SliderContainer} {
      display: none;
    }

    ${ItemsContainer} {
      display: grid;
    }
    
  `}
`;

export const ImgHeader = styled.h4`
  font-size: 2rem;
  margin: 0.56rem 0;
  transition: 0.5s;

  ${mq.tablet`
    font-size: min(2.3vw, 1.5rem);
    margin: 0.37rem 0;
  `}
`;

export const ImgListings = styled.h5`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 2rem 0;
  transition: 0.5s;
  span {
    color: ${colors.white};
    font-weight: 600;
    transition: 0.5s;
  }

  ${mq.tablet`
      font-size: min(1.5vw, 1rem);
      margin: 0 0 0.9rem 0;
  `}
`;

export const ImgContainer = styled.div`
  cursor: pointer;
  position: relative;

  &:hover h4,
  &:hover h5,
  &:hover span {
    color: ${colors.green};
  }

  ${mq.tablet`
    border-radius: 0.6rem;
    overflow: hidden;

    // Make the first image size distinguishable
    :first-child {
      grid-row: 1 / span 2;

      ${ImgHeader} {
        font-size: 2rem;
        margin: 0.56rem 0 0.56rem 1rem;
      }

      ${ImgListings} {
        font-size: 1.1rem;
        margin: 0 0 2rem 1rem;
      }
    }
  `}
`;

export const Overlay = styled.div`
  background: ${colors.mineShaft}60;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.5s;

  &:hover {
    background: ${colors.mineShaft}B5;
  }
`;

export const ImgContent = styled.div`
  color: ${colors.white};
  left: 2.18rem;
  position: absolute;
  bottom: 0;
  margin-top: 1rem;

  ${mq.tablet`
      top:0;
      left: 1rem;
  `};
`;

export const StyledImg = styled.img`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;
  position: relative;
  transition: 1s;
`;
