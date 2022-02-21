import * as yup from 'yup';

const contactAgentSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    message: yup.string().label('Message').required(),
    name: yup.string().label('Name').required(),
    phone: yup
      .string()
      .label('Phone Number')
      .required()
      .min(10, 'Phone number must be at least 10 digits')
      .test(
        'len',
        'Phone number must be at least 10 digits',
        (val) => val.toString().length === 10
      )
      .typeError('Phone number is required'),
  })
  .required();

export default contactAgentSchema;
