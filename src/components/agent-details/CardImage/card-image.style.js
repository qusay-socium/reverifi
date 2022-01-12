import colors from 'styles/colors';
import styled from 'styled-components';

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

export const Tag = styled.div`
  background-color: ${colors.green};
  border-radius: 0.25rem;
  color: ${colors.white};
  font-size: 0.75rem;
  padding: 0.3125rem 1.1875rem;
`;
