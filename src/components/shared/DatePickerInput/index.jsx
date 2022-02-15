import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { DatePickerContainer, ErrorMessage } from './date-picker-input.styles';

/**
 * shared Date Picker Input menu
 *
 * @param {String} name menu name
 * @param {Boolean} small small menu height
 * @param {Boolean} smallBorderRadius small border radius
 * @param {String} placeholder menu placeholder
 * @param {String} error validation error
 * @param {Object} control react useForm control object
 *
 * @return {JSX.Element}
 */
function DatePickerInput({
  small,
  smallBorderRadius,
  placeholder,
  control,
  name,
  error,
}) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <DatePickerContainer
      small={small}
      smallBorderRadius={smallBorderRadius}
      error={error}
    >
      {control ? (
        <>
          <Controller
            control={control}
            name={name}
            // defaultValue={null}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                placeholderText={placeholder}
                selectsRange
                onChange={(date) => {
                  onChange(date);
                }}
                startDate={value?.[0]}
                endDate={value?.[1]}
                isClearable
                className="date-picker"
                dateFormat="dd-MM-yyyy"
              />
            )}
          />
          <ErrorMessage>{error || ''}</ErrorMessage>
        </>
      ) : (
        <DatePicker
          placeholderText={placeholder}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable
          className="date-picker"
          dateFormat="dd-MM-yyyy"
        />
      )}
    </DatePickerContainer>
  );
}

DatePickerInput.defaultProps = {
  control: null,
  error: null,
  name: null,
  placeholder: '',
  small: false,
  smallBorderRadius: false,
};

DatePickerInput.propTypes = {
  control: PropTypes.objectOf(PropTypes.string),
  error: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  small: PropTypes.bool,
  smallBorderRadius: PropTypes.bool,
};

export default DatePickerInput;
