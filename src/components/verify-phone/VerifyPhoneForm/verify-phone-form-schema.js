import * as yup from 'yup';

const verifyPhoneSchema = yup
  .object({
    d0: yup.number().required(),
    d1: yup.number().required(),
    d2: yup.number().required(),
    d3: yup.number().required(),
    d4: yup.number().required(),
    d5: yup.number().required(),
  })
  .required();

export default verifyPhoneSchema;
