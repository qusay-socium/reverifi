import styled from 'styled-components';

import colors from 'styles/colors';

const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0rem 0.0625rem 0.5625rem rgba(34, 34, 34, 0.16);
  border-radius: 0.375rem;
  margin: 2rem 1rem;
  overflow: hidden;
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
  padding: 5px 1.1875rem;
  border-radius: 0.25rem;
  margin-right: 0.4375rem;
`;

export const PersonImg = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  border-radius: 50%;
`;

export const TextLg = styled.p`
  margin: 0.1875rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.black};
`;

export const TextMd = styled.p`
  margin: 0.1875rem 0 0.9375rem 0;
  font-size: 0.875rem;
  color: ${colors.grey};
`;

export const TextSm = styled.p`
  margin: 0.1875rem 0;
  font-size: 0.75rem;
  color: ${colors.grey};
`;

export const Span = styled.span`
  font-size: 0.75rem;
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

export default CardContainer;
