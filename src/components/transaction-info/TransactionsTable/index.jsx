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
 * @param {Array(Object)} processes transactions data
 *
 * @return {JSX.Element}
 */
function TransactionsTable({ processes }) {
  return (
    <Table headers={['PROPERTY', 'MY ROLE', 'STATUS', null]}>
      {processes?.map(({ id, assignedTransaction }) => (
        <TableRow key={id}>
          <TableCell>
            {assignedTransaction?.transactionListing?.address}
          </TableCell>
          <TableCell>N/A</TableCell>
          <TableCell>{assignedTransaction?.status}</TableCell>
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

TransactionsTable.defaultProps = {
  processes: [],
};

TransactionsTable.propTypes = {
  processes: propTypes.arrayOf(propTypes.object),
};

export default TransactionsTable;
