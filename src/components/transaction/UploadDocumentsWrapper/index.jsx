import { ReactComponent as AcceptIcon } from 'assets/icons/dashboard-offers-accept.svg';
import { ReactComponent as DeclineIcon } from 'assets/icons/dashboard-offers-decline.svg';
import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/transaction-step3-delete.svg';
import { ReactComponent as DownloadIcon } from 'assets/icons/transaction-step3-download.svg';
import { ReactComponent as EyeIcon } from 'assets/icons/transaction-step3-eye.svg';
import { ReactComponent as PrintIcon } from 'assets/icons/transaction-step3-print.svg';
import loadingImage from 'assets/images/loading.gif';
import Button from 'components/shared/Button';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import {
  IconContainer,
  TableCell,
  TableRow,
} from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import UploadInput from 'components/shared/UploadInput';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addDocument,
  addOrUpdateTransaction,
  addTransactionNote,
  deleteTransactionDocument,
  getDocumentsNames,
  getNotes,
  getTransactionDocuments,
  getWorkflowStep,
} from 'services/transactions';
import singleFileUpload from 'services/upload';
import { transactionStepsNames } from 'utils/constants';
import { ButtonsContainer } from '../AssignTasksWrapper/assign-tasks-wrapper.styles';
import {
  LoadingImage,
  SectionContainer,
  UploadFileContainer,
  UploadText,
} from './upload-documents-wrapper.styles';

/**
 * Upload Documents Wrapper components
 *
 * @return {JSX.Element}
 */
function UploadDocumentsWrapper() {
  const [documents, setDocuments] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [documentsNames, setDocumentsNames] = useState([]);
  const [loading, setLoading] = useState(false);
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
   * find documents
   */
  const getDocumentById = (docId) =>
    documents?.find(({ documentNameId }) => documentNameId === docId);

  /**
   *  fetch Documents function
   */
  const fetchDocuments = async (id) => {
    const docs = await getTransactionDocuments(id);

    setDocuments(docs);
    setUploadedFile(null);
  };

  /**
   *  handle Delete Document
   */
  const handleDeleteDocument = async (id) => {
    const docId = getDocumentById(id);

    await deleteTransactionDocument(docId?.id);
    fetchDocuments(transactionData?.id);
  };

  /**
   * handle Add File function
   */
  const handleAddFile = async (file, id) => {
    setUploadedFile({ file, id });
  };

  /**
   * handle Decline Upload
   */
  const handleDeclineUpload = () => {
    setUploadedFile(null);
  };

  /**
   * handle Accept Upload
   */
  const handleAcceptUpload = async () => {
    setLoading(true);

    await singleFileUpload({
      file: uploadedFile?.file,
      onError: () => {
        setLoading(false);
      },
      onSuccess: async ({ data }) => {
        if (data?.publicUrl) {
          await addDocument({
            documentNameId: uploadedFile?.id,
            documentUrl: data?.publicUrl,
            transactionId: transactionData?.id,
          });

          fetchDocuments(transactionData?.id);
          setLoading(false);
        }
      },
    });
  };

  /**
   * submit function
   */
  const submit = async ({ notes }) => {
    // save note
    if (notes) {
      await addTransactionNote({
        notes,
        transactionId: transactionData.id,
        workflowStepId: workflowStep.id,
      });
    }

    //  redirect to step 4
    navigate(
      `/transaction/${listingId}/${transactionStepsNames.closeDeal.route}`
    );
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

    // get the documents names
    const docNames = await getDocumentsNames();
    setDocumentsNames(docNames);

    // fetch transaction uploaded documents
    fetchDocuments(transactionRecord?.id);

    // get notes and fill notes textarea
    const note = await getNotes(transactionRecord.id, step.id);
    if (note?.notes) setValue('notes', note?.notes);
  };

  useEffectOnce(fetchTransactionData);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <SectionContainer>
        <Table
          headers={['Document Name', 'upload date', 'uploaded by', null]}
          fixedLayout
        >
          {documentsNames?.map(({ id, name }) => (
            <TableRow key={id}>
              <TableCell wordBreak>{name}</TableCell>
              <TableCell>
                {getDocumentById(id)?.createdAt
                  ? new Date(
                      getDocumentById(id)?.createdAt || ''
                    )?.toLocaleDateString()
                  : null}
              </TableCell>
              <TableCell>
                {getDocumentById(id)?.documentUser?.name || null}
              </TableCell>
              <TableCell iconsCell>
                {getDocumentById(id) ? (
                  <div>
                    <a
                      href={getDocumentById(id)?.documentUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconContainer>
                        <EyeIcon />
                        <Tooltip
                          text="View"
                          arrowPosition="top"
                          position={[2, -1]}
                        />
                      </IconContainer>
                    </a>
                    <IconContainer>
                      <DownloadIcon />
                      <Tooltip
                        text="Download"
                        arrowPosition="top"
                        position={[2, -2]}
                      />
                    </IconContainer>
                    <IconContainer>
                      <PrintIcon />
                      <Tooltip
                        text="Print"
                        arrowPosition="top"
                        position={[2, -1]}
                      />
                    </IconContainer>
                    <IconContainer onClick={() => handleDeleteDocument(id)}>
                      <DeleteIcon />
                      <Tooltip
                        text="Delete"
                        arrowPosition="top"
                        position={[2, -1.6]}
                      />
                    </IconContainer>
                  </div>
                ) : uploadedFile?.id === id && loading ? (
                  <IconContainer>
                    <LoadingImage src={loadingImage} />
                  </IconContainer>
                ) : (
                  <UploadFileContainer>
                    <UploadInput onAddFiles={(file) => handleAddFile(file, id)}>
                      <UploadText>Upload</UploadText>
                    </UploadInput>
                    {uploadedFile?.id === id && (
                      <>
                        <p>{uploadedFile?.file?.[0]?.name}</p>
                        <IconContainer onClick={handleAcceptUpload}>
                          <AcceptIcon />
                        </IconContainer>
                        <IconContainer onClick={handleDeclineUpload}>
                          <DeclineIcon />
                        </IconContainer>
                      </>
                    )}
                  </UploadFileContainer>
                )}
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
                `/transaction/${listingId}/${transactionStepsNames.assignTasks.route}`
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
