import * as yup from 'yup';

const textAndNumbersRegex = /([a-zA-Z])([0-9])*$/;

const myProfileSchema = yup
  .object({
    aboutMe: yup.string().label('About'),
    address: yup.string(),
    city: yup
      .object()
      .required('City is required')
      .typeError('City is required'),
    companyEmail: yup.string().email(),
    companyName: yup
      .string()
      .label('Company')
      .trim()
      .notRequired()
      .test('company_name', 'Company name should contain letters', (value) => {
        if (value) {
          const schema = yup
            .string()
            .matches(
              textAndNumbersRegex,
              'Company name should contain letters'
            );
          return schema.isValidSync(value);
        }
        return true;
      }),
    companyWebsite: yup
      .string()
      .label('Website')
      .trim()
      .notRequired()
      .test(
        'company_name',
        'Company website should contain letters',
        (value) => {
          if (value) {
            const schema = yup
              .string()
              .matches(
                textAndNumbersRegex,
                'Company website should contain letters'
              );
            return schema.isValidSync(value);
          }
          return true;
        }
      ),
    country: yup
      .object()
      .required('Country is required')
      .typeError('Country is required')
      .nullable(),
    email: yup.string().label('E-mail').email(),
    facebook: yup.string().label('Facebook'),
    instagram: yup.string().label('Instagram'),
    languages: yup.array().min(1, 'Languages field must have at least 1 item'),
    linkedin: yup.string().label('LinkedIn'),
    name: yup.string().label('Name').required(),
    phone: yup
      .string()
      .label('Phone')
      .required()
      .min(10, 'Please enter a valid phone number')
      .test(
        'len',
        'Please enter a valid phone number',
        (val) => val.toString().length === 10
      )
      .typeError('Phone number is required'),
    serviceAreas: yup
      .array()
      .min(1, 'Service areas should have at least 1 value')
      .typeError('Service areas should have at least 1 value'),
    youtube: yup.string().label('YouTube'),
    zipCode: yup
      .string()
      .required('ZipCode is required')
      .typeError('ZipCode is required')
      .min(5, 'Must be 5 digits'),
  })
  .required();

export default myProfileSchema;
