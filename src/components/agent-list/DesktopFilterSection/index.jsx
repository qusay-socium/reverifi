import {
  AgentSearch,
  FilterSearchContainer,
  LocationSearch,
  SearchButton,
  SearchIcon,
  SelectType,
} from 'components/agent-list/AgentsListBanner/agents-list-banner.styles';
import React from 'react';
import { FilterSection } from './desktop-filter-section.styles';

/**
 * Filter component displayed in tablet and desktop.
 *
 * @return {JSX.Element} Filter component including three filter options.
 */
function DesktopFilterSection() {
  return (
    <FilterSection>
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
    </FilterSection>
  );
}

export default DesktopFilterSection;
