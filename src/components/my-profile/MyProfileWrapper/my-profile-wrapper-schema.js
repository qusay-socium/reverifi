import * as yup from 'yup';

const myProfileSchema = yup
  .object({
    aboutMe: yup.string().label('About'),
    address: yup.string(),
    city: yup
      .object()
      .required('City is required')
      .typeError('City is required')
      .nullable(),
    companyEmail: yup.string().email(),
    companyName: yup.string().label('Company'),
    companyWebsite: yup.string().label('Website'),
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
      .number()
      .label('Phone')
      .required()
      .min(13, 'Must be at least 13 digits')
      .typeError('Phone must be a number'),
    serviceAreas: yup
      .array()
      .min(1, 'Service areas should have at least 1 value')
      .typeError('Service areas should have at least 1 value'),
    youtube: yup.string().label('YouTube'),
    zipCode: yup
      .number()
      .required('ZipCode is required')
      .typeError('ZipCode must be a number')
      .min(5, 'Must be 5 digits'),
  })
  .required();

export default myProfileSchema;
