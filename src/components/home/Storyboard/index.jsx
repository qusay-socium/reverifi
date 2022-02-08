import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';
import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appPaths from 'utils/appPath';
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
  const [checkValue, setCheckValue] = useState(null);
  const inputValue = useRef();

  const handleSearch = () => {
    if (inputValue.current.value) {
      navigate(
        `${appPaths.listingPaths.search}?key=${inputValue.current.value}`
      );
    }
  };

  const handleInputClose = () => {
    inputValue.current.value = '';
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
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  onChange={(e) => {
                    setCheckValue(e.target.value);
                  }}
                />
                <ClearInputButton>
                  {checkValue ? <CloseIcon onClick={handleInputClose} /> : null}
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
