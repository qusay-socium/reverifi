import styled from 'styled-components';
import colors from 'styles/colors';

export const RowSummary = styled.summary`
  cursor: pointer;

  &::marker {
    color: ${colors.green};
    font-size: 1rem;
  }

  + div {
    margin-top: 15px;
  }
`;
