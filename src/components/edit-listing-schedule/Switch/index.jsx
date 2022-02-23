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
 * @param  {func} handleChange to add the change for the checkbox
 *
 * @return {element}
 */
function Switch({ handleChange, day }) {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={day.label}
        defaultChecked={day.active}
        type="checkbox"
        onChange={() => {
          handleChange(day);
        }}
      />

      <CheckBoxLabel htmlFor={day.label} />
      <TextLabel>{day.label}</TextLabel>
    </CheckBoxWrapper>
  );
}

Switch.propTypes = {
  day: PropTypes.objectOf(PropTypes.object),
  handleChange: PropTypes.func,
};

Switch.defaultProps = {
  day: null,
  handleChange: () => {},
};

export default Switch;
