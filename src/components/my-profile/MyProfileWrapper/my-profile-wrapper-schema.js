import * as yup from 'yup';

const myProfileSchema = yup
  .object({
    aboutMe: yup.string().label('About'),
    address: yup.string(),
    city: yup.string().required(),
    companyEmail: yup.string().email(),
    companyName: yup.string().label('Company'),
    companyWebsite: yup.string().label('Website'),
    country: yup.string().required(),
    email: yup.string().label('E-mail').email().required(),
    facebook: yup.string().label('Facebook'),
    instagram: yup.string().label('Instagram'),
    linkedin: yup.string().label('LinkedIn'),
    name: yup.string().label('Name').required(),
    phone: yup
      .string()
      .label('Phone')
      .required()
      .min(10, 'Must be 10 digits')
      .typeError('phone must be a number'),
    youtube: yup.string().label('YouTube'),
    zipCode: yup
      .string()
      .required()
      .typeError('zipCode must be a number')
      .min(5, 'Must be 5 digits'),
  })
  .required();

export default myProfileSchema;
