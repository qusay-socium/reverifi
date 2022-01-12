/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  TextLabel,
} from './switch.style';

/**
 * @param  {object} day for the checkbox day data
 * @param  {func} handleToggle to add the values to the day object
 * @return {element}
 */
function Switch({ handleToggle, day }) {
  const handleChange = () => {
    handleToggle(day.number);
  };
  return (
    <CheckBoxWrapper>
      {day.outOfDate ? (
        <CheckBox
          id={day.label}
          type="checkbox"
          onChange={handleChange}
          disabled={day.outOfDate}
          checked={!day.outOfDate}
        />
      ) : (
        <CheckBox
          id={day.label}
          type="checkbox"
          onChange={handleChange}
          checked={day.available}
        />
      )}

      <CheckBoxLabel htmlFor={day.label} />
      <TextLabel>{day.label}</TextLabel>
    </CheckBoxWrapper>
  );
}

Switch.propTypes = {
  day: PropTypes.object,
  handleToggle: PropTypes.func,
};

Switch.defaultProps = {
  day: null,
  handleToggle: null,
};

export default Switch;
