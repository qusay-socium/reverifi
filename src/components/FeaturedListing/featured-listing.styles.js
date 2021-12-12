import styled from 'styled-components';

import colors from 'styles/colors';
import mq from 'styles/media-query';

const SectionContainer = styled.div`
  margin: 0.625rem 0;

  ${mq.desktop`
      margin: 0.625rem 7.5rem;
  `}
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 2.4375rem;
  text-align: center;
  margin: 0;

  ${mq.mobileWide`
      font-size: 2rem;
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
  height: 15.75rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d8d8d8;
  padding: 0.75rem 1rem;
`;

export const TagContainer = styled.div`
  display: flex;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const Tag = styled.div`
  background-color: ${({ color }) => color || colors.lightgreen};
  color: white;
  font-size: 0.625rem;
  padding: 0.25rem 1.1875rem;
  border-radius: 0.25rem;
  margin-right: 0.4375rem;
  line-height: 0.75rem;
`;

export const PersonImg = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
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
  line-height: 0.9375rem;
  color: ${colors.grey};
  padding-right: 0.25rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0rem 0.0625rem 0.375rem rgba(34, 34, 34, 0.163762);
  background-color: ${colors.lightgrey};
  width: 1.5625rem;
  height: 1.5625rem;
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
  box-shadow: 0rem 0.0625rem 0.5625rem rgba(34, 34, 34, 0.16);
  border-radius: 0.375rem;
  margin: 2rem 1rem;
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
      margin: 0 0.3125rem;
      > button {
        // to hide the content
        font-size: 0 !important;
        width: 0.75rem;
        height: 0.75rem;
        border: none;
        background-color: #d8d8d8;
        border-radius: 50%;
        padding: 0;
      }
    }
  }
  // active dot style
  .slideDots li.slick-active button {
    width: 0.625rem;
    height: 0.625rem;
    background-color: #fff;
    outline: 2px solid #b2d235;
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

export default SectionContainer;
