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
 *  @param  {date} date, the current selected date
 *  @param  {string} placeholder, input placeholder
 *  @param  {date} minDate, the minimum date can be selected
 *  @param  {string} dateFormat, how the date should be formatted
 *  @param  {string} label, the label for the date input
 *  @param  {func} setDate, set the selected date
 *
 * @return {date} Date range
 */
function DatePickerInputHandler({
  date,
  setDate,
  placeholder,
  minDate,
  dateFormat,
  label,
}) {
  return (
    <DateInputWrapper>
      <InputLabel>{label}</InputLabel>
      <DateInputContainer>
        <ScheduleIcon />
        <DateInput
          onChangeRaw={(e) => e.preventDefault()}
          selected={date}
          placeholderText={placeholder}
          onChange={(updatedDate) => {
            setDate(updatedDate);
          }}
          dateFormat={dateFormat}
          timeIntervals={15}
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
