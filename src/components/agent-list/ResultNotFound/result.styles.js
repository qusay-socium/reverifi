import styled from 'styled-components';
import colors from 'styles/colors';

export const ResultContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem 0;
  width: 100%;
`;

export const TextContainer = styled.h1`
  color: ${colors.mineShaft};
  padding: 2rem 2rem 4rem 2rem;
  text-align: center;
  width: 80%;
  font-style: inherit;
  font-size: 2rem;
  font-weight: 600;
`;
