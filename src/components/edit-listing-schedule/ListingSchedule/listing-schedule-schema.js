import * as yup from 'yup';

const dateArrayValidator = (day) =>
  yup
    .date()
    .typeError('')
    .nullable()
    .when(day, {
      is: true,
      then: yup
        .date()
        .required('Field is required')
        .typeError('Field is required'),
    });
const checkboxValidator = yup.bool();

const listingScheduleSchema = yup
  .object({
    FridayCheckbox: checkboxValidator,
    FridayEnd: dateArrayValidator('FridayCheckbox'),
    FridayStart: dateArrayValidator('FridayCheckbox'),
    MondayCheckbox: checkboxValidator,
    MondayEnd: dateArrayValidator('MondayCheckbox'),
    MondayStart: dateArrayValidator('MondayCheckbox'),
    SaturdayCheckbox: checkboxValidator,
    SaturdayEnd: dateArrayValidator('SaturdayCheckbox'),
    SaturdayStart: dateArrayValidator('SaturdayCheckbox'),
    SundayCheckbox: checkboxValidator,
    SundayEnd: dateArrayValidator('SundayCheckbox'),
    SundayStart: dateArrayValidator('SundayCheckbox'),
    ThursdayCheckbox: checkboxValidator,
    ThursdayEnd: dateArrayValidator('ThursdayCheckbox'),
    ThursdayStart: dateArrayValidator('ThursdayCheckbox'),
    TuesdayCheckbox: checkboxValidator,
    TuesdayEnd: dateArrayValidator('TuesdayCheckbox'),
    TuesdayStart: dateArrayValidator('TuesdayCheckbox'),
    WednesdayCheckbox: checkboxValidator,
    WednesdayEnd: dateArrayValidator('WednesdayCheckbox'),
    WednesdayStart: dateArrayValidator('WednesdayCheckbox'),
  })
  .required();

export default listingScheduleSchema;
