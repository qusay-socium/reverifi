import * as yup from 'yup';

const nameValidator = yup
  .object()
  .required('Required field')
  .typeError('Required field');

const addPartiesSchema = yup
  .object({
    buyer: nameValidator,
    buyerAgent: nameValidator,
    finalSalePrice: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === '' ? undefined : value
      )
      .typeError('This field should be a number')
      .min(1, 'This field should be greater than or equal to 0')
      .required('This field is required'),
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
