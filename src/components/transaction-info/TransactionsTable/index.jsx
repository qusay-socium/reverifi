import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import propTypes from 'prop-types';
import React from 'react';
import { SummaryIcon } from './transactions-table.styles';

/**
 * Transactions Table component
 *
 * @param {Array(Object)} data transactions data array
 *
 * @return {JSX.Element}
 */
function TransactionsTable({ data }) {
  return (
    <Table headers={['PROPERTY', 'MY ROLE', 'STATUS', null]}>
      {data.map(({ property, role, status }) => (
        <TableRow key={property}>
          <TableCell>{property}</TableCell>
          <TableCell>{role}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell iconsCell>
            <IconContainer hover>
              <SummaryIcon />
              <Tooltip
                text="Transaction Summary
                  Report "
                arrowPosition="top"
                position={[3, -2]}
                lineBreak
              />
            </IconContainer>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

TransactionsTable.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
};

export default TransactionsTable;
