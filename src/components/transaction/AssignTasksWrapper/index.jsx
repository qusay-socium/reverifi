import { yupResolver } from '@hookform/resolvers/yup';
import { ReactComponent as NotesIcon } from 'assets/icons/overview.svg';
import { ReactComponent as BuyerAttorneyIcon } from 'assets/icons/transaction-buyer-attorney.svg';
import { ReactComponent as CoordinatorIcon } from 'assets/icons/transaction-coordinator2.svg';
import { ReactComponent as HomeInsuranceIcon } from 'assets/icons/transaction-home-insurance.svg';
import { ReactComponent as TitleInsuranceIcon } from 'assets/icons/transaction-insurance.svg';
import { ReactComponent as LenderIcon } from 'assets/icons/transaction-lender.svg';
import { ReactComponent as SellerAttorneyIcon } from 'assets/icons/transaction-seller-attorney.svg';
import Button from 'components/shared/Button';
import DatePickerInput from 'components/shared/DatePickerInput';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import TransactionSelectInput from 'components/shared/TransactionSelectInput';
import { useShowModal } from 'contexts/ShowModalContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addInvitation } from 'services/invitations';
import {
  addOrUpdateTransaction,
  addProcesses,
  addTransactionAssignees,
  addTransactionNote,
  getAssignees,
  getNotes,
  getProcesses,
  getTransactionsProcesses,
  getWorkflowStep,
} from 'services/transactions';
import { getUsersWithLimit } from 'services/user';
import { transactionStepsNames } from 'utils/constants';
import assignProcessesSchema from './assign-processes-schema';
import {
  AssignTasksForm,
  ButtonsContainer,
  HiddenInput,
  InputsContainer,
  PartiesInputsContainer,
  ProcessText,
  SectionContainer,
} from './assign-tasks-wrapper.styles';
import assigneesSchema from './assignees-schema';

const tableContent = [
  {
    assignToName: 'initialContractName',
    dateName: 'initialContractDate',
    name: 'Initial Contract',
    process: 'initialContract',
  },
  {
    assignToName: 'signedInitialContractName',
    dateName: 'signedInitialContractDate',
    name: 'Signed Initial Contract',
    process: 'signedInitialContract',
  },
  {
    assignToName: 'attorneyReviewBuyerSideName',
    dateName: 'attorneyReviewBuyerSideDate',
    name: 'Attorney Review Buyer Side',
    process: 'attorneyReviewBuyerSide',
  },
  {
    assignToName: 'attorneyReviewSellerSideName',
    dateName: 'attorneyReviewSellerSideDate',
    name: 'Attorney Review Seller Side',
    process: 'attorneyReviewSellerSide',
  },
  {
    assignToName: 'attorneyApprovalBuyerSideName',
    dateName: 'attorneyApprovalBuyerSideDate',
    name: 'Attorney Approval Buyer Side',
    process: 'attorneyApprovalBuyerSide',
  },
  {
    assignToName: 'attorneyApprovalSellerSideName',
    dateName: 'attorneyApprovalSellerSideDate',
    name: 'Attorney Approval Seller Side',
    process: 'attorneyApprovalSellerSide',
  },
  {
    assignToName: 'inspectionDateName',
    dateName: 'inspectionDate',
    name: 'Inspection Date',
    process: 'inspection',
  },
  {
    assignToName: 'confirmInspectionName',
    dateName: 'confirmInspectionDate',
    name: 'Confirm Inspection Date',
    process: 'confirmInspection',
  },
  {
    assignToName: 'inspectionResultsName',
    dateName: 'inspectionResultsDate',
    name: 'Inspection Results',
    process: 'inspectionResults',
  },
  {
    assignToName: 'suggestAppraisalName',
    dateName: 'suggestAppraisalDate',
    name: 'Suggest Appraisal Date',
    process: 'suggestAppraisal',
  },
];

/**
 * Assign Tasks Wrapper component.
 *
 * @return {JSX.Element}
 */
function AssignTasksWrapper() {
  const { listingId } = useParams();
  const [transactionData, setTransactionData] = useState({});
  const [processes, setProcesses] = useState([]);
  const { modalData, setModalData } = useShowModal();
  const [nameList, setNameList] = useState([]);
  const [processesNameList, setProcessesNameList] = useState([]);
  const [workflowStep, setWorkflowStep] = useState({});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(assignProcessesSchema),
  });

  const {
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    control: control2,
    setValue: setValue2,
    reset: reset2,
  } = useForm({
    resolver: yupResolver(assigneesSchema),
  });

  /**
   * handle Input Change function
   */
  const handleInputChange = async (name) => {
    if (name?.length > 2) {
      const data = await getUsersWithLimit(10, name);
      setNameList(data);
    } else {
      setNameList([]);
    }
  };

  /**
   * filter Invited Users function (when id === name the user is invited -not exist-)
   */
  const filterInvitedUsers = (idsAndRolesArray, user, role) => {
    if (user?.name !== user?.id) {
      idsAndRolesArray.push({
        invitedUserId: user?.id,
        role,
      });
    }
  };

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submitAssignees = async ({
    lender,
    coordinator,
    buyerAttorney,
    sellerAttorney,
    titleInsurance,
    homeInsurance,
  }) => {
    // filter the non exist and send invitations
    const userIdsAndRoles = [];

    filterInvitedUsers(userIdsAndRoles, lender, 'Lender');
    filterInvitedUsers(userIdsAndRoles, coordinator, 'Coordinator');
    filterInvitedUsers(userIdsAndRoles, buyerAttorney, 'Buyer Attorney');
    filterInvitedUsers(userIdsAndRoles, sellerAttorney, 'Seller Attorney');
    filterInvitedUsers(userIdsAndRoles, titleInsurance, 'Title Insurance');
    filterInvitedUsers(userIdsAndRoles, homeInsurance, 'Home Insurance');

    await addInvitation({
      listingId,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });

    // save assignees
    await addTransactionAssignees({
      transactionId: transactionData.id,
      userIdsAndRoles: modalData?.invitedUsers?.length
        ? [...userIdsAndRoles, ...modalData?.invitedUsers]
        : userIdsAndRoles,
    });

    // set assignees names list
    const names = await getAssignees(transactionData.id);

    setProcessesNameList(
      names?.map(({ id, assignedUser }) => ({
        id,
        name: assignedUser?.name,
      }))
    );
  };

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submitAssigneesProcesses = async ({
    attorneyApprovalBuyerSide,
    attorneyApprovalBuyerSideDate,
    attorneyApprovalBuyerSideName,
    attorneyApprovalSellerSide,
    attorneyApprovalSellerSideDate,
    attorneyApprovalSellerSideName,
    attorneyReviewBuyerSide,
    attorneyReviewBuyerSideDate,
    attorneyReviewBuyerSideName,
    attorneyReviewSellerSide,
    attorneyReviewSellerSideDate,
    attorneyReviewSellerSideName,
    confirmInspectionDate,
    confirmInspection,
    confirmInspectionName,
    initialContract,
    initialContractDate,
    initialContractName,
    inspectionDate,
    inspection,
    inspectionDateName,
    inspectionResults,
    inspectionResultsDate,
    inspectionResultsName,
    notes,
    signedInitialContract,
    signedInitialContractDate,
    signedInitialContractName,
    suggestAppraisalDate,
    suggestAppraisal,
    suggestAppraisalName,
  }) => {
    // save data
    const dbBody = [
      {
        assigneeId: initialContractName?.id,
        dueDate: initialContractDate,
        processId: initialContract,
      },
      {
        assigneeId: signedInitialContractName?.id,
        dueDate: signedInitialContractDate,
        processId: signedInitialContract,
      },
      {
        assigneeId: attorneyReviewBuyerSideName?.id,
        dueDate: attorneyReviewBuyerSideDate,
        processId: attorneyReviewBuyerSide,
      },
      {
        assigneeId: attorneyReviewSellerSideName?.id,
        dueDate: attorneyReviewSellerSideDate,
        processId: attorneyReviewSellerSide,
      },
      {
        assigneeId: attorneyApprovalBuyerSideName?.id,
        dueDate: attorneyApprovalBuyerSideDate,
        processId: attorneyApprovalBuyerSide,
      },
      {
        assigneeId: attorneyApprovalSellerSideName?.id,
        dueDate: attorneyApprovalSellerSideDate,
        processId: attorneyApprovalSellerSide,
      },
      {
        assigneeId: inspectionDateName?.id,
        dueDate: inspectionDate,
        processId: inspection,
      },
      {
        assigneeId: confirmInspectionName?.id,
        dueDate: confirmInspectionDate,
        processId: confirmInspection,
      },
      {
        assigneeId: inspectionResultsName?.id,
        dueDate: inspectionResultsDate,
        processId: inspectionResults,
      },

      {
        assigneeId: suggestAppraisalName?.id,
        dueDate: suggestAppraisalDate,
        processId: suggestAppraisal,
      },
    ];

    await addProcesses({
      transactionId: transactionData.id,
      usersData: dbBody,
    });

    // add the note
    if (notes) {
      await addTransactionNote({
        notes,
        transactionId: transactionData.id,
        workflowStepId: workflowStep.id,
      });
    }

    // redirect to step 3
    navigate(
      `/transaction/${listingId}/${transactionStepsNames.uploadDocuments.route}`
    );
  };

  /**
   * fetch Transaction Data function
   */
  const fetchTransactionData = async () => {
    // reset modal data
    setModalData(null);

    // get step info
    const step = await getWorkflowStep(2);
    setWorkflowStep(step);

    // create transaction record
    const transactionRecord = await addOrUpdateTransaction({
      listingId,
      workflowStepId: step.id,
    });
    setTransactionData(transactionRecord);

    // get processes
    const dbProcesses = await getProcesses();
    setProcesses(dbProcesses);

    // fill inputs if data exist

    // get assignees and fill inputs data
    const assignees = await getAssignees(transactionRecord.id);

    if (assignees.length > 4) {
      // set process table dropdown names
      setProcessesNameList(
        assignees?.map(({ id, assignedUser }) => ({
          id,
          name: assignedUser?.name,
        }))
      );

      const lender = assignees.find((item) => item?.role === 'Lender');
      const buyerAttorney = assignees.find(
        (item) => item?.role === 'Buyer Attorney'
      );
      const coordinator = assignees.find(
        (item) => item?.role === 'Coordinator'
      );
      const sellerAttorney = assignees.find(
        (item) => item?.role === 'Seller Attorney'
      );
      const titleInsurance = assignees.find(
        (item) => item?.role === 'Title Insurance'
      );
      const homeInsurance = assignees.find(
        (item) => item?.role === 'Home Insurance'
      );

      reset2({
        buyerAttorney: {
          id: buyerAttorney?.assignedUser?.id,
          name: buyerAttorney?.assignedUser?.name,
        },
        coordinator: {
          id: coordinator?.assignedUser?.id,
          name: coordinator?.assignedUser?.name,
        },
        homeInsurance: {
          id: homeInsurance?.assignedUser?.id,
          name: homeInsurance?.assignedUser?.name,
        },
        lender: {
          id: lender?.assignedUser?.id,
          name: lender?.assignedUser?.name,
        },
        sellerAttorney: {
          id: sellerAttorney?.assignedUser?.id,
          name: sellerAttorney?.assignedUser?.name,
        },
        titleInsurance: {
          id: titleInsurance?.assignedUser?.id,
          name: titleInsurance?.assignedUser?.name,
        },
      });
    }

    // get processes assignees and fill table data
    const assigneeProcesses = await getTransactionsProcesses(
      transactionRecord.id
    );

    if (assigneeProcesses.length) {
      const initialContract = assigneeProcesses.find(
        (item) => item?.process?.name === 'Initial Contract'
      );
      const signedInitialContract = assigneeProcesses.find(
        (item) => item?.process?.name === 'Signed Initial Contract'
      );
      const attorneyReviewBuyerSide = assigneeProcesses.find(
        (item) => item?.process?.name === 'Attorney Review Buyer Side'
      );
      const attorneyReviewSellerSide = assigneeProcesses.find(
        (item) => item?.process?.name === 'Attorney Review Seller Side'
      );
      const attorneyApprovalBuyerSide = assigneeProcesses.find(
        (item) => item?.process?.name === 'Attorney Approval Buyer Side'
      );
      const attorneyApprovalSellerSide = assigneeProcesses.find(
        (item) => item?.process?.name === 'Attorney Approval Seller Side'
      );
      const inspection = assigneeProcesses.find(
        (item) => item?.process?.name === 'Inspection Date'
      );
      const confirmInspection = assigneeProcesses.find(
        (item) => item?.process?.name === 'Confirm Inspection Date'
      );
      const inspectionResults = assigneeProcesses.find(
        (item) => item?.process?.name === 'Inspection Results'
      );
      const suggestAppraisal = assigneeProcesses.find(
        (item) => item?.process?.name === 'Suggest Appraisal Date'
      );

      reset({
        attorneyApprovalBuyerSide: attorneyApprovalBuyerSide?.process?.id,
        attorneyApprovalBuyerSideDate: attorneyApprovalBuyerSide?.dueDate.length
          ? [
              new Date(attorneyApprovalBuyerSide?.dueDate[0]),
              new Date(attorneyApprovalBuyerSide?.dueDate[1]),
            ]
          : [],
        attorneyApprovalBuyerSideName: {
          id: attorneyApprovalBuyerSide?.assignee?.id,
          name: attorneyApprovalBuyerSide?.assignee?.assignedUser?.name,
        },
        attorneyApprovalSellerSide: attorneyApprovalSellerSide?.process?.id,
        attorneyApprovalSellerSideDate: attorneyApprovalSellerSide?.dueDate
          .length
          ? [
              new Date(attorneyApprovalSellerSide?.dueDate[0]),
              new Date(attorneyApprovalSellerSide?.dueDate[1]),
            ]
          : [],
        attorneyApprovalSellerSideName: {
          id: attorneyApprovalSellerSide?.assignee?.id,
          name: attorneyApprovalSellerSide?.assignee?.assignedUser?.name,
        },
        attorneyReviewBuyerSide: attorneyReviewBuyerSide?.process?.id,
        attorneyReviewBuyerSideDate: attorneyReviewBuyerSide?.dueDate.length
          ? [
              new Date(attorneyReviewBuyerSide?.dueDate[0]),
              new Date(attorneyReviewBuyerSide?.dueDate[1]),
            ]
          : [],
        attorneyReviewBuyerSideName: {
          id: attorneyReviewBuyerSide?.assignee?.id,
          name: attorneyReviewBuyerSide?.assignee?.assignedUser?.name,
        },
        attorneyReviewSellerSide: attorneyReviewSellerSide?.process?.id,
        attorneyReviewSellerSideDate: attorneyReviewSellerSide?.dueDate.length
          ? [
              new Date(attorneyReviewSellerSide?.dueDate[0]),
              new Date(attorneyReviewSellerSide?.dueDate[1]),
            ]
          : [],
        attorneyReviewSellerSideName: {
          id: attorneyReviewSellerSide?.assignee?.id,
          name: attorneyReviewSellerSide?.assignee?.assignedUser?.name,
        },
        confirmInspection: confirmInspection?.process?.id,
        confirmInspectionDate: confirmInspection?.dueDate.length
          ? [
              new Date(confirmInspection?.dueDate[0]),
              new Date(confirmInspection?.dueDate[1]),
            ]
          : [],
        confirmInspectionName: {
          id: confirmInspection?.assignee?.id,
          name: confirmInspection?.assignee?.assignedUser?.name,
        },
        initialContract: initialContract?.process?.id,
        initialContractDate: initialContract?.dueDate.length
          ? [
              new Date(initialContract?.dueDate[0]),
              new Date(initialContract?.dueDate[1]),
            ]
          : [],
        initialContractName: {
          id: initialContract?.assignee?.id,
          name: initialContract?.assignee?.assignedUser?.name,
        },
        inspection: inspection?.process?.id,
        inspectionDate: inspection?.dueDate.length
          ? [new Date(inspection?.dueDate[0]), new Date(inspection?.dueDate[1])]
          : [],
        inspectionDateName: {
          id: inspection?.assignee?.id,
          name: inspection?.assignee?.assignedUser?.name,
        },
        inspectionResults: inspectionResults?.process?.id,
        inspectionResultsDate: inspectionResults?.dueDate.length
          ? [
              new Date(inspectionResults?.dueDate[0]),
              new Date(inspectionResults?.dueDate[1]),
            ]
          : [],
        inspectionResultsName: {
          id: inspectionResults?.assignee?.id,
          name: inspectionResults?.assignee?.assignedUser?.name,
        },
        signedInitialContract: signedInitialContract?.process?.id,
        signedInitialContractDate: signedInitialContract?.dueDate.length
          ? [
              new Date(signedInitialContract?.dueDate[0]),
              new Date(signedInitialContract?.dueDate[1]),
            ]
          : [],
        signedInitialContractName: {
          id: signedInitialContract?.assignee?.id,
          name: signedInitialContract?.assignee?.assignedUser?.name,
        },
        suggestAppraisal: suggestAppraisal?.process?.id,
        suggestAppraisalDate: suggestAppraisal?.dueDate.length
          ? [
              new Date(suggestAppraisal?.dueDate[0]),
              new Date(suggestAppraisal?.dueDate[1]),
            ]
          : [],
        suggestAppraisalName: {
          id: suggestAppraisal?.assignee?.id,
          name: suggestAppraisal?.assignee?.assignedUser?.name,
        },
      });
    }

    // get notes and fill notes textarea
    const note = await getNotes(transactionRecord.id, step.id);
    if (note?.notes) setValue('notes', note?.notes);
  };

  useEffectOnce(fetchTransactionData);

  return (
    <div>
      <AssignTasksForm onSubmit={handleSubmit2(submitAssignees)}>
        <PartiesInputsContainer>
          <InputsContainer>
            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Lender"
              labelIcon={<LenderIcon />}
              name="lender"
              placeholder="Select lender"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2.lender?.message}
            />

            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Coordinator"
              labelIcon={<CoordinatorIcon />}
              name="coordinator"
              placeholder="Select Coordinator"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2?.coordinator?.message}
            />
          </InputsContainer>
          <InputsContainer>
            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Buyer Attorney"
              labelIcon={<BuyerAttorneyIcon />}
              name="buyerAttorney"
              placeholder="Select Buyer Attorney"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2?.buyerAttorney?.message}
            />

            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Seller Attorney"
              labelIcon={<SellerAttorneyIcon />}
              name="sellerAttorney"
              placeholder="Select Seller Attorney"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2?.sellerAttorney?.message}
            />
          </InputsContainer>

          <InputsContainer>
            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Title Insurance"
              labelIcon={<TitleInsuranceIcon />}
              name="titleInsurance"
              placeholder="Select Title Insurance"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2?.titleInsurance?.message}
            />
            <TransactionSelectInput
              options={nameList}
              control={control2}
              label="Home Insurance"
              labelIcon={<HomeInsuranceIcon />}
              name="homeInsurance"
              placeholder="Select Home Insurance"
              handleInputChange={handleInputChange}
              setValue={setValue2}
              setModalData={setModalData}
              error={errors2?.homeInsurance?.message}
            />
          </InputsContainer>
          <Button type="submit">Save</Button>
        </PartiesInputsContainer>
      </AssignTasksForm>

      <form onSubmit={handleSubmit(submitAssigneesProcesses)}>
        <SectionContainer>
          <Table headers={['process', 'assign to', 'due date']} fixedLayout>
            {processes?.map(({ name, id }, index) => (
              <TableRow key={id}>
                <TableCell>
                  <ProcessText>{name}</ProcessText>
                  <HiddenInput
                    {...register(tableContent[index].process)}
                    defaultValue={
                      processes.find(
                        ({ name: ProcessName }) =>
                          ProcessName === tableContent[index].name
                      ).id
                    }
                  />
                </TableCell>
                <TableCell>
                  <TransactionSelectInput
                    options={processesNameList}
                    control={control}
                    name={tableContent[index].assignToName}
                    placeholder="Unassigned"
                    error={errors[tableContent[index].assignToName]?.message}
                    forInvite={false}
                    rounded={false}
                  />
                </TableCell>
                <TableCell>
                  <DatePickerInput
                    required
                    small
                    smallBorderRadius
                    placeholder="Select Date Range"
                    name={tableContent[index].dateName}
                    control={control}
                    error={
                      errors[tableContent[index].dateName]?.[0]?.message ||
                      errors[tableContent[index].dateName]?.[1]?.message ||
                      errors[tableContent[index].dateName]?.message
                    }
                    register={register}
                    isClearable={false}
                  />
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
                  `/transaction/${listingId}/${transactionStepsNames.addParties.route}`
                )
              }
            >
              Back
            </Button>
            <Button type="submit">Confirm and Next</Button>
          </ButtonsContainer>
        </SectionContainer>
      </form>
    </div>
  );
}

export default AssignTasksWrapper;
