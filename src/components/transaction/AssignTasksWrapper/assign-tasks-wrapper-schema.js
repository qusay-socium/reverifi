import * as yup from 'yup';

const stringValidator = yup.object();

const dateArrayValidator = yup
  .array()
  .of(
    yup.date().typeError('Required field'),
    yup.date().typeError('Required field')
  );
const assignTasksSchema = yup
  .object({
    attorneyApprovalBuyerSideDate: dateArrayValidator,
    attorneyApprovalBuyerSideName: stringValidator,
    attorneyApprovalSellerSideDate: dateArrayValidator,
    attorneyApprovalSellerSideName: stringValidator,
    attorneyReviewBuyerSideDate: dateArrayValidator,
    attorneyReviewBuyerSideName: stringValidator,
    attorneyReviewSellerSideDate: dateArrayValidator,
    attorneyReviewSellerSideName: stringValidator,
    buyerAttorney: stringValidator,
    confirmInspectionDate: dateArrayValidator,
    confirmInspectionName: stringValidator,
    coordinator: stringValidator,
    homeInsurance: stringValidator,
    initialContractDate: dateArrayValidator,
    initialContractName: stringValidator,
    inspectionDate: dateArrayValidator,
    inspectionDateName: stringValidator,
    inspectionResultsDate: dateArrayValidator,
    inspectionResultsName: stringValidator,
    lender: stringValidator,
    notes: yup.string(),
    sellerAttorney: stringValidator,
    signedInitialContractDate: dateArrayValidator,
    signedInitialContractName: stringValidator,
    suggestAppraisalDate: dateArrayValidator,
    suggestAppraisalName: stringValidator,
    titleInsurance: stringValidator,
  })
  .required();

export default assignTasksSchema;
