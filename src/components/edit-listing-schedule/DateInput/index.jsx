/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as ScheduleIcon } from 'assets/icons/schedule.svg';
import PropTypes from 'prop-types';
import React from 'react';
import {
  DateInput,
  DateInputContainer,
  DateInputWrapper,
  InputLabel,
} from './date-input.style';

/**

 *
 * @param  {function} { onChange } to get the start end date range value
 *
 * @return input component for the start end date range value
 */
function DatePickerInputHandler({
  date,
  setDate,
  placeholder,
  minDate,
  dateFormat,
  showTimeSelect,
  showTimeSelectOnly,
  label,
}) {
  return (
    <DateInputWrapper>
      <InputLabel>{label}</InputLabel>
      <DateInputContainer>
        <ScheduleIcon />
        <DateInput
          selected={date}
          placeholderText={placeholder}
          onChange={(updatedDate) => {
            setDate(updatedDate);
          }}
          dateFormat={dateFormat}
          timeIntervals={60}
          showTimeSelect={showTimeSelect}
          showTimeSelectOnly={showTimeSelectOnly}
          minDate={minDate}
        />
        <ArrowDown />
      </DateInputContainer>
    </DateInputWrapper>
  );
}

DatePickerInputHandler.defaultProps = {
  date: null,
  dateFormat: 'dd-MM-yyyy',
  label: null,
  minDate: null,
  placeholder: '',
  setDate: () => {},
};

DatePickerInputHandler.propTypes = {
  date: PropTypes.instanceOf(Date),
  dateFormat: PropTypes.string,
  label: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  placeholder: PropTypes.string,
  setDate: PropTypes.func,
};

export default DatePickerInputHandler;
