import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  margin: 12rem auto 5rem;
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

export const ItemsContainer = styled.div`
  display: flex;
`;

export const Items = styled.li`
  color: ${colors.azure};
  list-style: none;
  padding-top: 0.6rem;
`;
