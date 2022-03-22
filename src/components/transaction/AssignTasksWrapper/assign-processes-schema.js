import * as yup from 'yup';

const nameValidator = yup
  .object()
  .required('Required field')
  .typeError('Required field');

const dateValidator = yup
  .date()
  .required('Required field')
  .typeError('Required field');

const assignProcessesSchema = yup
  .object({
    attorneyApprovalBuyerSideDate: dateValidator,
    attorneyApprovalBuyerSideName: nameValidator,
    attorneyApprovalSellerSideDate: dateValidator,
    attorneyApprovalSellerSideName: nameValidator,
    attorneyReviewBuyerSideDate: dateValidator,
    attorneyReviewBuyerSideName: nameValidator,
    attorneyReviewSellerSideDate: dateValidator,
    attorneyReviewSellerSideName: nameValidator,
    confirmInspectionDate: dateValidator,
    confirmInspectionName: nameValidator,
    initialContractDate: dateValidator,
    initialContractName: nameValidator,
    inspectionDate: dateValidator,
    inspectionDateName: nameValidator,
    inspectionResultsDate: dateValidator,
    inspectionResultsName: nameValidator,
    notes: yup.string(),
    signedInitialContractDate: dateValidator,
    signedInitialContractName: nameValidator,
    suggestAppraisalDate: dateValidator,
    suggestAppraisalName: nameValidator,
  })
  .required();

export default assignProcessesSchema;
