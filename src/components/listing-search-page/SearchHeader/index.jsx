import { ReactComponent as ClearIcon } from 'assets/close-icon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import DropdownMenu from 'components/shared/DropdownMenu';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {
  FilterContainer,
  InputWrapper,
  ListingSearchContainer,
  SearchButton,
  SearchContainer,
} from './search-header.style';

/**
 * ListingsSearchHeader  component.
 *
 * @return {JSX.Element}
 */
function ListingsSearchHeader({
  keyWord,
  setKeyWord,
  fetchListingDataBySearchKey,
}) {
  const inputValue = useRef();

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
                fetchListingDataBySearchKey(e.target.value);
              }
            }}
          />
          {keyWord && <ClearIcon onClick={handleInputClear} />}
        </InputWrapper>

        <FilterContainer>
          <DropdownMenu name="status" placeholder="Price">
            <option value="">Status</option>
          </DropdownMenu>

          <DropdownMenu name="status" placeholder="Listing Status">
            <option value="">Status</option>
          </DropdownMenu>

          <DropdownMenu name="status" placeholder="Property type">
            <option value="">Status</option>
          </DropdownMenu>

          <DropdownMenu name="status" placeholder="Bedrooms">
            <option value="">Status</option>
          </DropdownMenu>

          <DropdownMenu name="status" placeholder="Bathrooms">
            <option value="">Status</option>
          </DropdownMenu>
        </FilterContainer>

        <SearchButton
          onClick={() => {
            fetchListingDataBySearchKey(keyWord);
          }}
        >
          <SearchIcon />
        </SearchButton>
      </SearchContainer>
    </ListingSearchContainer>
  );
}

ListingsSearchHeader.propTypes = {
  fetchListingDataBySearchKey: PropTypes.func,
  keyWord: PropTypes.string,
  setKeyWord: PropTypes.func,
};

ListingsSearchHeader.defaultProps = {
  fetchListingDataBySearchKey: () => {},
  keyWord: null,
  setKeyWord: () => {},
};

export default ListingsSearchHeader;
