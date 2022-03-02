import * as yup from 'yup';

const dateArrayValidator = (day) =>
  yup.date().when(day, {
    is: true,
    then: yup.date().required('Field is required'),
  });

const checkboxValidator = yup.bool();

const listingScheduleSchema = yup
  .object({
    FridayEnd: dateArrayValidator('FridayCheckbox'),
    FridayStart: dateArrayValidator('FridayCheckbox'),
    MondayEnd: dateArrayValidator('MondayCheckbox'),
    MondayStart: dateArrayValidator('MondayCheckbox'),
    SaturdayEnd: dateArrayValidator('SaturdayCheckbox'),
    SaturdayStart: dateArrayValidator('SaturdayCheckbox'),
    SundayEnd: dateArrayValidator('SundayCheckbox'),
    SundayStart: dateArrayValidator('SundayCheckbox'),
    ThursdayEnd: dateArrayValidator('ThursdayCheckbox'),
    ThursdayStart: dateArrayValidator('ThursdayCheckbox'),
    TuesdayEnd: dateArrayValidator('TuesdayCheckbox'),
    TuesdayStart: dateArrayValidator('TuesdayCheckbox'),
    WednesdayEnd: dateArrayValidator('WednesdayCheckbox'),
    WednesdayStart: dateArrayValidator('WednesdayCheckbox'),

    FridayCheckbox: checkboxValidator,
    MondayCheckbox: checkboxValidator,
    SaturdayCheckbox: checkboxValidator,
    SundayCheckbox: checkboxValidator,
    ThursdayCheckbox: checkboxValidator,
    TuesdayCheckbox: checkboxValidator,
    WednesdayCheckbox: checkboxValidator,
  })
  .required();

export default listingScheduleSchema;
