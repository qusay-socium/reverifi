import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SectionContainer = styled.div`
  margin: 0.625rem 0;

  ${mq.desktop`
      margin: 0.625rem 7.5rem;
  `}
`;

export const Title = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  margin: 0;
  text-align: center;

  ${mq.mobileWide`
      font-size: 2rem;
  `}
`;

export const StyledSlide = styled.div`
  // dots styles
  .slide-dots {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;

    > li {
      display: inline;
      margin: 0 0.3125rem;
      > button {
        background-color: ${colors.midGray};
        border-radius: 50%;
        border: none;
        font-size: 0;
        height: 0.75rem;
        padding: 0;
        width: 0.75rem;
        cursor: pointer;
      }
    }
  }
  // active dot style
  .slide-dots li.slick-active button {
    background-color: ${colors.white};
    height: 0.9375rem;
    border: 0.125rem solid ${colors.green};
    width: 0.9375rem;
  }
  // arrow styles
  .slick-prev {
    height: 2rem;
    left: 1rem;
    width: 2rem;
    z-index: 1;
  }
  .slick-next {
    height: 2rem;
    right: 1rem;
    width: 2rem;
    z-index: 1;
  }
`;
