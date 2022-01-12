import PropTypes from 'prop-types';
import React from 'react';
import {
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  TextLabel,
} from './switch.style';

/**
 * @param  {string} name the name for the checkbox
 * @param  {string} textLabel the label for the checkbox
 * @param  {function} register return  object for the form
 *
 * @return {element}
 */
function Switch({ name, textLabel, dayAvailable, outOfDate, setDays, days }) {
  const handleCheckbox = (e) => {
    setDays([...days], (dayAvailable.available = e.target.checked));
  };
  return (
    <CheckBoxWrapper>
      {outOfDate ? (
        <CheckBox
          id={name}
          type="checkbox"
          onChange={handleCheckbox}
          disabled={outOfDate}
          checked={!outOfDate}
        />
      ) : (
        <CheckBox
          id={name}
          type="checkbox"
          onChange={handleCheckbox}
          // eslint-disable-next-line react/jsx-boolean-value
          defaultChecked={dayAvailable}
        />
      )}

      <CheckBoxLabel htmlFor={name} />
      <TextLabel>{textLabel}</TextLabel>
    </CheckBoxWrapper>
  );
}

Switch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dayAvailable: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  days: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  outOfDate: PropTypes.bool.isRequired,
  setDays: PropTypes.func.isRequired,
  textLabel: PropTypes.string.isRequired,
};

export default Switch;
