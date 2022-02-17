import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingsTableContainer = styled.div`
  th {
    padding-left: 1rem;

    &:last-child {
      text-align: right;
      padding-right: 10rem;
    }
  }

  tr {
    td:last-child {
      padding-right: 6rem;
    }
  }

  table {
    table-layout: fixed;
  }
`;

export const LinkText = styled(Link)`
  color: ${colors.blue};
`;
