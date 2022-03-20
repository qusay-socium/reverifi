import * as yup from 'yup';

const nameValidator = yup
  .object()
  .required('Required field')
  .typeError('Required field');

const assigneesSchema = yup
  .object({
    buyerAttorney: nameValidator,
    coordinator: nameValidator,
    homeInsurance: nameValidator,
    lender: nameValidator,
    sellerAttorney: nameValidator,
    titleInsurance: nameValidator,
  })
  .required();

export default assigneesSchema;
