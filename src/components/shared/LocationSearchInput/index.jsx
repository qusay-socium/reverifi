import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { StyledInput, StyledInputGroup } from './search-input.style';

/**
 *
 *  Render location search input.
 *
 * @param  {any} leftElement will render element on the left side
 * @param  {any} rightElement will render element on the right side
 * @param  {string} size add the size for the input sm,md,lg
 * @param  {string} placeholder to add placeholder
 *
 * @return {JSX.Element}
 *
 */
function LocationSearchInput({ leftElement, rightElement, size, placeholder }) {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <div>
          <StyledInputGroup>
            <p>{coordinates.lat}</p>
            {leftElement}
            <StyledInput
              size={size}
              placeholder={placeholder}
              {...getInputProps()}
            />
            {rightElement}
          </StyledInputGroup>
          <div>
            {suggestions.map((suggestion) => (
              <div {...getSuggestionItemProps(suggestion)}>
                {suggestion.description}
              </div>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

LocationSearchInput.propTypes = {
  leftElement: PropTypes.element,
  placeholder: PropTypes.string.isRequired,
  rightElement: PropTypes.element,
  size: PropTypes.string,
};

LocationSearchInput.defaultProps = {
  leftElement: null,
  rightElement: null,
  size: 'lg',
};

export default LocationSearchInput;
