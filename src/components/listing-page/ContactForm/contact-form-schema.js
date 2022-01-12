import { object, string } from 'yup';

// The regex expression was taken from this source (https://www.sitepoint.com/community/t/phone-number-regular-expression-validation/2204).
// You can find all information needed about the phone expression in the link above.
const phoneExpression =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = object({
  email: string().email().required(),
  message: string().required(),
  name: string().required(),
  phoneNumber: string()
    .matches(phoneExpression, {
      excludeEmptyString: true,
      message: 'Phone number is invalid',
    })
    .max(15, 'Too long')
    .required('phone number is a required field'),
}).required();

export default schema;
