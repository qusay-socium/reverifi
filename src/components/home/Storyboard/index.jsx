import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';
import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import { AutocompleteMenu } from 'components/shared/LocationSearchInput/search-input.style';
import React, { useRef, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import { listingPaths } from 'utils/appPaths';
import {
  ClearInputButton,
  LocationPin,
  MenuContainer,
  SearchIcon,
  SearchInputGroupWrapper,
  SearchListingsHeader,
  SearchListingsItem,
  SearchListingsWrapper,
  StoryBoardContainer,
  StoryBoardSection,
  StyledInput,
  StyledInputGroup,
} from './storyboard.styles';

/**
 * Home page storyboard section.
 *
 * @return {JSX.Element}
 */
function Storyboard() {
  const navigate = useNavigate();
  const [address2, setAddress] = useState('');
  const inputValue = useRef();

  const handleSearch = async (address, placeId) => {
    setAddress(address);

    if (!placeId) {
      // This code runs when you press enter without having a suggestion selected
      if (inputValue.current.value) {
        navigate(`${listingPaths.search}?key=${inputValue.current.value}`);
      }
    }
  };

  const handleInputClear = () => {
    setAddress('');
    inputValue.current.focus();
  };

  return (
    <StoryBoardContainer>
      <StoryBoardSection>
        <SearchListingsWrapper>
          <SearchListingsItem>
            <SearchListingsHeader>
              Search our listings for your next purchase
            </SearchListingsHeader>
          </SearchListingsItem>

          <SearchListingsItem>
            <SearchInputGroupWrapper>
              <StyledInputGroup>
                <LocationPin />

                <PlacesAutocomplete
                  value={address2}
                  onChange={setAddress}
                  onSelect={handleSearch}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <>
                      <StyledInput
                        ref={inputValue}
                        type="text"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        value={address2}
                        placeholder="Enter city, neighborhood, ZIP code, or an address"
                        {...getInputProps()}
                      />
                      <MenuContainer>
                        {suggestions?.map((suggestion) => (
                          <AutocompleteMenu
                            {...getSuggestionItemProps(suggestion)}
                          >
                            {suggestion?.description}
                          </AutocompleteMenu>
                        ))}
                      </MenuContainer>
                    </>
                  )}
                </PlacesAutocomplete>

                <ClearInputButton>
                  {address2 && <CloseIcon onClick={handleInputClear} />}
                </ClearInputButton>
                <SearchIcon onClick={handleSearch} />
              </StyledInputGroup>
            </SearchInputGroupWrapper>
          </SearchListingsItem>
        </SearchListingsWrapper>
      </StoryBoardSection>

      <StoryBoardSection>
        <StoryBoardImage />
      </StoryBoardSection>
    </StoryBoardContainer>
  );
}

export default Storyboard;
