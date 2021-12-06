import styled from 'styled-components';

import colors from 'styles/colors';
// import mq from 'styles/media-query';

const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  margin: 0;
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-self: ${({ alignSelf }) => alignSelf || ''};
  gap: ${({ gap }) => gap || 0};
`;

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 9px rgba(34, 34, 34, 0.16);
  border-radius: 6px;
  margin: 32px;
  overflow: hidden;
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
  font-size: 12px;
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

export const CardsFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Title;
