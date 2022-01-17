import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const Container = styled.div`
  background-color: ${colors.alabaster};
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100rem;

  .slick-dots {
    display: none !important;
    position: relative;

    li {
      height: 7.5rem;
      margin: 0;
      overflow: hidden;
      width: 9.375rem;

      img {
        height: 6rem;
        width: 9rem;
      }
    }

    ${mq.desktop`
      display: block !important;
    `}
  }

  .slick-active {
    text-align: center;
  }

  ${mq.desktop`
    padding: 1.25rem 3.25rem; 
  `}
`;

export const ActiveImageWrapper = styled.div`
  max-width: fit-content;
  opacity: 1;
  position: relative;
`;

export const ActiveImage = styled.img`
  height: 24.8438rem;
  width: 44.6875rem;
`;

export const CustomPaging = styled.div`
  background-color: rgba(0, 0, 0, 60%);
  bottom: 0;
  color: ${colors.white};
  font-size: 0.75rem;
  padding: 0.5rem;
  position: absolute;
  right: 0;

  ${mq.desktop`
    display: none;
  `}
`;

export const InActiveImageWrapper = styled.div`
  transform: scale(0.9);
  transition: transform 500ms;
`;

export const InActiveImage = styled.img`
  filter: brightness(50%);
  height: 25rem;
  margin: 0 auto;
  width: 45rem;
`;

export const SliderArrow = styled.div`
  background-color: ${colors.mineShaft};
  border-radius: 50%;
  cursor: pointer;
  height: 1.875rem;
  opacity: 0.8;
  position: absolute;
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: 50%;
  width: 1.875rem;
  z-index: 3;

  svg {
    transform: scale(0.5) translate(-50%, -50%);
  }

  ${mq.desktop`
    height: 3.75rem;
    transform: translate(${({ left }) =>
      left ? '-1.875rem' : '1.875rem'}, -150%);
    width: 3.75rem;

    svg {
      transform: scale(1);
    }
    
  `}
`;
