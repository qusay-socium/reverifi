import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
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
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (address) {
      const appPaths = {
        listingPaths: {
          search: '/listing/search',
        },
      };

      navigate(`${appPaths.listingPaths.search}?key=${address}`);
    }
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
                  type="text"
                  placeholder="Enter City"
                  onChange={(e) => setAddress(e.target.value)}
                />
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
