import * as yup from 'yup';

const contactAgentSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    message: yup.string().label('Message').required(),
    name: yup.string().label('Name').required(),
    phone: yup.string().label('Phone').required(),
  })
  .required();

export default contactAgentSchema;
