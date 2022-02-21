import * as yup from 'yup';

const agentRatingSchema = yup
  .object({
    review: yup
      .string()
      .required('Please fill out this field')
      .min(150, 'Reviews must be at least 150 characters long'),
  })
  .required();

export default agentRatingSchema;
