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

  &:hover {
    cursor: pointer;
  }

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
    max-width: 10rem;
  `}

  ${mq.desktop`
      max-height: 20rem;
      max-width: 10rem;
    `}
`;

export const Badge = styled.h4`
  background-color: ${colors.green};
  border-radius: 0.3rem;
  color: ${colors.white};
  margin: 0.6rem;
  padding: 0.3rem 1rem;
  position: absolute;
  font-size: 0.7rem;
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

export const LocationContainer = styled.div`
  color: ${colors.dustyGrey};
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const LocationText = styled.p`
  padding-left: 0.5rem;
  width: 100%;
  max-width: 12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${mq.mobileWide`
      max-width: 20rem;
  `}

  ${mq.tablet`
      max-width: 30rem;
  `}

  ${mq.desktop`
      max-width: 13rem;
  `}

  ${mq.desktopExtraWide`
      max-width: 23rem;
  `}
`;

export const IconsContainer = styled.div`
  align-items: center;
  color: ${colors.dustyGrey};
  display: flex;
  width: 100%;

  svg {
    margin: 0 0.2rem 0.1rem 0;
    height: 1rem;
    width: 1rem;
  }
`;

export const IconsNumber = styled.div`
  align-items: center;
  display: flex;
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const AreaText = styled.p`
  font-size: 0.8rem;
  margin: 1rem 0;
`;

export const BoldNumber = styled(AreaText)`
  font-weight: 600;
  margin-right: 0.25rem;
`;
