import ArrowLeft from 'assets/mocks/images/arrow-left.svg';
import ArrowRight from 'assets/mocks/images/arrow-right.svg';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const MainContainer = styled.div`
  background: ${colors.alabaster};
  padding: 2.25rem 0.75rem;

  ${mq.desktop`
    padding: 2rem 1.75rem;
  `}
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 1.12rem 0;
  text-align: center;

  ${mq.desktop`
    font-size: 2rem;
    margin: 0 0 2rem 0;
  `}
`;

export const FilterList = styled.div`
  display: flex;
  gap: 2.25rem;
  justify-content: center;
  margin: 0 0 1.12rem 0;

  ${mq.desktop`
    margin: 0 0 2rem 0;
  `}
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? colors.green : colors.mineShaft)};
  cursor: pointer;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: bold;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
  padding: 0 0 0.25rem 0;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
      :after {
        border-top-left-radius: 0.25rem;
        border-top: 0.1875rem solid ${colors.green};
        border-top-right-radius: 0.25rem;
        bottom: -0.25rem;
        content: '';
        left: 0.125rem;
        position: absolute;
        right: 0.125rem;
    }
  `}
`;

export const CardsContainer = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;

    > div {
      flex: 1;
      margin: 0 0.5rem;
    }
  }

  .slick-arrow {
    background: ${colors.green};
    border-radius: 50%;
    min-height: 2rem;
    min-width: 2rem;
    z-index: 2;

    :hover {
      background: ${colors.green};
    }

    :focus {
      background: ${colors.green};
    }
  }

  .slick-prev {
    left: -0.5rem;
  }

  .slick-prev:before {
    content: url(${ArrowLeft});
  }

  .slick-next {
    right: -0.5rem;
  }

  .slick-next:before {
    content: url(${ArrowRight});
  }
`;
