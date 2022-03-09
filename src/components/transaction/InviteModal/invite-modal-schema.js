import * as yup from 'yup';

const inviteModalSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    name: yup
      .string()
      .label('Name')
      .required()
      .min(3, 'Name should be at least 3 letters'),
  })
  .required();

export default inviteModalSchema;
