import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import Button from 'components/shared/Button';
import LocationSearchInput from 'components/shared/LocationSearchInput';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Card from '../Card';
import data from './data';
import {
  CardsContainer,
  FilterButton,
  ListingSearchContainer,
  SearchContainer,
} from './listing-search-cards.style';

/**
 * ListingSearch  component.
 *
 * @return {JSX.Element}
 */
function ListingSearch() {
  return (
    <ListingSearchContainer>
      <SearchContainer>
        <LocationSearchInput placeholder="Type Address" />
        <FilterButton>
          <FilterIcon />
          <p>Filter</p>
        </FilterButton>
        <Button>
          <SearchIcon />
        </Button>
      </SearchContainer>

      <CardsContainer>
        {data?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </CardsContainer>
    </ListingSearchContainer>
  );
}

export default ListingSearch;
