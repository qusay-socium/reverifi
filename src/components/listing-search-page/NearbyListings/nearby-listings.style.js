import styled from 'styled-components';
import colors from 'styles/colors';

export const NearbyContainer = styled.div`
  margin: 5rem auto;
  border: 0.1rem solid ${colors.midGray};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const NearbyText = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NearbyItemsContainer = styled.div`
  display: flex;
`;

export const NearbyItemsWrapper = styled.div`
  margin: 0 2rem;
`;

export const NearbyItems = styled.p`
  color: ${colors.azure};
`;
