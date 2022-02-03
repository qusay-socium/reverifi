import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
} from '../AgentCardsContainer/agent-cards-container.styles';
import { FilterSectionMobile } from './mobile-filter-section.styles';

/**
 * Filter component displayed in mobile.
 *
 *  @param {Function} handleSearch handle search function
 *
 * @return {JSX.Element} Filter component including three filter options.
 */
function MobileFilterSection({ handleSearch }) {
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
      <FilterSearchContainer onSubmit={handleSearch}>
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
          <SelectType name="type">
            <option value="">Select Type</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </SelectType>
        )}
        {filterBy === 'location' && (
          <LocationSearch placeholder="Search for Location" name="location" />
        )}
        {filterBy === 'agent' && (
          <AgentSearch placeholder="Agent's Name" name="name" />
        )}
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </FilterSearchContainer>
    </FilterSectionMobile>
  );
}

MobileFilterSection.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default MobileFilterSection;
