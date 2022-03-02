import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 5rem;
  }
`;

export const HeaderText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3.5rem;
  display: flex;
  align-items: center;

  svg {
    path {
      fill: ${colors.green};
    }
    width: 1rem;
    height: 1rem;
    margin-left: 0.3rem;
  }
`;
