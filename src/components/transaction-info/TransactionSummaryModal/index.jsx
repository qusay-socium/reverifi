import { ReactComponent as CompletedIcon } from 'assets/icons/transaction-summary-complete.svg';
import { ReactComponent as OverDueIcon } from 'assets/icons/transaction-summary-overdue.svg';
import { ReactComponent as TodoIcon } from 'assets/icons/transaction-summary-todo.svg';
import Modal from 'components/shared/Modal';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import TableNoData from 'components/shared/TableNoData';
import { useShowModal } from 'contexts/ShowModalContext';
import React, { useEffect, useState } from 'react';
import { getDatesDifference } from 'utils/helpers';
import {
  getAssignees,
  getTransactionsProcesses,
} from '../../../services/transactions';
import {
  AssigneeInfo,
  AssigneesContainer,
  AssigneesInfoContainer,
  HeaderText,
  ProcessesContainer,
  ProcessStatusText,
  StatusIconContainer,
  SubHeaderText,
} from './transaction-summary-modal.styles';

/**
 * Transaction Summary Modal component
 *
 * @return {JSX.Element}
 */
function TransactionSummaryModal() {
  const { showModal, setShowModal, modalData } = useShowModal();
  const [assignees, setAssignees] = useState([]);
  const [processes, setProcesses] = useState([]);

  /**
   * Handle modal close
   */
  const handleClose = () => {
    setShowModal(!showModal);
  };

  /**
   * fetch transaction data function
   */
  const fetchTransactionData = async () => {
    if (modalData?.transactionId) {
      const usersData = await getAssignees(modalData?.transactionId);

      setAssignees(usersData);

      const processesData = await getTransactionsProcesses(
        modalData?.transactionId
      );

      setProcesses(processesData);
    }
  };

  useEffect(() => {
    fetchTransactionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <Modal show={showModal} handleClose={handleClose}>
      <HeaderText>Transaction Summary Report </HeaderText>

      <AssigneesContainer>
        <SubHeaderText>Involved Parties</SubHeaderText>

        <AssigneesInfoContainer>
          {assignees?.map(({ assignedUser, role }) => (
            <AssigneeInfo>
              <p>{role}:</p>
              <span>{assignedUser?.name}</span>
            </AssigneeInfo>
          ))}
        </AssigneesInfoContainer>
      </AssigneesContainer>

      <ProcessesContainer>
        <SubHeaderText>Process Checklist</SubHeaderText>
        {processes.length > 0 ? (
          <Table
            headers={['Process', 'Assigned To', 'Due Date', 'Status']}
            fixedLayout
          >
            {processes?.map(
              ({ process, assignee, id, dueDate, isCompleted }) => (
                <TableRow key={id}>
                  <TableCell>{process?.name}</TableCell>
                  <TableCell>{assignee?.assignedUser?.name}</TableCell>
                  <TableCell>
                    {new Date(dueDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <ProcessStatusText
                      isCompleted={isCompleted}
                      overDue={getDatesDifference(dueDate) > 1 && !isCompleted}
                    >
                      {getDatesDifference(dueDate) > 1 && !isCompleted ? (
                        <StatusIconContainer>
                          <OverDueIcon />
                          over Due
                        </StatusIconContainer>
                      ) : isCompleted ? (
                        <StatusIconContainer>
                          <CompletedIcon />
                          Completed
                        </StatusIconContainer>
                      ) : (
                        <StatusIconContainer>
                          <TodoIcon />
                          To Do
                        </StatusIconContainer>
                      )}
                    </ProcessStatusText>
                  </TableCell>
                </TableRow>
              )
            )}
          </Table>
        ) : (
          <TableNoData text="You have no processes" />
        )}
      </ProcessesContainer>
    </Modal>
  );
}

export default TransactionSummaryModal;
