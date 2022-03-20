import * as yup from 'yup';

const nameValidator = yup
  .object()
  .required('Required field')
  .typeError('Required field');

const dateArrayValidator = yup
  .array()
  .required('Required field')
  .of(
    yup.date().typeError('Required field'),
    yup.date().typeError('Required field')
  );
const assignProcessesSchema = yup
  .object({
    attorneyApprovalBuyerSideDate: dateArrayValidator,
    attorneyApprovalBuyerSideName: nameValidator,
    attorneyApprovalSellerSideDate: dateArrayValidator,
    attorneyApprovalSellerSideName: nameValidator,
    attorneyReviewBuyerSideDate: dateArrayValidator,
    attorneyReviewBuyerSideName: nameValidator,
    attorneyReviewSellerSideDate: dateArrayValidator,
    attorneyReviewSellerSideName: nameValidator,
    confirmInspectionDate: dateArrayValidator,
    confirmInspectionName: nameValidator,
    initialContractDate: dateArrayValidator,
    initialContractName: nameValidator,
    inspectionDate: dateArrayValidator,
    inspectionDateName: nameValidator,
    inspectionResultsDate: dateArrayValidator,
    inspectionResultsName: nameValidator,
    notes: yup.string(),
    signedInitialContractDate: dateArrayValidator,
    signedInitialContractName: nameValidator,
    suggestAppraisalDate: dateArrayValidator,
    suggestAppraisalName: nameValidator,
  })
  .required();

export default assignProcessesSchema;
