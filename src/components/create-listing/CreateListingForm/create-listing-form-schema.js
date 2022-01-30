import * as yup from 'yup';

const positiveIntegerValidator = yup
  .number()
  .transform((value, originalValue) =>
    originalValue === '' ? undefined : value
  )
  .typeError('This field should be a number')
  .integer('This field should be an Integer')
  .min(0, 'This field should be greater than or equal to 0')
  .required('This field is required');

const positiveFloatValidator = yup
  .number()
  .transform((value, originalValue) =>
    originalValue === '' ? undefined : value
  )
  .typeError('This field should be a number')
  .min(0, 'This field should be greater than or equal to 0')
  .required('This field is required');

const stringValidator = yup
  .string()
  .required()
  .typeError('This field is required');

const listingFormSchema = yup
  .object({
    bedrooms: positiveIntegerValidator,
    fullBathrooms: positiveIntegerValidator,
    garage: positiveIntegerValidator,
    homeArea: positiveFloatValidator,
    isAgent: yup.boolean(),
    isOwner: yup.boolean(),
    listingType: stringValidator,
    lotArea: positiveFloatValidator,
    lotDimensions: positiveFloatValidator,
    overview: stringValidator.max(140),
    partialBathrooms: positiveIntegerValidator,
    price: positiveFloatValidator,
    propertyType: stringValidator,
    rooms: positiveIntegerValidator,
    yearBuilt: positiveIntegerValidator.max(new Date().getFullYear()),
  })
  .test('atLeastOneCheckBoxIsSelected', null, (obj) => {
    if (obj.isAgent === true || obj.isOwner === true) {
      return true;
    }

    return new yup.ValidationError(
      'To proceed, please select at least one option.',
      null,
      'AtLeastOneIsSelected'
    );
  })
  .required();

export default listingFormSchema;
