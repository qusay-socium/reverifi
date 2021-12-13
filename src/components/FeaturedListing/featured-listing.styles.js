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
  font-weight: 600;
  font-size: 1.375rem;
  text-align: center;
  margin: 0;

  ${mq.mobileWide`
      font-size: 2rem;
  `}
`;

export const StyledSlide = styled.div`
  // dots styles
  .slide-dots {
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;

    > li {
      display: inline;
      margin: 0 0.3125rem;
      > button {
        // to hide the content
        font-size: 0 !important;
        width: 0.75rem;
        height: 0.75rem;
        border: none;
        background-color: ${colors.midgrey};
        border-radius: 50%;
        padding: 0;
      }
    }
  }
  // active dot style
  .slide-dots li.slick-active button {
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${colors.white};
    outline: 2px solid ${colors.lightgreen};
  }
  // arrow styles
  .slick-prev {
    left: 1rem !important;
    z-index: 1;
    width: 2rem !important;
    height: 2rem !important ;
  }
  .slick-next {
    right: 1rem !important;
    z-index: 1;
    width: 2rem !important;
    height: 2rem !important ;
  }
`;
