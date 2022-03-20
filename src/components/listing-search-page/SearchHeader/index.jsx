import { ReactComponent as ClearIcon } from 'assets/close-icon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import CustomMenuList from 'components/shared/CustomMenuList';
import {
  AutocompleteMenu,
  AutocompleteMenuContainer,
} from 'components/shared/LocationSearchInput/search-input.style';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';
import Select from 'react-select';
import {
  getAllListingTypes,
  getAllPropertyTypes,
} from 'services/listing-create-service';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { searchOptions } from 'utils/constants';
import {
  numberOfRooms,
  rentPrices,
  rentPricesMax,
  sellPrices,
  sellPricesMax,
} from './filter-data';
import {
  FilterContainer,
  InputWrapper,
  ListingSearchContainer,
  SearchButton,
  SearchContainer,
  style,
} from './search-header.style';

/**
 *
 * @param  {any} keyWord the key word for search
 * @param  {any} setKeyWord to set the key word
 * @param  {any} fetchListingDataBySearchKey to search for the key word
 *
 * @return listings data
 */
function ListingsSearchHeader({
  keyWord,
  setKeyWord,
  fetchListingDataBySearchKey,
}) {
  const rent = 'e7f4803a-8cbc-4028-8c9e-641644fe8b13';

  const inputValue = useRef();

  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedListingType, setSelectedListingTypes] = useState(null);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [listingTypes, setListingTypes] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [priceTag, setPriceTag] = useState({});
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [isFocusMax, setIsFocusMax] = useState(false);
  const [suggestedAddress, setSuggestedAddress] = useState('New Jersey, USA');
  const [selectedAddress, setSelectedAddress] = useState(
    decodeURI(keyWord) || ''
  );

  /**
   * handle input clear function
   */
  const handleInputClear = () => {
    setSelectedAddress('');
    inputValue.current.value = '';
    inputValue.current.focus();
  };

  const filter = {
    bedrooms: selectedBedrooms?.value?.split('')?.[0] || '',
    fullBathrooms: selectedBathrooms?.value.split('')?.[0] || '',
    listingTypeId: selectedListingType || '',
    max: max > min ? max : min || '',
    min: min > max ? max : min || '',
    propertyTypeId: selectedPropertyType || '',
  };

  /**
   * handle search function
   */
  const handleSearch = async () => {
    if (isFocused === true) {
      setIsFocused(false);
    }
    if (min > max) {
      setMin(max);
      setMax(min);
    }

    if (inputValue?.current?.value) {
      if (inputValue?.current?.value === selectedAddress) {
        setSelectedAddress(suggestedAddress);
        setKeyWord(suggestedAddress);
        fetchListingDataBySearchKey(suggestedAddress, filter);
      } else {
        setSelectedAddress(selectedAddress);
        setKeyWord(selectedAddress);
        fetchListingDataBySearchKey(selectedAddress, filter);
      }
    }
  };

  const renderPriceData = () => {
    if (selectedListingType === rent) {
      if (isFocusMax) {
        return rentPricesMax;
      }
      if (!isFocusMax) {
        return rentPrices;
      }
    } else if (isFocusMax) {
      return sellPricesMax;
    }
    return sellPrices;
  };

  useEffect(() => {
    const fetchData = async () => {
      setPropertyTypes(await getAllPropertyTypes());
      setListingTypes(await getAllListingTypes());
    };
    setSuggestedAddress(selectedAddress);

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListingSearchContainer>
      <SearchContainer>
        <InputWrapper>
          <PlacesAutocomplete
            value={selectedAddress}
            onChange={setSelectedAddress}
            onSelect={handleSearch}
            searchOptions={searchOptions}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <>
                {suggestions?.[0]?.description &&
                  setSuggestedAddress(suggestions?.[0]?.description)}
                <input
                  ref={inputValue}
                  type="text"
                  defaultValue={decodeURI(keyWord)}
                  {...getInputProps()}
                />
                <AutocompleteMenuContainer>
                  {suggestions?.map((suggestion) => (
                    <AutocompleteMenu {...getSuggestionItemProps(suggestion)}>
                      {suggestion?.description}
                    </AutocompleteMenu>
                  ))}
                </AutocompleteMenuContainer>
              </>
            )}
          </PlacesAutocomplete>

          {selectedAddress && <ClearIcon onClick={handleInputClear} />}
        </InputWrapper>

        <FilterContainer>
          <Select
            min={min}
            max={max}
            name="status"
            priceTag={priceTag}
            setMax={setMax}
            setMin={setMin}
            placeholder="Price"
            setPrice={setPriceTag}
            isSearchable={false}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            setIsFocusMax={setIsFocusMax}
            styles={style(false, isFocusMax)}
            isPriceMenuOpen={isPriceMenuOpen}
            onChange={(e) => setPriceTag(e)}
            onMenuClose={() => setIsPriceMenuOpen(false)}
            closeMenuOnScroll={() => setIsFocused(false)}
            onMenuOpen={() => {
              setIsPriceMenuOpen(true);
              setIsFocused(true);
            }}
            components={{
              IndicatorSeparator: '',
              MenuList: CustomMenuList,
            }}
            menuIsOpen={isFocused}
            options={renderPriceData()}
          />

          <Select
            name="status"
            placeholder="Listing Status"
            components={{ IndicatorSeparator: '' }}
            styles={style()}
            getOptionLabel={(option) => option.type}
            getOptionValue={(option) => option.id}
            options={listingTypes ?? []}
            onChange={(e) => {
              setSelectedListingTypes(e.id);
            }}
          />

          <Select
            name="status"
            placeholder="Property Type"
            components={{ IndicatorSeparator: '' }}
            options={propertyTypes ?? []}
            getOptionLabel={(option) => option.type}
            getOptionValue={(option) => option.id}
            styles={style()}
            onChange={(e) => {
              setSelectedPropertyType(e.id);
            }}
          />

          <Select
            name="Bedrooms"
            placeholder="Bedrooms"
            options={numberOfRooms}
            components={{ IndicatorSeparator: '' }}
            onChange={(option) => {
              setSelectedBedrooms({
                label: `${option.label} Beds`,
                value: option.value,
              });
            }}
            value={selectedBedrooms}
            styles={style(true)}
            horizontal
          />

          <Select
            name="Bathrooms"
            placeholder="Bathrooms"
            components={{ IndicatorSeparator: '' }}
            options={numberOfRooms}
            onChange={(option) => {
              setSelectedBathrooms({
                label: `${option.label} Baths`,
                value: option.value,
              });
            }}
            value={selectedBathrooms}
            styles={style(true)}
            horizontal
          />
        </FilterContainer>

        <SearchButton onClick={handleSearch}>
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
