import * as yup from 'yup';

const submitOfferSchema = yup
  .object({
    phone: yup.string().when('showPhoneNumber', {
      is: true,
      then: yup
        .string()
        .required('Field is required')
        .typeError('Field is required'),
    }),
    price: yup
      .string()
      .required('Price is required')
      .typeError('Price is required'),
    showPhoneNumber: yup.bool(),
  })
  .required();

export default submitOfferSchema;
