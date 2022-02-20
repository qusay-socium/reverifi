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
      .min(10, 'Please enter a valid phone number')
      .test(
        'len',
        'Please enter a valid phone number',
        (val) => val.toString().length === 10
      )
      .typeError('Phone number is required'),
  })
  .required();

export default contactAgentSchema;
