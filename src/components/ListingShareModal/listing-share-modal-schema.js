import * as yup from 'yup';

const listingShareModalSchema = yup
  .object({
    email: yup.string().label('E-mail').email().required(),
    name: yup.string().label('Name').required(),
  })
  .required();

export default listingShareModalSchema;
