import styled from 'styled-components';

import colors from 'styles/colors';
import mq from 'styles/media-query';

const SectionContainer = styled.div`
  margin: 10px 0;

  ${mq.desktop`
      margin: 10px 120px;
  `}
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 39px;
  text-align: center;
  margin: 0;

  ${mq.mobileWide`
      font-size: 32px;
  `}
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-self: ${({ alignSelf }) => alignSelf || ''};
  gap: ${({ gap }) => gap || 0};
`;

export const CardImageContainer = styled.div`
  position: relative;
  height: 252px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d8d8d8;
  padding: 11.5px 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const Tag = styled.div`
  background-color: ${({ color }) => color || colors.lightgreen};
  color: white;
  font-size: 0.625rem;
  padding: 4px 19px;
  border-radius: 4px;
  margin-right: 7px;
  line-height: 12px;
`;

export const PersonImg = styled.img`
  position: absolute;
  right: 16px;
  bottom: 16px;
  border-radius: 50%;
`;

export const Text = styled.p`
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ weight }) => weight || 500};
  color: ${({ color }) => color || colors.black};
  line-height: ${({ lineHeight }) => lineHeight};
`;

export const Span = styled.span`
  font-size: 0.75rem;
  line-height: 15px;
  color: ${colors.grey};
  padding-right: 4px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 6px rgba(34, 34, 34, 0.163762);
  background-color: ${colors.lightgrey};
  width: 25px;
  height: 25px;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.lightgreen};
    cursor: pointer;
  }

  &:hover path {
    stroke: ${({ iconName }) =>
      iconName === 'heart' ? 'white !important' : ''};
    fill: ${({ iconName }) => (iconName === 'share' ? 'white !important' : '')};
    opacity: 1 !important;
  }
`;

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 9px rgba(34, 34, 34, 0.16);
  border-radius: 6px;
  margin: 32px 16px;
  overflow: hidden;
`;

export const StyledSlide = styled.div`
  // dots styles
  .slideDots {
    list-style-type: none;
    text-align: center;
    margin: 0;
    padding: 0;

    > li {
      display: inline;
      margin: 0 5px;
      > button {
        // to hide the content
        font-size: 0 !important;
        width: 12px;
        height: 12px;
        border: none;
        background-color: #d8d8d8;
        border-radius: 50%;
        padding: 0;
      }
    }
  }
  // active dot style
  .slideDots li.slick-active button {
    width: 10px;
    height: 10px;
    background-color: #fff;
    outline: 2px solid #b2d235;
  }
  // arrow styles
  .slick-prev {
    left: 1rem !important;
    z-index: 1;
    width: 32px !important;
    height: 32px !important ;
  }
  .slick-next {
    right: 1rem !important;
    z-index: 1;
    width: 32px !important;
    height: 32px !important ;
  }
`;
// custom slider (scrollable) styles
// export const ScrollGrid = styled.div`
//   overflow-x: auto;
//   display: grid;
//   grid-auto-flow: column;
//   grid-auto-columns: 100%;
//   transition: all 1s ease;
//   scroll-behavior: smooth;

//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   /*chrome, safari, opera */
//   &::-webkit-scrollbar {
//     display: none;
//   }

//   ${mq.tablet`
//         grid-auto-columns: 50%;
//     `}

//   ${mq.desktop`
//         grid-auto-columns: ${({ count }) => `calc(100% / ${count})`};
//     `}
// `;

// export const Dots = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 18px 10px;
// `;

// export const Dot = styled.div`
//   width: 15px;
//   height: 15px;
//   border-radius: 50%;
//   background-color: ${({ active }) => (active ? 'white' : colors.midgrey)};
//   border: ${({ active }) =>
//     active ? `2px solid ${colors.lightgreen};` : 'inherit'};

//   &:hover {
//     cursor: pointer;
//   }
// `;

export default SectionContainer;
