import { object, string } from 'yup';

// The regex expression was taken from this source (https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204).
// You can find all information needed about the phone expression in the link above.
const phoneExpression =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  email: string()
    .email('Email must be a valid email')
    .required('Email is a required field'),
  message: string().required('Message is a required field'),
  name: string().required('Name is a required field'),
  phoneNumber: string()
    .matches(phoneExpression, {
      excludeEmptyString: true,
      message: 'Phone number is invalid',
    })
    .max(15, 'Too long')
    .required('Phone number is a required field'),
}).required();

export default schema;
