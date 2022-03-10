import * as yup from 'yup';

const addPartiesSchema = yup
  .object({
    address: yup.string(),
    buyer: yup.string(),
    buyerAgent: yup.object(),
    confirmation: yup.boolean(),
    notes: yup.string(),
    representSeller: yup.boolean(),
    seller: yup.string(),
    sellerAgent: yup.object(),
  })
  .required();

export default addPartiesSchema;
