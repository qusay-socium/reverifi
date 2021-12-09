import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Title = styled.h3``;

export const SectionDiv = styled.div`
  background: #fafafa;
  margin: 0 0 2.25rem 0;
  padding: 2.25rem 0 0 0;
`;

export const ExploreListingDiv = styled.div``;

export const MainHeaderH2 = styled.h2`
  color: ${colors.mineShaft};
  font-family: Montserrat;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.6875rem;
  margin: 0 auto 1.125rem auto;
  text-align: center;

  ${mq.tablet`
    font-size: 2rem;
    line-height: 2.4375rem;
  `}
`;

export const SliderDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  display: block;

  ${mq.tablet`
    width: calc(100% - 4rem);
    display: grid;
    gap: 2.32vw; 
    grid-template-columns: [first] 36.9% repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 0 2rem;
  `}

  & .slick-dots {
    bottom: 0;
    height: 2.3125rem;
  }

  & .slick-dots li {
    width: 0.6875rem;
    height: 0.6875rem;
    background: ${colors.white};
    border-radius: 50%;
    margin: 0 0.625rem;
  }

  & .slick-dots .slick-active {
    outline: 0.0625rem ${colors.atlantis} solid;
    border: 0.0625rem ${colors.atlantis} solid;
    height: 0.8125rem !important;
    width: 0.8125rem !important;
    background: transparent !important;
  }

  & .slick-dots li button {
    width: 0.6875rem;
    height: 0.6875rem;
    padding: 0;
    margin: 0;
  }

  & .slick-dots li button:before {
    content: '';
    font-size: 0;
    width: 0.6875rem;
    height: 0.6875rem;
  }
`;

export const ImgDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  min-height: 8.125rem;
  position: relative;
  width: 100%;

  ${mq.tablet`
    border-radius: 0.625rem;
    border: 0.0625rem solid #979797;
    overflow: hidden;

    &:first-child {
      grid-row: 1 / span 2;
      min-width: 100%;
    }
  `}
`;

export const OverlayDiv = styled.div`
  background: rgba(34, 34, 34, 0.6);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`;

export const ImgContentDiv = styled.div`
  bottom: 1.5625rem;
  color: ${colors.white};
  left: 2.1875rem;
  min-heihgt: 8.0625rem;
  position: absolute;
  z-index: 3;

  ${mq.tablet`
    left: 1rem;
    bottom: 0;
  `}
`;

export const StyledImg = styled.img`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;
  position: relative;
  z-index: 0;

  ${mq.tablet`
    min-width: 100%;
  `}
`;

export const FirstImgHeader = styled.h4`
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4375rem;
  margin: 0.5625rem 0 0.5625rem 1rem;
`;

export const FirstImgListings = styled.p`
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0 0 2rem 1rem;

  & span {
    color: ${colors.atlantis};
  }
`;

export const ImgHeader = styled.h4`
  font-family: Montserrat;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4375rem;
  margin: 0.5625rem 0;

  ${mq.tablet`
    font-size: min(2.3vw, 1.5rem);
    line-height: 1.8125rem;
    margin: 0.375rem 0;
  `}
`;

export const ImgListings = styled.p`
  font-family: Montserrat;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 0 0 2rem 0;

  & span {
    color: ${colors.atlantis};
  }

  ${mq.tablet`
    font-size: 1rem;
    font-size: min(1.5vw, 1rem);
    font-weight: 600;
    line-height: 1.25rem;  
    margin: 0 0 0.9375rem 0;
  `}
`;
