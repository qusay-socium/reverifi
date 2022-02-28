import styled from 'styled-components';
import colors from 'styles/colors';

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 2rem;
    text-transform: capitalize;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 1.1rem;
    color: ${colors.gray};
    text-align: center;
  }

  button {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const NoDataImage = styled.img`
  max-width: 40rem;
  max-height: 40rem;
`;
