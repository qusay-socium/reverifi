import * as yup from 'yup';

const loginSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    password: yup
      .string()
      .label('Password')
      .required()
      .typeError('password must be a number'),
  })
  .required();

export default loginSchema;
