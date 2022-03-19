import { TableRow } from 'components/shared/Table/table-styles';
import styled from 'styled-components';

export const SectionContainer = styled.form`
  margin: 2.5rem;
  table {
    th:last-child {
      text-align: right;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TableRowContainer = styled(TableRow)`
  td:last-child {
    text-align: right;
  }
`;
