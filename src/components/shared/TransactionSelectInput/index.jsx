/* eslint-disable react/prop-types */
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import colors from 'styles/colors';
import MenuInviteMessage from '../MenuInviteMessage';
import {
  InputLabel,
  LabelText,
  SelectContainer,
} from './transaction-select-input.styles';

/**
 * custom select theme function to change select default colors
 *
 * @param {Object} theme theme object from the select component
 * @param {Object} error input useForm error
 *
 */
const customSelectTheme = (theme, error) => ({
  ...theme,
  colors: {
    ...theme.colors,
    dangerLight: colors.alabaster,
    primary: error ? colors.red : colors.green,
    primary25: colors.midGray,
  },
});

/**
 * Transaction Select Input component
 *
 * @return {JSX.Element}
 */
function TransactionSelectInput({
  options,
  control,
  label,
  labelIcon,
  name,
  placeholder,
  handleInputChange,
  setValue,
  setModalData,
  error,
}) {
  return (
    <SelectContainer noOptions={options.length > 0}>
      <InputLabel>
        {labelIcon}
        <LabelText>{label}:</LabelText>
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            components={{ NoOptionsMessage: MenuInviteMessage }}
            hideSelectedOptions={false}
            options={options}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onInputChange={(val, { action }) => {
              handleInputChange(val, name);
              // prevent clear input when not focused
              if (action !== 'set-value' && val) {
                setValue(name, { id: val, name: val });
                setModalData((prev) => ({
                  ...prev,
                  type: label,
                  val,
                }));
              }
            }}
            className="transaction-select"
            classNamePrefix="transaction"
            theme={(theme) => customSelectTheme(theme, error)}
            isClearable
            isSearchable
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
          />
        )}
      />
    </SelectContainer>
  );
}

export default TransactionSelectInput;
