/* eslint-disable react/forbid-prop-types */
import { ReactComponent as ArrowUpDown } from 'assets/mocks/images/arrow-up-down.svg';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInputs, DateInputsWrapper } from './time-input.style';

/**
 *   @param  {func} Controller from react-datepicker
 *   @param  {object} control from react-datepicker
 *   @param  {string} name day name
 *   @param  {func} setStartDate to calculate the start time
 *   @param  {func} filterPassedTime to filter passed time from start time
 *   @param  {object} day for get the available days
 *
 * @return time as array of object for the selected days
 */
function TimeInput({
  Controller,
  control,
  name,
  setStartDate,
  filterPassedTime,
  day,
}) {
  const handelChange = (e) => {
    if (name.split('-')[1] === 'start') {
      day.start = e;
    } else {
      day.end = e;
    }
  };

  return (
    <DateInputsWrapper>
      <DateInputs>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <ReactDatePicker
              className="input"
              onChange={(e) => {
                setStartDate(e);
                field.onChange(e);
                handelChange(e);
              }}
              selected={field.value}
              placeholderText="00:00 AM"
              dateFormat="h:mm aa"
              timeIntervals={60}
              showTimeSelect
              showTimeSelectOnly
              filterTime={filterPassedTime}
              readOnly={!day.active}
            />
          )}
        />

        <ArrowUpDown />
      </DateInputs>
    </DateInputsWrapper>
  );
}

TimeInput.propTypes = {
  Controller: PropTypes.func,
  control: PropTypes.object,
  day: PropTypes.shape({
    active: PropTypes.bool,
    available: PropTypes.bool,
    end: PropTypes.string,
    start: PropTypes.string,
  }),
  filterPassedTime: PropTypes.func,
  name: PropTypes.string,
  setStartDate: PropTypes.func,
};

TimeInput.defaultProps = {
  Controller: null,
  control: null,
  day: null,
  filterPassedTime: null,
  name: null,
  setStartDate: null,
};
export default TimeInput;
