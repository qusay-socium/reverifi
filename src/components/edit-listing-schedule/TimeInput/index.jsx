/* eslint-disable react/forbid-prop-types */
import { ReactComponent as ArrowUpDown } from 'assets/mocks/images/arrow-up-down.svg';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { DateInputs, DateInputsWrapper } from './time-input.style';

function TimeInput({
  Controller,
  control,
  name,
  setStartDate,
  filterPassedTime,
  setTime,
  readOnly,
}) {
  const handelChange = (e) => {
    if (name.split('-')[1] === 'start') {
      setTime.start = e;
    } else {
      setTime.end = e;
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
              readOnly={readOnly}
            />
          )}
        />
        <ArrowUpDown />
      </DateInputs>
    </DateInputsWrapper>
  );
}

TimeInput.propTypes = {
  Controller: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  filterPassedTime: PropTypes.func,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  setStartDate: PropTypes.func.isRequired,
  setTime: PropTypes.object,
};

TimeInput.defaultProps = {
  filterPassedTime: null,
  name: null,
  readOnly: null,
  setTime: null,
};
export default TimeInput;
