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
 * @param {Array(Object)} assignedTransactions assigned transactions data
 * @param {Array(Object)} createdTransactions created transactions data
 *
 * @return {JSX.Element}
 */
function TransactionsTable({ assignedTransactions, createdTransactions }) {
  return (
    <Table headers={['PROPERTY', 'MY ROLE', 'STATUS', null]}>
      {assignedTransactions?.map(({ id, assignedTransaction, role }) => (
        <TableRow key={id}>
          <TableCell>
            {assignedTransaction?.transactionListing?.address}
          </TableCell>
          <TableCell>{role || 'N/A'}</TableCell>
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

      {createdTransactions.map(({ id, status, transactionListing }) => (
        <TableRow key={id}>
          <TableCell>{transactionListing?.address}</TableCell>
          <TableCell>N/A</TableCell>
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

TransactionsTable.defaultProps = {
  assignedTransactions: [],
  createdTransactions: [],
};

TransactionsTable.propTypes = {
  assignedTransactions: propTypes.arrayOf(propTypes.object),
  createdTransactions: propTypes.arrayOf(propTypes.object),
};

export default TransactionsTable;
