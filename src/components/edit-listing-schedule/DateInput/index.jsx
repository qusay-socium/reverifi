import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DateInput } from '../ListingSchedule/edit-listing-schedule';

/**
 *
 * @param  {function} { setDateRangeValue } to get the start end date range value
 *
 * @return input component for the start end date range value
 */
function DatePickerInput({ setDateRangeValue }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DateInput
      name="thisIsTheBigOne"
      placeholderText="10-05-2021  - 16-05-2021"
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
        setDateRangeValue(update);
      }}
      minDate={new Date()}
    />
  );
}

DatePickerInput.propTypes = {
  setDateRangeValue: PropTypes.func.isRequired,
};

export default DatePickerInput;
