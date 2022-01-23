import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import Button from 'components/shared/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getListingSearch from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Card from '../Card';
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
  const [keyWord, setKeyWord] = useState(window.location.href.split('=')[1]);
  const [cardData, setCardData] = useState(null);
  const navigate = useNavigate();

  const getData = async (address) => {
    const listingData = await getListingSearch(address);
    setCardData(listingData);
    navigate(`/listing/search?key=${address}`);
  };

  useEffect(() => {
    getData(keyWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListingSearchContainer>
      <SearchContainer>
        {/* <LocationSearchInput placeholder="Type Address" /> */}
        <input
          type="text"
          defaultValue={keyWord}
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
        <FilterButton>
          <FilterIcon />
          <p>Filter</p>
        </FilterButton>
        <Button
          onClick={() => {
            getData(keyWord);
          }}
        >
          <SearchIcon />
        </Button>
      </SearchContainer>

      <CardsContainer>
        {cardData?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </CardsContainer>
    </ListingSearchContainer>
  );
}

export default ListingSearch;
