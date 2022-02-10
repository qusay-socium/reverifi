/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import {
  AgentSearch,
  FilterSearchContainer,
  LocationSearch,
  SearchButton,
  SearchIcon,
  SelectType,
} from '../AgentCardsContainer/agent-cards-container.styles';
import { FilterSectionDesktop } from './desktop-filter-section.styles';

/**
 * Filter component displayed in tablet and desktop.
 *
 * @param {Function} handleSearch handle search function
 *
 * @return {JSX.Element} Filter component including three filter options.
 */
function DesktopFilterSection({ handleSearch }) {
  const submitButtonRef = useRef(null);

  return (
    <FilterSectionDesktop>
      <FilterSearchContainer onSubmit={handleSearch}>
        <SelectType
          name="type"
          onKeyPress={({ key }) => {
            key === 'Enter' && submitButtonRef?.current.click();
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select Type
          </option>
          <option value="Agent">All</option>
          <option value="Buyer">Buyer</option>
          <option value="Seller">Seller</option>
        </SelectType>
        <LocationSearch
          placeholder="Search for Location"
          name="location"
          type="text"
        />
        <AgentSearch placeholder="Agent's Name" name="name" type="text" />
        <SearchButton type="submit" ref={submitButtonRef}>
          <SearchIcon />
        </SearchButton>
      </FilterSearchContainer>
    </FilterSectionDesktop>
  );
}

DesktopFilterSection.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default DesktopFilterSection;
