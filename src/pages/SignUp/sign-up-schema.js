import * as yup from 'yup';

// make sure that the password have 1 uppercase, 1 lowercase, 1 special case and 1 number characters
const passwordRegex =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const signUpSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    industryProfessional: yup.boolean(),
    name: yup.string().label('Name').required(),
    password: yup
      .string()
      .label('Password')
      .required()
      .min(8, 'password is too short - should be 8 chars minimum')
      .matches(
        passwordRegex,
        'must Contain One Uppercase, One Lowercase, One Number and One Special Case Character'
      )
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
