import { ReactComponent as StoryBoardImage } from 'assets/images/story-board-image.svg';
import Input from 'components/shared/Input';
import React, { useState } from 'react';
import {
  LocationPin,
  SearchIcon,
  SearchInputGroupWrapper,
  SearchListingsHeader,
  SearchListingsItem,
  SearchListingsWrapper,
  StoryBoardContainer,
  StoryBoardSection,
} from './storyboard.styles';

/**
 * Home page storyboard section.
 *
 * @return {JSX.Element}
 */
function Storyboard() {
  const [searchInput, setSearchInput] = useState('');

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
              <Input
                leftElement={<LocationPin />}
                rightElement={<SearchIcon />}
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.currentTarget.value)}
                label="Search"
                placeholder="Enter City, neighborhood, ZIP, or address"
              />
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
