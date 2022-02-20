import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 0.5rem;
  border: 0.06rem solid ${colors.midGray};
  display: flex;
  flex-direction: column;
  max-height: 10rem;
  margin: 2rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  ${mq.tabletWide`
      flex-direction: row;
  `}
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
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
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const ShearIconsContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 2rem;
  width: 2rem;
  justify-content: space-around;
  border-radius: 50%;
  box-shadow: 0 0.06rem 0.37rem ${colors.mineShaft}29;
  background-color: ${colors.wildSand};
  margin: 0 0.4rem 0 0.4rem;
  border-radius: 10rem;

  svg {
    padding: 0.15rem;
    color: ${colors.dustyGray};
  }
  &:hover {
    background-color: ${colors.green};
    svg {
      color: ${colors.white};
    }
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
  color: ${colors.dustyGrey};
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
