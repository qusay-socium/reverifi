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
          .required('number is required')
          .typeError('number is required'),
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
          .required('ext is required')
          .typeError('ext is required'),
      }),
  })
  .required();

export default signUpSchema;
