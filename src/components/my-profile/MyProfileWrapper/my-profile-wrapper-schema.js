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
      .object()
      .shape({
        label: yup.string().required('language is required'),
        value: yup.string(),
      })
      .nullable(),
    linkedin: yup.string().label('LinkedIn'),
    name: yup.string().label('Name').required(),
    phone: yup
      .string()
      .label('Phone')
      .required()
      .min(10, 'Must be 10 digits')
      .typeError('phone must be a number'),
    serviceAreas: yup
      .object()
      .shape({
        label: yup.string().required('area is required'),
        value: yup.string(),
      })
      .nullable(),
    youtube: yup.string().label('YouTube'),
    zipCode: yup
      .string()
      .required('zipCode is required')
      .typeError('zipCode must be a number')
      .min(5, 'Must be 5 digits'),
  })
  .required();

export default myProfileSchema;
