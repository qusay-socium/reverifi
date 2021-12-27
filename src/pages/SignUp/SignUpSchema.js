import * as yup from 'yup';

const signUpSchema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup
      .number()
      .positive()
      .integer()
      .required()
      .typeError('password must be a number'),
    phoneCheckbox: yup.boolean(),
    phoneNumber: yup
      .number()
      .positive()
      .integer()
      .when('phoneCheckbox', {
        is: true,
        then: yup.number().required().typeError('phoneNumber must be a number'),
      }),
    phonePrefix: yup
      .number()
      .positive()
      .integer()
      .when('phoneCheckbox', {
        is: true,
        then: yup.number().required().typeError('phonePrefix must be a number'),
      }),
  })
  .required();

export default signUpSchema;
