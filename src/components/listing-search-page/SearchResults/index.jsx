import { ReactComponent as ClearIcon } from 'assets/close-icon.svg';
import { ReactComponent as FilterIcon } from 'assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import Button from 'components/shared/Button';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getListingsBySearchKey } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import appPaths from 'utils/appPath';
import Card from '../Card';
import {
  CardsContainer,
  FilterButton,
  InputWrapper,
  ListingSearchContainer,
  Message,
  ResultCount,
  ResultNumber,
  ResultText,
  SearchContainer,
  SorryMessage,
  SuggestedListing,
} from './listing-search-cards.style';

/**
 * ListingSearch  component.
 *
 * @return {JSX.Element}
 */
function ListingSearch() {
  const [keyWord, setKeyWord] = useState(window.location.href.split('=')[1]);
  const [cardData, setCardData] = useState(null);
  const [resultCount, setResultCount] = useState(0);
  const inputValue = useRef();
  const navigate = useNavigate();

  const sorryMessage = `We did not find listings for: ${keyWord}, Edit or remove these filters for
  best results.`;

  const fetchListingDataBySearchKey = async (address) => {
    const listingData = await getListingsBySearchKey(address);

    setCardData(listingData);
    setResultCount(`${listingData.length} Results Found in`);

    navigate(`${appPaths.listingPaths.search}?key=${address}`);
  };

  useEffect(() => {
    if (keyWord) fetchListingDataBySearchKey(keyWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleInputClose = () => {
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
            defaultValue={keyWord}
            onChange={(e) => {
              setKeyWord(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setKeyWord(e.target.value);
                fetchListingDataBySearchKey(e.target.value);
              }
            }}
          />
          {keyWord ? <ClearIcon onClick={handleInputClose} /> : null}
        </InputWrapper>
        <FilterButton>
          <FilterIcon />
          <p>Filter</p>
        </FilterButton>
        <Button
          onClick={() => {
            fetchListingDataBySearchKey(keyWord);
          }}
        >
          <SearchIcon />
        </Button>
      </SearchContainer>

      {cardData?.length ? (
        <>
          <ResultCount>
            <ResultNumber>{resultCount}</ResultNumber>
            <ResultText>{keyWord}</ResultText>
          </ResultCount>
          <CardsContainer>
            {cardData?.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </CardsContainer>
        </>
      ) : (
        <>
          <SorryMessage>
            <Message>{sorryMessage}</Message>
          </SorryMessage>
          <SuggestedListing>Suggested Listings you may like</SuggestedListing>
        </>
      )}
    </ListingSearchContainer>
  );
}

export default ListingSearch;
