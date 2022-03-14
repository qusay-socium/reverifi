import FormInput from 'components/shared/FormInput';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { components } from 'react-select';
import DoneButton, { Heading, Wrapper } from './custom-menu-list-styles';

const { MenuList } = components;

function CustomMenuList({ selectProps, ...props }) {
  const {
    horizontal,
    placeholder,
    min,
    max,
    setMax,
    setMin,
    isPriceMenuOpen,
    priceTag,
    setIsFocusMax,
    setIsFocused,
  } = selectProps;

  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');

  const { tag, value } = priceTag;

  const setPriceTag = () => {
    if (tag === 'min') {
      setMin(value);
      setIsFocusMax(true);
    }
    if (tag === 'max') {
      setMax(value);
    }
  };

  useEffect(() => {
    if (isPriceMenuOpen) {
      minPriceInput?.focus();
      setIsFocusMax(false);
    }

    setPriceTag();
  }, [minPriceInput, priceTag]);

  return (
    <div>
      {!horizontal ? (
        <Wrapper>
          <FormInput
            name="min"
            id="minPrice"
            placeholder="Min"
            value={min}
            onChange={(e) => {
              setMin(e.target.value);
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.target.focus();
              setIsFocusMax(false);
            }}
            onBlur={() => {
              maxPriceInput?.focus();
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 8) {
                setMin(min.slice(0, -1));
              }
            }}
            autoComplete="off"
          />

          <FormInput
            id="maxPrice"
            name="max"
            placeholder="Max"
            value={max}
            onChange={(e) => {
              setMax(e.target.value);
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.target.focus();
              setIsFocusMax(true);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 8) {
                setMax(max.slice(0, -1));
              }
            }}
            autoComplete="off"
          />
        </Wrapper>
      ) : (
        <Heading>{placeholder}</Heading>
      )}
      <MenuList {...props} selectProps={selectProps} />
      {!horizontal && (
        <DoneButton
          type="button"
          onClick={() => {
            setIsFocused(false);
          }}
        >
          Done
        </DoneButton>
      )}
    </div>
  );
}

CustomMenuList.propTypes = {
  selectProps: PropTypes.shape({
    horizontal: PropTypes.bool,
    isPriceMenuOpen: PropTypes.func,
    max: PropTypes.string,
    min: PropTypes.string,
    onMenuInputFocus: PropTypes.func,
    placeholder: PropTypes.string,
    priceTag: PropTypes.objectOf(PropTypes.object),
    setIsFocusMax: PropTypes.func,
    setIsFocused: PropTypes.func,
    setMax: PropTypes.func,
    setMin: PropTypes.func,
  }),
};

CustomMenuList.defaultProps = {
  selectProps: () => {},
};

export default CustomMenuList;
