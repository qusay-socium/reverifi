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
function Switch({ handleChange, day, register }) {
  const { active, label } = day;

  return (
    <CheckBoxWrapper>
      <CheckBox
        id={label}
        checked={active}
        type="checkbox"
        name={day?.label}
        {...(register
          ? register(`${day?.label}Checkbox`, {
              onChange: () => handleChange(day),
            })
          : {})}
      />

      <CheckBoxLabel htmlFor={label} />
      <TextLabel>{label}</TextLabel>
    </CheckBoxWrapper>
  );
}

Switch.propTypes = {
  day: PropTypes.shape({
    active: PropTypes.bool,
    label: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  register: PropTypes.objectOf(PropTypes.object),
};

Switch.defaultProps = {
  day: null,
  handleChange: () => {},
  register: null,
};

export default Switch;
