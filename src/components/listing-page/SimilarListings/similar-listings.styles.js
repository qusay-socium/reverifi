import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Wrapper = styled.div`
  ${mq.desktopWide`
    display: none;
  `};
`;

export const Container = styled.div`
  border-top: 0.06rem solid ${colors.midGray};
  padding: 2.5rem 0.5rem;

  ${mq.desktop`
    margin: 2rem 7rem 0;
  `};
`;

export const StyledSlide = styled.div`
  // dots styles
  .slide-dots {
    list-style-type: none;
    text-align: center;

    > li {
      display: inline;
      margin: 0 0.3125rem;
      > button {
        background-color: ${colors.midGray};
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 0;
        height: 0.75rem;
        padding: 0;
        width: 0.75rem;
      }
    }
  }

  // active dot style
  .slide-dots li.slick-active button {
    background-color: ${colors.white};
    border: 0.125rem solid ${colors.green};
    height: 0.9375rem;
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

export const SimilarItemsList = styled.div`
  display: none;

  ${mq.desktopWide`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
  `};

  > div {
    margin: 2rem 1rem 2rem 0;
  }
`;

export const SeeMore = styled.div`
  margin: 2rem auto;
  text-align: center;
`;
