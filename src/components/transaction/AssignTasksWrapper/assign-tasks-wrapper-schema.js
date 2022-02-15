import * as yup from 'yup';

const assignTasksSchema = yup
  .object({
    attorneyApprovalBuyerSideDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    attorneyApprovalBuyerSideName: yup.string().required('Required field'),
    attorneyApprovalSellerSideDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    attorneyApprovalSellerSideName: yup.string().required('Required field'),
    attorneyReviewBuyerSideDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    attorneyReviewBuyerSideName: yup.string().required('Required field'),
    attorneyReviewSellerSideDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    attorneyReviewSellerSideName: yup.string().required('Required field'),
    buyerAttorney: yup.string().required('Required field'),
    confirmInspectionDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    confirmInspectionName: yup.string().required('Required field'),
    coordinator: yup.string().required('Required field'),
    homeInsurance: yup.string().required('Required field'),
    initialContractDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    initialContractName: yup.string().required('Required field'),
    inspectionDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    inspectionDateName: yup.string().required('Required field'),
    inspectionResultsDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    inspectionResultsName: yup.string().required('Required field'),
    lender: yup.string().required('Required field'),
    notes: yup.string(),
    sellerAttorney: yup.string().required('Required field'),
    signedInitialContractDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    signedInitialContractName: yup.string().required('Required field'),
    suggestAppraisalDate: yup
      .array()
      .of(
        yup.date().typeError('Required field'),
        yup.date().typeError('Required field')
      )
      .required('Required field'),
    suggestAppraisalName: yup.string().required('Required field'),
    titleInsurance: yup.string().required('Required field'),
  })
  .required();

export default assignTasksSchema;
