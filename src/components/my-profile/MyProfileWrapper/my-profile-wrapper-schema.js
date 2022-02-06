import * as yup from 'yup';

const myProfileSchema = yup
  .object({
    aboutMe: yup.string().label('About'),
    address: yup.string(),
    city: yup.string().required('city is required'),
    companyEmail: yup.string().email(),
    companyName: yup.string().label('Company'),
    companyWebsite: yup.string().label('Website'),
    country: yup.string().required('country is required'),
    email: yup.string().label('E-mail').email().required(),
    facebook: yup.string().label('Facebook'),
    instagram: yup.string().label('Instagram'),
    languages: yup
      .array()
      .min(1, 'Languages should have at least 1 value')
      .typeError('Languages should have at least 1 value'),
    linkedin: yup.string().label('LinkedIn'),
    name: yup.string().label('Name').required(),
    phone: yup
      .number()
      .label('Phone')
      .required()
      .min(13, 'must be at least 13 digits')
      .typeError('phone must be a number'),
    serviceAreas: yup
      .array()
      .min(1, 'Service areas should have at least 1 value')
      .typeError('Service areas should have at least 1 value'),
    youtube: yup.string().label('YouTube'),
    zipCode: yup
      .number()
      .required('zipCode is required')
      .typeError('zipCode must be a number')
      .min(5, 'Must be 5 digits'),
  })
  .required();

export default myProfileSchema;
