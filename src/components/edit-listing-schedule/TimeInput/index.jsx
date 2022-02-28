/* eslint-disable no-nested-ternary */
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
  dateRange,
  setDateRange,
  time,
}) {
  const { active, id } = day;

  const handelChange = (e) => {
    if (name.split('-')[1] === 'start') {
      Object.entries?.(dateRange).find(
        (currentDay) =>
          currentDay?.[1]?.id === id &&
          setDateRange((currentDate) => ({
            ...currentDate,
            [currentDay?.[0]]: { ...currentDay?.[1], startHour: e },
          }))
      );
    } else {
      Object.entries?.(dateRange).find(
        (currentDay) =>
          currentDay?.[1]?.id === id &&
          setDateRange((currentDate) => ({
            ...currentDate,
            [currentDay?.[0]]: { ...currentDay?.[1], endHour: e },
          }))
      );
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
              selected={
                field.value ? field.value : time ? new Date(time) : null
              }
              placeholderText="00:00 AM"
              dateFormat="h:mm aa"
              timeIntervals={60}
              showTimeSelect
              showTimeSelectOnly
              filterTime={filterPassedTime}
              readOnly={!active}
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
  control: PropTypes.objectOf(PropTypes.object),
  dateRange: PropTypes.objectOf(PropTypes.instanceOf(Date)),
  day: PropTypes.shape({
    active: PropTypes.bool,
    id: PropTypes.string,
  }),
  filterPassedTime: PropTypes.func,
  name: PropTypes.string,
  time: PropTypes.string,
  setDateRange: PropTypes.func,
  setStartDate: PropTypes.func,
};

TimeInput.defaultProps = {
  Controller: null,
  control: null,
  dateRange: null,
  day: null,
  filterPassedTime: null,
  name: null,
  time: null,
  setDateRange: () => {},
  setStartDate: () => {},
};

export default TimeInput;
