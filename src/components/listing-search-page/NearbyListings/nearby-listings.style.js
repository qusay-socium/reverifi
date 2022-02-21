import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  ul {
    margin: 0;
  }
`;

export const NearbyText = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 0.87rem;
`;

export const ItemsContainer = styled.div`
  display: flex;
`;

export const Items = styled.li`
  color: ${colors.azure};
  list-style: none;
  padding-top: 0.8rem;
  font-size: 0.75rem;
  font-weight: 500;
`;
