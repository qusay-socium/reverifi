import * as yup from 'yup';

const nameValidator = yup
  .object()
  .required('Required field')
  .typeError('Required field');

const addPartiesSchema = yup
  .object({
    buyer: nameValidator,
    buyerAgent: nameValidator,
    notes: yup.string(),
    representSeller: yup.boolean(),
    seller: yup
      .object()
      .nullable()
      .when('representSeller', {
        is: false,
        then: yup
          .object()
          .required('Required field')
          .typeError('Required field'),
      }),
    sellerAgent: nameValidator,
  })
  .required();

export default addPartiesSchema;
