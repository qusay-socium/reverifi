import * as yup from 'yup';

const addPartiesSchema = yup
  .object({
    address: yup.object().required(),
    agents: yup.object().required(),
    buyer: yup.object().required(),
    buyerAgent: yup.object().required(),
    confirmation: yup.boolean(),
    notes: yup.string(),
    representSeller: yup.boolean(),
    seller: yup.object().required(),
  })
  .required();

export default addPartiesSchema;
