import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import colors from 'styles/colors';
import { ErrorMessage } from '../DropdownMenu/dropdown-menu.styles';
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
 * @param {Array} options select options
 * @param {Object} control useForm control object
 * @param {String} label input label
 * @param {node} labelIcon input label icon
 * @param {String} name input name
 * @param {String} placeholder input placeholder
 * @param {Function} handleInputChange handle input change function
 * @param {Function} setValue useForm set value function
 * @param {Function} setModalData modal context function
 * @param {String} error useForm error message
 * @param {Boolean} forInvite is the select have invitation
 * @param {Boolean} rounded is the select input rounded
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
  forInvite,
  rounded,
}) {
  return (
    <div>
      <SelectContainer
        noOptions={options.length > 0}
        rounded={rounded}
        error={error}
      >
        {label && (
          <InputLabel>
            {labelIcon}
            <LabelText>{label}:</LabelText>
          </InputLabel>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              components={
                forInvite ? { NoOptionsMessage: MenuInviteMessage } : {}
              }
              hideSelectedOptions={false}
              options={options}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onInputChange={(val, { action }) => {
                if (forInvite) {
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
                }
              }}
              className="transaction-select"
              classNamePrefix="transaction"
              theme={(theme) => customSelectTheme(theme, error)}
              isClearable
              isSearchable
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              type={label}
            />
          )}
        />
      </SelectContainer>
      {control && <ErrorMessage>{error || ''}</ErrorMessage>}
    </div>
  );
}

TransactionSelectInput.defaultProps = {
  error: null,
  forInvite: true,
  handleInputChange: () => {},
  label: null,
  labelIcon: null,
  placeholder: null,
  rounded: true,
  setModalData: () => {},
  setValue: () => {},
};

TransactionSelectInput.propTypes = {
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  error: PropTypes.string,
  forInvite: PropTypes.bool,
  handleInputChange: PropTypes.func,
  label: PropTypes.string,
  labelIcon: PropTypes.node,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string,
  rounded: PropTypes.bool,
  setModalData: PropTypes.func,
  setValue: PropTypes.func,
};

export default TransactionSelectInput;
