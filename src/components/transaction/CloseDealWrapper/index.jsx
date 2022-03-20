import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import Button from 'components/shared/Button';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import { TableCell } from 'components/shared/Table/table-styles';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTransactionListing } from 'services/listing';
import {
  addOrUpdateTransaction,
  addTransactionNote,
  getAssignees,
  getNotes,
  getTransactionsProcesses,
  getWorkflowStep,
  updateProcessesStatus,
  updateTransaction,
} from 'services/transactions';
import { transactionStatus } from 'utils/constants';
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
  const { listingId } = useParams();
  const [transactionData, setTransactionData] = useState({});
  const [workflowStep, setWorkflowStep] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleCancel = async () => {
    // update transaction status
    await updateTransaction({
      status: transactionStatus.canceled,
      transactionId: transactionData?.id,
    });

    // redirect to transaction page
    navigate(`/transaction`);
  };

  const getProcesses = async (id) => {
    const processesData = await getTransactionsProcesses(id);
    setProcesses(processesData);
  };

  const handleChange = async (id, value) => {
    const values = { id, value };
    // setIsChecked(id);
    await updateProcessesStatus(values);
  };

  const submit = async ({ notes }) => {
    // save note
    await addTransactionNote({
      notes,
      transactionId: transactionData.id,
      workflowStepId: workflowStep.id,
    });

    // update transaction status
    await updateTransaction({
      status: transactionStatus.closed,
      transactionId: transactionData?.id,
    });

    // update listing owner and agent ids
    const assignees = await getAssignees(transactionData?.id);
    const buyer = assignees.find((item) => item.role === 'Buyer');
    const buyerAgent = assignees.find((item) => item.role === 'Buyer Agent');

    await updateTransactionListing({
      agentId: buyerAgent?.assignedUser?.id,
      id: listingId,
      ownerId: buyer?.assignedUser?.id,
    });

    // redirect to transaction page
    navigate(`/transaction`);
  };

  /**
   * fetch Transaction Data function
   */
  const fetchTransactionData = async () => {
    // get step info
    const step = await getWorkflowStep(4);
    setWorkflowStep(step);

    // create transaction record
    const transactionRecord = await addOrUpdateTransaction({
      listingId,
      workflowStepId: step.id,
    });
    setTransactionData(transactionRecord);

    // get processes
    getProcesses(transactionRecord?.id);

    // get notes and fill notes textarea
    const note = await getNotes(transactionRecord.id, step.id);
    if (note?.notes) setValue('notes', note?.notes);
  };

  useEffectOnce(fetchTransactionData);

  return (
    processes.length > 0 && (
      <SectionContainer onSubmit={handleSubmit(submit)}>
        <Table headers={['Process', '', 'Assignee']} fixedLayout>
          {processes?.map(({ process, assignee, id, isCompleted }) => (
            <TableRowContainer key={id}>
              <TableCell>
                <CheckboxContainer>
                  <input
                    type="checkbox"
                    onChange={(e) => handleChange(id, e.target.checked)}
                    defaultChecked={isCompleted}
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
          register={register}
          error={errors?.notes?.message}
          name="notes"
          label="Notes"
          rounded={false}
          labelIconElement={<NotesIcon />}
          limit={250}
        />

        {transactionData?.status === transactionStatus.inProgress && (
          <ButtonsContainer>
            <Button type="button" light onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Close Deal</Button>
          </ButtonsContainer>
        )}
      </SectionContainer>
    )
  );
}

export default CloseDealWrapper;
