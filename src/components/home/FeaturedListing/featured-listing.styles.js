import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const SectionContainer = styled.div`
  margin: 0.625rem 0;

  ${mq.desktop`
      margin: 0.625rem 7.5rem;
  `};
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
        background-color: ${colors.mercury};
        border-radius: 50%;
        border: 0.1rem ${colors.mercury} solid;
        cursor: pointer;
        font-size: 0;
        height: 1rem;
        padding: 0;
        width: 1rem;
      }
    }
  }
  // active dot style
  .slide-dots li.slick-active button {
    background-color: ${colors.green};
    border: 0.6rem ${colors.green} solid;
    height: 1rem;
    width: 1rem;
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
