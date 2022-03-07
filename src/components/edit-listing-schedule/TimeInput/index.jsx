import { ReactComponent as ArrowUpDown } from 'assets/mocks/images/arrow-up-down.svg';
import { Error } from 'components/shared/FormInput/form-input.styles';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import {
  DateInputs,
  DateInputsWrapper,
  ErrorContainer,
} from './time-input.style';

/**
 *   @param  {func} Controller from react-datepicker
 *   @param  {object} control from react-datepicker
 *   @param  {string} name day name
 *   @param  {func} setDateRange to calculate the start time
 *   @param  {func} filterPassedTime to filter passed time from start time
 *   @param  {object} day for get the available days
 *   @param  {object} dateRange the week days available
 *   @param  {date} time the value for the input date range
 *   @param  {string} error error message for error validation
 *   @param  {string} error error message for error validation
 *   @param  {string} schemaName input schema name for validation
 *
 * @return time as array of object for the selected days
 */
function TimeInput({
  Controller,
  control,
  name,
  filterPassedTime,
  day,
  dateRange,
  setDateRange,
  time,
  error,
  schemaName,
}) {
  const { active, id, startHour } = day;

  const handelChange = (e) => {
    if (name?.split('-')[1] === 'start') {
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
          defaultValue={time || new Date()}
          name={schemaName}
          render={({ field }) => (
            <ReactDatePicker
              className="input"
              onChange={(e) => {
                field.onChange(e);
                handelChange(e);
              }}
              selected={time ? new Date(time) : null}
              placeholderText="00:00 AM"
              dateFormat="h:mm aa"
              timeIntervals={15}
              showTimeSelect
              showTimeSelectOnly
              filterTime={(filteredTime) =>
                filterPassedTime
                  ? filterPassedTime(filteredTime, startHour)
                  : new Date()
              }
              readOnly={!active}
            />
          )}
        />

        <ArrowUpDown />
      </DateInputs>
      <ErrorContainer>{error && <Error>{error}</Error>}</ErrorContainer>
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
    startHour: PropTypes.string,
  }),
  error: PropTypes.string,
  filterPassedTime: PropTypes.func,
  name: PropTypes.string,
  schemaName: PropTypes.string,
  setDateRange: PropTypes.func,
  time: PropTypes.string,
};

TimeInput.defaultProps = {
  Controller: null,
  control: null,
  dateRange: null,
  day: null,
  error: null,
  filterPassedTime: null,
  name: null,
  schemaName: null,
  setDateRange: () => {},
  time: null,
};

export default TimeInput;
