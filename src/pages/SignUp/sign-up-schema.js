import * as yup from 'yup';

const signUpSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    industryProfessional: yup.boolean(),
    name: yup.string().label('Name').required(),
    password: yup
      .string()
      .label('Password')
      .required()
      .typeError('password must be a number'),
    phoneNumber: yup
      .number()
      .label('Phone Number')
      .positive()
      .integer()
      .when('industryProfessional', {
        is: true,
        then: yup
          .number()
          .required()
          .typeError('Phone Number must be a number'),
      }),
    phonePrefix: yup
      .number()
      .label('Phone Number')
      .positive()
      .integer()
      .when('industryProfessional', {
        is: true,
        then: yup
          .number()
          .required()
          .typeError('Phone Number must be a number'),
      }),
  })
  .required();

export default signUpSchema;
