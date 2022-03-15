import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import Button from 'components/shared/Button';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import { TableCell } from 'components/shared/Table/table-styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateTransactionListing } from 'services/listing';
import {
  getAssignees,
  getTransactionsProcesses,
  updateProcessesStatus,
  updateTransaction,
} from 'services/transactions';
import { ButtonsContainer } from '../AssignTasksWrapper/assign-tasks-wrapper.styles';
import {
  CheckboxContainer,
  SectionContainer,
  TableRowContainer,
} from './close-deal-wrapper.styles';

/**
 * Close Deal Wrapper components
 *
 * @return {JSX.Element}
 */
function CloseDealWrapper() {
  const [processes, setProcesses] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const { listingId } = useParams();
  const transactionId = 'da26c3c7-9bb4-453c-9f5a-65735d52449f';

  const getProcesses = async () => {
    const processesData = await getTransactionsProcesses(transactionId);
    setProcesses(processesData);
  };

  const handleChange = async (id, value) => {
    const values = { id, value };
    setIsChecked((current) => !current);
    await updateProcessesStatus(values);
  };

  const handleClick = async () => {
    await updateTransaction({
      status: 'closed',
      transactionId,
    });
    const assignees = await getAssignees(transactionId);

    const buyer = assignees.find((item) => item.role === 'Buyer');
    const buyerAgent = assignees.find((item) => item.role === 'Buyer Agent');

    await updateTransactionListing({
      agentId: buyerAgent?.assignees?.assignedUser?.id,
      id: listingId,
      ownerId: buyer?.assignees?.assignedUser?.id,
    });
  };

  useEffect(() => {
    getProcesses();
  }, [isChecked]);

  return (
    processes.length > 0 && (
      <SectionContainer>
        <Table headers={['Process', '', 'Assignee']} fixedLayout>
          {processes?.map(({ process, assignee, id, isCompleted }) => (
            <TableRowContainer key={id}>
              <TableCell>
                <CheckboxContainer>
                  <input
                    type="checkbox"
                    onChange={(e) => handleChange(id, e.target.checked)}
                    checked={isCompleted}
                  />
                  {process?.name}
                </CheckboxContainer>
              </TableCell>

              <TableCell />
              <TableCell>{assignee?.assignedUser?.name}</TableCell>
            </TableRowContainer>
          ))}
        </Table>

        <TextAreaInput
          name="notes"
          label="Notes"
          rounded={false}
          labelIconElement={<NotesIcon />}
          limit={140}
        />

        <ButtonsContainer>
          <Button type="button" light>
            Cancel
          </Button>
          <Button onClick={handleClick} type="button">
            Close Deal
          </Button>
        </ButtonsContainer>
      </SectionContainer>
    )
  );
}

export default CloseDealWrapper;
