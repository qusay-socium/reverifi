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
import DropdownMenu from 'components/shared/DropdownMenu';
import TextAreaInput from 'components/shared/FormTextArea';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import assignTasksSchema from './assign-tasks-wrapper-schema';
import {
  AssignTasksContainer,
  AssignTasksForm,
  ButtonsContainer,
  InputsContainer,
  PartiesInputsContainer,
  ProcessText,
  SectionContainer,
} from './assign-tasks-wrapper.styles';

const initialTableContent = [
  {
    assignToDefaultValue: null,
    assignToName: 'initialContractName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'initialContractDate',
    id: 1,
    process: 'Initial Contract',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'signedInitialContractName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'signedInitialContractDate',
    id: 2,
    process: 'Signed Initial Contract',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'attorneyReviewBuyerSideName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'attorneyReviewBuyerSideDate',
    id: 3,
    process: 'Attorney Review Buyer Side',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'attorneyReviewSellerSideName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'attorneyReviewSellerSideDate',
    id: 4,
    process: 'Attorney Review Seller Side',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'attorneyApprovalBuyerSideName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'attorneyApprovalBuyerSideDate',
    id: 5,
    process: 'Attorney Approval Buyer Side',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'attorneyApprovalSellerSideName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'attorneyApprovalSellerSideDate',
    id: 6,
    process: 'Attorney Approval Seller Side',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'inspectionDateName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'inspectionDate',
    id: 7,
    process: 'Inspection Date',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'confirmInspectionName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'confirmInspectionDate',
    id: 8,
    process: 'Confirm Inspection Date',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'inspectionResultsName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'inspectionResultsDate',
    id: 9,
    process: 'Inspection Results',
  },
  {
    assignToDefaultValue: null,
    assignToName: 'suggestAppraisalName',
    assignToOptions: ['John', 'Mark', 'Frank'],
    dateDefaultValue: null,
    dateName: 'suggestAppraisalDate',
    id: 10,
    process: 'Suggest Appraisal Date',
  },
];

/**
 * Assign Tasks Wrapper component.
 *
 * @return {JSX.Element}
 */
function AssignTasksWrapper() {
  const [tableContent /* setTableContent */] = useState(initialTableContent);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(assignTasksSchema),
  });

  /**
   * Handle form submit.
   *
   * @param {Object} data Form data.
   */
  const submit = () => {};

  return (
    <AssignTasksContainer>
      <AssignTasksForm onSubmit={handleSubmit(submit)}>
        <PartiesInputsContainer>
          <InputsContainer>
            <DropdownMenu
              register={register}
              error={errors?.lender?.message}
              label="Select or Invite Lender:"
              labelIcon={<LenderIcon />}
              name="lender"
              small
              required
              placeholder="Select Lender"
              options={['John', 'Mark', 'Frank']}
            />
            <DropdownMenu
              register={register}
              error={errors?.coordinator?.message}
              label="Select or Invite Transaction Coordinator:"
              labelIcon={<CoordinatorIcon />}
              name="coordinator"
              small
              required
              placeholder="Select Coordinator"
              options={['John', 'Mark', 'Frank']}
            />
          </InputsContainer>
          <InputsContainer>
            <DropdownMenu
              register={register}
              error={errors?.buyerAttorney?.message}
              label="Buyer Attorney:"
              labelIcon={<BuyerAttorneyIcon />}
              name="buyerAttorney"
              small
              required
              placeholder="Select Buyer Attorney"
              options={['John', 'Mark', 'Frank']}
            />
            <DropdownMenu
              register={register}
              error={errors?.sellerAttorney?.message}
              label="Seller Attorney:"
              labelIcon={<SellerAttorneyIcon />}
              name="sellerAttorney"
              small
              required
              placeholder="Select Seller Attorney"
              options={['John', 'Mark', 'Frank']}
            />
          </InputsContainer>

          <InputsContainer>
            <DropdownMenu
              register={register}
              error={errors?.titleInsurance?.message}
              label="Title Insurance:"
              labelIcon={<TitleInsuranceIcon />}
              name="titleInsurance"
              small
              required
              placeholder="Select Title Insurance"
              options={['John', 'Mark', 'Frank']}
            />
            <DropdownMenu
              register={register}
              error={errors?.homeInsurance?.message}
              label="Home Insurance:"
              labelIcon={<HomeInsuranceIcon />}
              name="homeInsurance"
              small
              required
              placeholder="Select Home Insurance"
              options={['John', 'Mark', 'Frank']}
            />
          </InputsContainer>
        </PartiesInputsContainer>

        <SectionContainer>
          <Table headers={['process', 'assign to', 'due date']} fixedLayout>
            {tableContent?.map(
              ({ assignToName, assignToOptions, dateName, process, id }) => (
                <TableRow key={id}>
                  <TableCell>
                    <ProcessText>{process}</ProcessText>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu
                      register={register}
                      error={errors[assignToName]?.message}
                      name={assignToName}
                      small
                      smallBorderRadius
                      placeholder="Unassigned"
                      options={assignToOptions}
                    />
                  </TableCell>
                  <TableCell>
                    <DatePickerInput
                      required
                      small
                      smallBorderRadius
                      placeholder="Select Date Range"
                      name={dateName}
                      control={control}
                      error={
                        errors[dateName]?.[0]?.message ||
                        errors[dateName]?.[1]?.message ||
                        errors[dateName]?.message
                      }
                      register={register}
                    />
                  </TableCell>
                </TableRow>
              )
            )}
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
            <Button type="button" light>
              Back
            </Button>
            <Button type="submit">Confirm and Next</Button>
          </ButtonsContainer>
        </SectionContainer>
      </AssignTasksForm>
    </AssignTasksContainer>
  );
}

export default AssignTasksWrapper;
