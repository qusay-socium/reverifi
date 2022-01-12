import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DateInput } from '../ListingSchedule/edit-listing-schedule';

/**
 *
 * @param  {function} { onChange } to get the start end date range value
 *
 * @return input component for the start end date range value
 */
function DatePickerInput({ onChange }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DateInput
      placeholderText="Click to select a date"
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
        onChange(update);
      }}
      minDate={new Date()}
    />
  );
}

DatePickerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DatePickerInput;
