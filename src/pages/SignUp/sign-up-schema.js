import * as yup from 'yup';

// make sure that the password have 1 uppercase, 1 lowercase, 1 special case and 1 number characters
const passwordRegex =
  // eslint-disable-next-line no-useless-escape
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|])(?=.{8,})/;

const signUpSchema = yup
  .object({
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
      .required(),
    email: yup.string().label('E-mail').email().required(),
    industryProfessional: yup.boolean(),
    name: yup
      .string()
      .label('Name')
      .required()
      .min(3, 'Name should be at least 3 letters')
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
      .string()
      .label('Phone Number')
      .when('industryProfessional', {
        is: true,
        then: yup
          .string()
          .required('Phone number is required')
          .test(
            'len',
            'Phone number must be at least 10 digits',
            (val) => val.toString().length === 10
          )
          .typeError('Phone number is required'),
      })
      .typeError('Phone number is required'),
  })
  .required();

export default signUpSchema;
