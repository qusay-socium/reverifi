import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';
import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import { AutocompleteMenu } from 'components/shared/LocationSearchInput/search-input.style';
import React, { useRef, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useNavigate } from 'react-router-dom';
import { listingPaths } from 'utils/appPaths';
import { searchOptions } from 'utils/constants';
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
  const [selectedAddress, setSelectedAddress] = useState('');
  const [suggestedAddress, setSuggestedAddress] = useState('New Jersey, USA');
  const inputValue = useRef();

  const handleSearch = async (address) => {
    if (inputValue?.current?.value) {
      if (inputValue?.current?.value === address) {
        setSelectedAddress(suggestedAddress);
        navigate(`${listingPaths.search}?key=${suggestedAddress}`);
      } else {
        setSelectedAddress(address);
        navigate(`${listingPaths.search}?key=${address}`);
      }
    }
  };

  const handleInputClear = () => {
    setSelectedAddress('');
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
                  value={selectedAddress}
                  onChange={setSelectedAddress}
                  onSelect={handleSearch}
                  searchOptions={searchOptions}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <>
                      {suggestions?.[0]?.description &&
                        setSuggestedAddress(suggestions?.[0]?.description)}
                      <StyledInput
                        ref={inputValue}
                        type="text"
                        onChange={(e) => {
                          setSelectedAddress(e.target.value);
                        }}
                        value={selectedAddress}
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
                  {selectedAddress && <CloseIcon onClick={handleInputClear} />}
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
