import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { transactionStatus, transactionStepsNames } from 'utils/constants';
import { StepLink, SummaryIcon } from './transactions-table.styles';

/**
 * Transactions Table component
 *
 * @param {Array(Object)} assignedTransactions assigned transactions data
 * @param {Array(Object)} createdTransactions created transactions data
 *
 * @return {JSX.Element}
 */
function TransactionsTable({ assignedTransactions, createdTransactions }) {
  const [filteredAssignedTransactions, setFilteredAssignedTransactions] =
    useState([]);
  const { userInfo } = useUser();

  /**
   * get step route function
   */
  const getStepRoute = ({ listingId, status, workflowStep }) => {
    if (status !== transactionStatus.inProgress) {
      return `/transaction/${listingId}/${transactionStepsNames.closeDeal.route}`;
    }

    // otherwise redirect to the step that in progress
    if (workflowStep?.name === transactionStepsNames.addParties.name) {
      return `/transaction/${listingId}/${transactionStepsNames.addParties.route}`;
    }
    if (workflowStep?.name === transactionStepsNames.assignTasks.name) {
      return `/transaction/${listingId}/${transactionStepsNames.assignTasks.route}`;
    }
    if (workflowStep?.name === transactionStepsNames.uploadDocuments.name) {
      return `/transaction/${listingId}/${transactionStepsNames.uploadDocuments.route}`;
    }

    return `/transaction/${listingId}/${transactionStepsNames.closeDeal.route}`;
  };

  /**
   * filter assigned transactions to exclude current logged in user
   */
  const filterAssignedTransactions = () => {
    const filtered = assignedTransactions.filter(
      ({ assignedTransaction }) =>
        assignedTransaction?.transactionListing.agentId === userInfo?.id
    );
    setFilteredAssignedTransactions(filtered);
  };

  useEffectOnce(filterAssignedTransactions);

  return (
    <Table headers={['PROPERTY', 'MY ROLE', 'STATUS', null]}>
      {filteredAssignedTransactions?.map(
        ({ id, assignedTransaction, role }) => (
          <TableRow key={id}>
            <TableCell>
              <StepLink to={getStepRoute(assignedTransaction)}>
                {assignedTransaction?.transactionListing?.address}
              </StepLink>
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
        )
      )}

      {createdTransactions?.map(
        ({ id, status, transactionListing, listingId, workflowStep }) => (
          <TableRow key={id}>
            <TableCell>
              <StepLink to={getStepRoute({ listingId, status, workflowStep })}>
                {transactionListing?.address}
              </StepLink>
            </TableCell>
            <TableCell>
              {transactionListing?.agentId ? 'Seller Agent' : 'Seller'}
            </TableCell>
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
        )
      )}
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
