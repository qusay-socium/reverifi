import { ReactComponent as ClearIcon } from 'assets/close-icon.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getListingsBySearchKey } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import SearchList from '../SearchList';
import {
  FilterButton,
  InputWrapper,
  ListingSearchContainer,
  SearchButton,
  SearchContainer,
} from './listing-search-cards.style';

/**
 * ListingSearch  component.
 *
 * @return {JSX.Element}
 */
function ListingSearch() {
  const [keyWord, setKeyWord] = useState(useLocation().search?.split('=')[1]);
  const [cardData, setCardData] = useState(null);
  const inputValue = useRef();
  const navigate = useNavigate();

  const fetchListingDataBySearchKey = async (address) => {
    const listingData = await getListingsBySearchKey(address);
    setCardData(listingData);
    navigate(`${listingPaths.search}?key=${address}`);
  };

  useEffect(() => {
    if (keyWord) fetchListingDataBySearchKey(decodeURI(keyWord));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputClear = () => {
    setKeyWord('');
    inputValue.current.value = '';
    fetchListingDataBySearchKey(inputValue.current.value);
    inputValue.current.focus();
  };

  return (
    <ListingSearchContainer>
      <SearchContainer>
        <InputWrapper>
          <input
            ref={inputValue}
            type="text"
            defaultValue={decodeURI(keyWord)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setKeyWord(e.target.value);
                setKeyWord(e.target.value);
                fetchListingDataBySearchKey(e.target.value);
              }
            }}
          />
          {keyWord && <ClearIcon onClick={handleInputClear} />}
        </InputWrapper>
        <FilterButton>
          <FilterIcon />
          <p>Filter</p>
        </FilterButton>
        <SearchButton
          onClick={() => {
            fetchListingDataBySearchKey(keyWord);
          }}
        >
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
      <SearchList data={cardData} wordKey={keyWord} />
    </ListingSearchContainer>
  );
}

export default ListingSearch;
