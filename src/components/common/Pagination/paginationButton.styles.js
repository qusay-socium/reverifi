import styled from 'styled-components';
import colors from 'styles/colors';

export const StyledPaginationButton = styled.a`
  width: 0.6875rem;
  height: 0.6875rem;
  padding: 0;
  background-color: ${colors.altoGray};
  border-radius: 0.3438rem;
  border: none;
  margin: 0.3125rem;
  &:active {
    border: 3px solid ${colors.mainGreen};
  }
`;
