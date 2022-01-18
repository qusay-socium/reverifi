import {
  AgentSearch,
  FilterIcon,
  FilterIconContainer,
  FilterProperty,
  FilterSearchContainer,
  LocationSearch,
  SearchButton,
  SearchIcon,
  SelectFilter,
  SelectType,
} from 'components/agent-list/AgentsListBanner/agents-list-banner.styles';
import React, { useState } from 'react';
import { FilterSectionMobile } from './mobile-filter-section.styles';

/**
 * Filter component displayed in mobile.
 *
 * @return {JSX.Element} Filter component including three filter options.
 */
function MobileFilterSection() {
  const [filterBy, setFilterBy] = useState('location');

  /**
   * Switches filter preference by choice.
   *
   * @param {React.ChangeEvent} event Object containing the filtered choice which raised the event.
   */
  const handleFilterClick = (event) => {
    setFilterBy(event.target.value);
  };
  return (
    <FilterSectionMobile>
      <FilterSearchContainer>
        <FilterProperty>
          <FilterIconContainer>
            <FilterIcon />
          </FilterIconContainer>
          <SelectFilter onChange={handleFilterClick}>
            <option value="">Filter</option>
            <option value="type">By Type</option>
            <option value="location">By Location</option>
            <option value="agent">By Agent Name</option>
          </SelectFilter>
        </FilterProperty>

        {filterBy === 'type' && (
          <SelectType>
            <option value="">Select Type</option>
          </SelectType>
        )}
        {filterBy === 'location' && (
          <LocationSearch placeholder="Search for Location" />
        )}
        {filterBy === 'agent' && <AgentSearch placeholder="Agent's Name" />}
      </FilterSearchContainer>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </FilterSectionMobile>
  );
}

export default MobileFilterSection;
