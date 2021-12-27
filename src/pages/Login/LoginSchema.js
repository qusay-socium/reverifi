import * as yup from 'yup';

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('password must be a number'),
  })
  .required();

export default loginSchema;
