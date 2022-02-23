import * as yup from 'yup';

const textAndNumbersRegex =
  // eslint-disable-next-line no-useless-escape
  /([a-zA-Z])([-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|0-9])*$/;

const myProfileSchema = yup
  .object({
    aboutMe: yup
      .string()
      .label('About me')
      .required('About me is required')
      .matches(/^(\S+)/, 'About me is required'),
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
    facebook: yup
      .string()
      .label('Facebook')
      .test('facebook', 'facebook link should contain letters', (value) => {
        if (value) {
          const schema = yup
            .string()
            .matches(
              textAndNumbersRegex,
              'facebook link should contain letters'
            );
          return schema.isValidSync(value);
        }
        return true;
      }),
    instagram: yup
      .string()
      .label('Instagram')
      .test('instagram', 'instagram link should contain letters', (value) => {
        if (value) {
          const schema = yup
            .string()
            .matches(
              textAndNumbersRegex,
              'instagram link should contain letters'
            );
          return schema.isValidSync(value);
        }
        return true;
      }),
    languages: yup.array().min(1, 'Languages field must have at least 1 item'),
    linkedin: yup
      .string()
      .label('LinkedIn')
      .test(' linkedin', ' linkedin link should contain letters', (value) => {
        if (value) {
          const schema = yup
            .string()
            .matches(
              textAndNumbersRegex,
              'linkedin link should contain letters'
            );
          return schema.isValidSync(value);
        }
        return true;
      }),
    name: yup
      .string()
      .label('Name')
      .required('Name is required')
      .min(3, 'Name should be at least 3 letters')
      .matches(/^(\S+)/, 'Name is required'),
    phone: yup
      .string()
      .label('Phone')
      .required()
      .min(10, 'Phone number must be at least 10 digits')
      .matches(/^(\S+)/, 'Phone number is required')
      .test(
        'len',
        'Phone number must be at least 10 digits',
        (val) => val.toString().length === 10
      )
      .typeError('Phone number is required'),
    serviceAreas: yup
      .array()
      .min(1, 'Service areas should have at least 1 value')
      .typeError('Service areas should have at least 1 value'),
    youtube: yup
      .string()
      .label('YouTube')
      .test('youtube', 'youtube link should contain letters', (value) => {
        if (value) {
          const schema = yup
            .string()
            .matches(
              textAndNumbersRegex,
              'youtube link should contain letters'
            );
          return schema.isValidSync(value);
        }
        return true;
      }),
    zipCode: yup
      .string()
      .required('ZipCode is required')
      .typeError('ZipCode is required')
      .min(5, 'Must be 5 digits')
      .matches(/^(\S+)/, 'ZipCode is required'),
  })
  .required();

export default myProfileSchema;
