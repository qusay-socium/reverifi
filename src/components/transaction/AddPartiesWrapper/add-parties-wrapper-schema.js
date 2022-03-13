import * as yup from 'yup';

const addPartiesSchema = yup
  .object({
    address: yup.string(),
    buyer: yup.object(),
    buyerAgent: yup.object(),
    confirmation: yup.boolean(),
    notes: yup.string(),
    representSeller: yup.boolean(),
    seller: yup.object(),
    sellerAgent: yup.object(),
  })
  .required();

export default addPartiesSchema;
