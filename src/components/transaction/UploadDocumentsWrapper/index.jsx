import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/transaction-step3-delete.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/transaction-step3-download.svg';
import { ReactComponent as EyeIcon } from 'assets/icons/transaction-step3-eye.svg';
import { ReactComponent as PrintIcon } from 'assets/icons/transaction-step3-print.svg';
import {
  InputInterface,
  UploadIcon,
} from 'components/create-listing/ListingImageInput/listingImageInput.styles';
import Button from 'components/shared/Button';
import FilesList from 'components/shared/FilesList';
import UploadInput from 'components/shared/UploadInput';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addOrUpdateTransaction,
  addTransactionNote,
  getNotes,
  getWorkflowStep,
} from 'services/transactions';
import { transactionStepsNames } from 'utils/constants';
import { ButtonsContainer } from '../AssignTasksWrapper/assign-tasks-wrapper.styles';
import {
  SectionContainer,
  UploadContainer,
} from './upload-documents-wrapper.styles';

const data = [
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Certificate of Occupancy',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Consumer Information Statement',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'Lead Based Paint Form',
  },
  {
    by: 'John Doe',
    date: 'Sep 10, 2021',
    name: 'NJ MLS Residential Listing Agreement',
  },
];

/**
 * Upload Documents Wrapper components
 *
 * @return {JSX.Element}
 */
function UploadDocumentsWrapper() {
  const [documents /* setDocuments */] = useState([]);
  const navigate = useNavigate();
  const { listingId } = useParams();
  const [transactionData, setTransactionData] = useState({});
  const [workflowStep, setWorkflowStep] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  /**
   * on add files function
   */
  const onAddFiles = () => {};

  /**
   * on delete files function
   */
  const onDeleteFiles = () => {};

  /**
   * submit function
   */
  const submit = async ({ notes }) => {
    // save note
    await addTransactionNote({
      notes,
      transactionId: transactionData.id,
      workflowStepId: workflowStep.id,
    });

    //  redirect to step 4
    navigate(`/transaction/${listingId}/${transactionStepsNames.closeDeal}`);
  };

  /**
   * fetch Transaction Data function
   */
  const fetchTransactionData = async () => {
    // get step info
    const step = await getWorkflowStep(3);
    setWorkflowStep(step);

    // create transaction record
    const transactionRecord = await addOrUpdateTransaction({
      listingId,
      workflowStepId: step.id,
    });
    setTransactionData(transactionRecord);

    // get notes and fill notes textarea
    const note = await getNotes(transactionRecord.id, step.id);
    if (note?.notes) setValue('notes', note?.notes);
  };

  useEffectOnce(fetchTransactionData);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <UploadContainer>
        <UploadInput
          acceptedTypes={['image/png', 'image/gif', 'image/jpeg']}
          multiple
          onAddFiles={onAddFiles}
        >
          <InputInterface>
            <UploadIcon />
            <span>Drag and drop your documents here</span>
            <span>or</span>
            <span>browse</span>
          </InputInterface>
        </UploadInput>

        <FilesList files={documents} onDelete={onDeleteFiles} />
      </UploadContainer>

      <SectionContainer>
        <Table
          headers={['Document Name', 'upload date', 'uploaded by', null]}
          fixedLayout
        >
          {data?.map(({ name, date, by }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{date}</TableCell>
              <TableCell>{by}</TableCell>
              <TableCell iconsCell>
                <IconContainer>
                  <DownloadIcon />
                  <Tooltip
                    text="Download"
                    arrowPosition="top"
                    position={[2, -2]}
                  />
                </IconContainer>
                <IconContainer>
                  <EyeIcon />
                  <Tooltip text="View" arrowPosition="top" position={[2, -1]} />
                </IconContainer>
                <IconContainer>
                  <PrintIcon />
                  <Tooltip
                    text="Print"
                    arrowPosition="top"
                    position={[2, -1]}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon />
                  <Tooltip
                    text="Delete"
                    arrowPosition="top"
                    position={[2, -1.6]}
                  />
                </IconContainer>
              </TableCell>
            </TableRow>
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

        <ButtonsContainer>
          <Button
            type="button"
            light
            onClick={() =>
              navigate(
                `/transaction/${listingId}/${transactionStepsNames.assignTasks}`
              )
            }
          >
            Back
          </Button>
          <Button type="submit">Confirm and Next</Button>
        </ButtonsContainer>
      </SectionContainer>
    </form>
  );
}

export default UploadDocumentsWrapper;
