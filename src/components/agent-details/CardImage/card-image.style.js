import styled from 'styled-components';
import colors from 'styles/colors';
import mq from 'styles/media-query';

export const CardImageContainer = styled.div`
  position: relative;
`;

export const CornerItems = styled.div`
  display: flex;
  position: absolute;
  ${({ isBottom }) => (isBottom ? `bottom: 1rem;` : `top: 1rem;`)}
  ${({ isRight }) => (isRight ? `right: 1rem;` : `left: 1rem;`)}
`;

export const Image = styled.img`
  width: 100%;
  height: 18rem;
`;

export const LocationTagContainer = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  gap: 0.5rem;
  background-color: ${colors.mineShaft}60;
  padding: 0.2rem 0.5rem;
  border-radius: 1.3rem;
  max-width: 15rem;

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${mq.desktopExtraMax`
     max-width: 100%;
  `}
`;

export const PhotosNumberContainer = styled(LocationTagContainer)`
  font-weight: 600;
`;

export const Tag = styled.div`
  background-color: ${colors.green};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.75rem;
  padding: 0.3rem 1.2rem;
`;
