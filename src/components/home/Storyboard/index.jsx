import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';
import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listingPaths } from 'utils/appPaths';
import {
  ClearInputButton,
  LocationPin,
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
  const [address, setAddress] = useState('');
  const inputValue = useRef();

  const handleSearch = () => {
    if (inputValue.current.value) {
      navigate(`${listingPaths.search}?key=${inputValue.current.value}`);
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
                <StyledInput
                  ref={inputValue}
                  type="text"
                  placeholder="Enter City, neighborhood, ZIP, or address"
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  value={address}
                />
                <ClearInputButton>
                  {address && <CloseIcon onClick={handleInputClear} />}
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
