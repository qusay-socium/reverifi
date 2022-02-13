import * as yup from 'yup';

// make sure that the password have 1 uppercase, 1 lowercase, 1 special case and 1 number characters
const passwordRegex =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const signUpSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    industryProfessional: yup.boolean(),
    name: yup
      .string()
      .label('Name')
      .required()
      .matches(/^[a-zA-Z\s]*$/, 'Accept only letters'),
    password: yup
      .string()
      .label('Password')
      .required()
      .matches(
        passwordRegex,
        'Password should be at least 8 characters and contain 1 upper and lower case letter and 1 number and 1 special case character'
      ),
    phoneNumber: yup
      .number()
      .label('Phone Number')
      .positive()
      .integer()
      .when('industryProfessional', {
        is: true,
        then: yup
          .number()
          .required('Phone number must be a number')
          .test(
            'len',
            'Phone number must contain 10 digits',
            (val) => val.toString().length === 10
          )
          .typeError('Phone number must be a number'),
      })
      .typeError('Phone number must be a number'),
    phonePrefix: yup
      .number()
      .label('Phone Number')
      .positive()
      .integer()
      .when('industryProfessional', {
        is: true,
        then: yup
          .number()
          .required('Ext is required')
          .typeError('Ext is required'),
      })
      .typeError('Ext is required'),
  })
  .required();

export default signUpSchema;
