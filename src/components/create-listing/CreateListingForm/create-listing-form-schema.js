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

const addressStringValidator = yup
  .string()
  .required('This field is required')
  .min(10, 'Must contain at least 10 letters');

const listingFormSchema = yup
  .object({
    address: addressStringValidator,
    bedrooms: positiveIntegerValidator,
    fullBathrooms: positiveIntegerValidator,
    garages: positiveIntegerValidator,
    homeArea: positiveFloatValidator,
    isAgent: yup.boolean(),
    isOwner: yup.boolean(),
    listingTypeId: stringValidator,
    lotArea: positiveFloatValidator,
    lotDimensions: positiveFloatValidator,
    overview: stringValidator.max(140),
    partialBathrooms: positiveIntegerValidator,
    price: positiveFloatValidator,
    propertyTypeId: stringValidator,
    rooms: positiveIntegerValidator,
    tags: yup.array(),
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
