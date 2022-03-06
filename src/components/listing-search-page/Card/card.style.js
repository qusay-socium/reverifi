import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  display: flex;
  flex-direction: column;
  height: 20rem;
  margin: 2rem;
  overflow: hidden;
  position: relative;

  ${mq.tabletWide`
      flex-direction: row;
      height: 10rem;
  `}
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 25rem;
  height: 100%;
`;

export const BadgesContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  top: 0.5rem;
  left: 0.5rem;
`;

export const Badge = styled.h4`
  background-color: ${colors.green};
  border-radius: 0.3rem;
  color: ${colors.white};
  padding: 0.3rem 0.7rem;
  font-size: 0.67rem;
  margin: 0;
  font-weight: 600;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:last-child {
    padding-right: 0.8rem;
  }
`;

export const PriceText = styled.h3`
  font-weight: 600;
`;

export const LocationContainer = styled.div`
  color: ${colors.dustyGrey};
  display: flex;
  align-items: center;
`;

export const LocationText = styled.p`
  padding-left: 0.5rem;
  width: 100%;
  max-width: 12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.87rem;

  ${mq.mobileWide`
      max-width: 20rem;
  `}

  ${mq.tablet`
      max-width: 30rem;
  `}

  ${mq.desktop`
      max-width: 20rem;
  `}

  ${mq.desktopExtraWide`
      max-width: 27rem;
  `}
`;

export const IconsContainer = styled.div`
  align-items: center;
  color: ${colors.mineShaft};
  display: flex;
  width: 100%;

  svg {
    margin: 0 0.2rem 0.1rem 0;
    min-height: 1.2rem;
    width: 1.4rem;
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
  font-size: 0.9rem;
`;

export const ViewListingLink = styled(Link)`
  color: ${colors.green};
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: auto;
  margin-right: 0.3rem;
  justify-content: space-around;

  :hover {
    text-decoration: underline;
  }
`;
