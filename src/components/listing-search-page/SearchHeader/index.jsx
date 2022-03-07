import { ReactComponent as ClearIcon } from 'assets/close-icon.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import CustomMenuList from 'components/shared/CustomMenuList';
import CustomValueContainer from 'components/shared/CustomValueContainer';
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
import colors from 'styles/colors';
import {
  FilterContainer,
  InputWrapper,
  ListingSearchContainer,
  SearchButton,
  SearchContainer,
} from './search-header.style';

const style = (horizontal = false) => ({
  control: (base) => ({
    ...base,
    border: 1,
    borderRadius: '1.9rem',
    boxShadow: `0rem 0.06rem 0.3rem ${colors.mineShaft}26`,
  }),

  menu: (provided) => ({
    ...provided,
    display: 'table',
    padding: horizontal ? '1rem 1rem 1rem 1rem' : '',
  }),

  menuList: (provided) => ({
    ...provided,
    display: 'flex',
    flexDirection: horizontal ? 'row' : 'column',
  }),

  option: (provided, state) => ({
    '&:hover': {
      backgroundColor: colors.green,
      borderColor: colors.green,
      color: 'white',
    },
    ...provided,
    backgroundColor: state.isSelected ? colors.green : 'none',
    borderColor: state.isSelected ? colors.green : colors.mineShaft,
    borderRadius: horizontal ? '50%' : '',
    borderStyle: horizontal ? 'solid' : '',
    borderWidth: horizontal ? 'thin' : '',
    padding: '0.7rem 0.7rem 0.7rem 0.7rem',
  }),

  valueContainer: (provided) => ({
    ...provided,
    flexWrap: 'nowrap',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }),
});

const numberOfRooms = [
  { label: 'Any', value: 'Any' },
  { label: '1+', value: '1+' },
  { label: '2+', value: '2+' },
  { label: '3+', value: '3+' },
  { label: '4+', value: '4+' },
  { label: '5+', value: '5+' },
];

const prices = [
  { label: '$0+', value: '0' },
  { label: '$200+', value: '200' },
  { label: '$400+', value: '400' },
  { label: '$600+', value: '600' },
  { label: '$800+', value: '800' },
  { label: '$1000+', value: '1000' },
  { label: '$1200+', value: '1200' },
  { label: '$1400+', value: '1400' },
  { label: '$1600+', value: '1600' },
  { label: '$1800+', value: '1800' },
];

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
  const [selectedBathrooms, setSelectedBathrooms] = useState(null);
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
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

  const [propertyTypes, setPropertyTypes] = useState([]);
  const [listingTypes, setListingTypes] = useState([]);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPropertyTypes(await getAllPropertyTypes());
      setListingTypes(await getAllListingTypes());
    };

    fetchData();
  }, []);
  /**
   * handle search clear function
   */
  const handleSearch = async (address, placeId) => {
    if (selectedAddress) setSelectedAddress(address);

    if (!placeId) {
      // This code runs when you press enter without having a suggestion selected
      if (inputValue.current.value) {
        setSelectedAddress(inputValue?.current?.value);
        setKeyWord(inputValue?.current?.value);
        fetchListingDataBySearchKey(keyWord);
      }
    }
  };

  return (
    <ListingSearchContainer>
      <SearchContainer>
        <InputWrapper>
          <PlacesAutocomplete
            value={selectedAddress}
            onChange={setSelectedAddress}
            onSelect={handleSearch}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <>
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
            name="status"
            placeholder="Price"
            options={prices}
            isSearchable={false}
            styles={style()}
            components={{
              IndicatorSeparator: '',
              MenuList: CustomMenuList,
              ValueContainer: CustomValueContainer,
            }}
            min={min}
            max={max}
            setMax={setMax}
            setMin={setMin}
            setMenuIsOpen={setIsFocused}
            onMenuInputFocus={() => setIsFocused(true)}
            value={price}
            setPrice={setPrice}
            onChange={() => {
              setIsFocused(false);
            }}
            onMenuClose={(e) => {
              setPrice(e);
            }}
            {...{
              isFocused: isFocused || undefined,
              menuIsOpen: isFocused || undefined,
            }}
          />

          <Select
            name="status"
            placeholder="Listing Status"
            components={{ IndicatorSeparator: '' }}
            styles={style()}
            getOptionLabel={(option) => option.type}
            getOptionValue={(option) => option.id}
            options={listingTypes ?? []}
          />

          <Select
            name="status"
            placeholder="Property Type"
            components={{ IndicatorSeparator: '' }}
            options={propertyTypes ?? []}
            getOptionLabel={(option) => option.type}
            getOptionValue={(option) => option.id}
            styles={style()}
          />

          <Select
            name="Bedrooms"
            placeholder="Bedrooms"
            options={numberOfRooms}
            components={{ IndicatorSeparator: '', MenuList: CustomMenuList }}
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
            components={{ IndicatorSeparator: '', MenuList: CustomMenuList }}
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
