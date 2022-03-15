import { AgentToolTip } from 'components/my-listings/ListingsTable/listing-table.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from 'styles/colors';

export const ListingsTableContainer = styled.div`
  th {
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
`;

export const LinkText = styled(Link)`
  color: ${colors.blue};
`;

export const RolesText = styled(AgentToolTip)`
  max-width: 30rem;
`;
