import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { getCityCountryZipCode } from 'utils/helpers';
import { Error, Label } from '../FormInput/form-input.styles';
import {
  AutocompleteMenu,
  AutocompleteMenuContainer,
  LocationSearchInputContainer,
  StyledInput,
  StyledInputGroup,
} from './search-input.style';

/**
 *  Render location search input.
 *
 * @param  {any} leftElement        will render element on the left side
 * @param  {any} rightElement       will render element on the right side
 * @param {Function} register       The react-hook-form register function.
 * @param {String} error            react-hook-form Error
 * @param {Function} setValue       react-hook-form set form values.
 * @param {Object} values           form values.
 * @param {String} name             input name
 * @param {String} size             input size (sm, md, lg)
 * @param {String} placeholder      input placeholder (sm, md, lg)
 * @param {String} label            input label
 * @param {any} labelIcon           input label icon
 * @param {String} required         add red * to input label
 *
 * @return {JSX.Element}
 */
function LocationSearchInput({
  leftElement,
  rightElement,
  size,
  placeholder,
  register,
  setValue,
  name,
  label,
  labelIcon,
  error,
  required,
}) {
  const [address, setAddress] = useState(null);

  /**
   * handle Select function
   *
   * @param {String} value  autocomplete value
   */
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);

    setAddress(value);

    // set form values
    const countryCityZipCode = getCityCountryZipCode(
      results[0].address_components
    );

    setValue('address', value);
    setValue('city', countryCityZipCode?.city);
    setValue('country', countryCityZipCode?.country);
    setValue('zipCode', countryCityZipCode?.zipCode?.split(',')[0] || null);
    setValue('lang', latLng?.lng);
    setValue('lat', latLng?.lat);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={(val) => {
        setValue('address', val);
        setAddress(val);
      }}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <LocationSearchInputContainer>
          {label && (
            <Label htmlFor={name}>
              {labelIcon}
              {label}
              {required && <span>*</span>}
            </Label>
          )}
          <StyledInputGroup error={error}>
            {leftElement}
            <StyledInput
              {...(register ? register(name) : {})}
              size={size}
              placeholder={placeholder}
              {...getInputProps()}
            />
            {rightElement}
          </StyledInputGroup>

          {error && <Error>{error}</Error>}

          <AutocompleteMenuContainer>
            {suggestions?.map((suggestion) => (
              <AutocompleteMenu
                {...getSuggestionItemProps(suggestion)}
                size={size}
              >
                {suggestion?.description}
              </AutocompleteMenu>
            ))}
          </AutocompleteMenuContainer>
        </LocationSearchInputContainer>
      )}
    </PlacesAutocomplete>
  );
}

LocationSearchInput.defaultProps = {
  error: null,
  label: null,
  labelIcon: null,
  leftElement: null,
  name: null,
  placeholder: '',
  register: null,
  required: false,
  rightElement: null,
  setValue: () => {},
  size: 'sm',
};

LocationSearchInput.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.node,
  leftElement: PropTypes.element,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  rightElement: PropTypes.element,
  setValue: PropTypes.func,
  size: PropTypes.string,
};

export default LocationSearchInput;
