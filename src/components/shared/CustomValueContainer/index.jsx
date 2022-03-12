import PropTypes from 'prop-types';
import React from 'react';
import { components } from 'react-select';

const { ValueContainer, SingleValue, Placeholder } = components;

// Set custom `SingleValue` and `Placeholder` to keep them when searching
function CustomValueContainer({ children, selectProps, ...props }) {
  const commonProps = {
    clearValue: props.clearValue,
    cx: props.cx,
    getStyles: props.getStyles,
    getValue: props.getValue,
    hasValue: props.hasValue,
    isMulti: props.isMulti,
    isRtl: props.isRtl,
    options: props.options,
    selectOption: props.selectOption,
    selectProps,
    setValue: props.setValue,
    theme: props.theme,
  };

  return (
    <ValueContainer {...props} selectProps={selectProps}>
      {React.Children.map(
        children,
        (child) =>
          child ||
          (props.hasValue ? (
            <SingleValue
              {...commonProps}
              isFocused={selectProps.isFocused}
              isDisabled={selectProps.isDisabled}
            >
              {selectProps.getOptionLabel(props.getValue()[0])}
            </SingleValue>
          ) : (
            <Placeholder
              {...commonProps}
              key="placeholder"
              isDisabled={selectProps.isDisabled}
              data={props.getValue()}
            >
              {selectProps.placeholder}
            </Placeholder>
          ))
      )}
    </ValueContainer>
  );
}

CustomValueContainer.propTypes = {
  children: PropTypes.element,
  clearValue: PropTypes.func,
  cx: PropTypes.func,
  getStyles: PropTypes.func,
  getValue: PropTypes.func,
  hasValue: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  options: PropTypes.arrayOf({}),
  selectOption: PropTypes.func,
  selectProps: PropTypes.func,
  setValue: PropTypes.func,
  theme: PropTypes.shape({}),
};

CustomValueContainer.defaultProps = {
  children: null,
  clearValue: null,
  cx: null,
  getStyles: null,
  getValue: null,
  hasValue: false,
  isMulti: false,
  isRtl: false,
  options: {},
  selectOption: null,
  selectProps: null,
  setValue: null,
  theme: null,
};

export default CustomValueContainer;
