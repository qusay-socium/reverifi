import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardContainer = styled.div`
  border-radius: 0.5rem;
  border: 0.0625rem solid ${colors.midGray};
  display: flex;
  flex-direction: column;
  margin: 2rem;
  overflow: hidden;

  ${mq.tabletWide`
      flex-direction: row;
  `}
`;

export const CardImageContainer = styled.div`
  max-height: 8.5rem;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;

  ${mq.mobileWide`
    max-height: 15rem;
  `}

  ${mq.tabletWide`
    max-height: 20rem;
    width: 10rem;
  `}
`;

export const Badge = styled.div`
  background-color: ${colors.green};
  border-radius: 0.3125rem;
  color: ${colors.white};
  margin: 1rem;
  padding: 0.3rem 1.2rem;
  position: absolute;

  ${mq.tablet`
      margin: 0.5rem;
  `}
`;

export const Image = styled.img`
  min-height: 100%;
  min-width: 100%;
`;

export const CardText = styled.div`
  padding-left: 1rem;
`;

export const PriceText = styled.h4`
  ${mq.tabletWide`
      font-size:1.125rem;
      font-weight: 500;
      margin:1rem 0;
  `}
`;

export const LocationText = styled.div`
  color: ${colors.dustyGrey};
  display: flex;
`;

export const LocationIcon = styled.p`
  margin: 0;
  padding-right: 0.5rem;
`;

export const IconsContainer = styled.div`
  align-items: center;
  color: ${colors.dustyGrey};
  display: flex;
  font-size: 0.7rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  max-width: 60%;

  ${mq.mobileWide`
    max-width: 35%;
  `}

  ${mq.tablet`
    max-width: 30%;
  `}

  ${mq.tabletWide`
      max-width: 50%;
  `}
`;

export const IconsNumber = styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-left: 0.1rem;
  }
`;
