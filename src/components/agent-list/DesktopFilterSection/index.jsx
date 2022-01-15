import {
  AgentSearch,
  FilterSearchContainer,
  LocationSearch,
  SearchButton,
  SearchIcon,
  SelectType,
} from 'components/agent-list/AgentsListBanner/agents-list-banner.styles';
import React from 'react';
import { FilterSectionDesktop } from './desktop-filter-section.styles';

/**
 * Filter component displayed in tablet and desktop.
 *
 * @return {JSX.Element} Filter component including three filter options.
 */
function DesktopFilterSection() {
  return (
    <FilterSectionDesktop>
      <FilterSearchContainer>
        <SelectType>
          <option value="">Select Type</option>
        </SelectType>
        <LocationSearch placeholder="Search for Location" />
        <AgentSearch placeholder="Agent's Name" />
      </FilterSearchContainer>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </FilterSectionDesktop>
  );
}

export default DesktopFilterSection;
