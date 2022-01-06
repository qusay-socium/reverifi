import colors from 'styles/colors';
import mq from 'styles/media-query';
import styled from 'styled-components';

export const ListingsContainer = styled.div`
  margin: 0rem 1rem;

  ${mq.desktop`
    margin: 0rem 3.4375rem;
  `};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mq.desktop`
    flex-direction:row;
  `};
`;

export const Card = styled.div`
  box-shadow: 0rem 0.0625rem 0.375rem ${colors.mineShaft}26;
`;

export const CardImageContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const CornerItems = styled.div`
  display: flex;
  position: absolute;
  ${({ isBottom }) => (isBottom ? `bottom: 1rem;` : `top: 1rem;`)}
  ${({ isRight }) => (isRight ? `right: 1rem;` : `left: 1rem;`)}
`;

export const Tag = styled.div`
  background-color: ${colors.orange};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.75rem;
  padding: 0.3125rem 1.1875rem;
`;

export const LocationTagContainer = styled.div`
  color: ${colors.white};
  display: flex;
  font-size: 0.875rem;
  gap: 0.5rem;
`;

export const PhotosNumberContainer = styled.div`
  align-items: center;
  color: ${colors.white};
  display: flex;
  font-size: 0.875rem;
  gap: 0.5rem;
`;

export const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 1.875rem 1.75rem 1.875rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardPrice = styled.div`
  color: ${colors.green};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
  }

  span {
    color: ${colors.dustyGrey};
  }
`;

export const HeaderIcons = styled.div`
  svg {
    margin: 0 0.5rem;
  }
`;

export const IconGroup = styled.div`
  align-items: center;
  color: ${colors.dustyGrey};
  display: flex;
  gap: 0.5rem;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: 1.3125rem;
    margin: 0rem;
  }
`;

export const BodyContainers = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    height: 1.75rem;
    width: 1.75rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  gap: 0.5rem;
`;
