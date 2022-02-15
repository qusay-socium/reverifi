import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingsTableContainer = styled.div`
  th:not(:first-child) {
    text-align: center;
  }
`;

export const LinkText = styled(Link)`
  color: ${colors.blue};
`;
