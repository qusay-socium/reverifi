import React from 'react';
import FormInput from 'components/shared/FormInput';
import { components } from 'react-select';
import PropTypes from 'prop-types';
import DoneButton, { Wrapper, Heading } from './custom-menu-list-styles';

const { MenuList } = components;

function CustomMenuList({ selectProps, ...props }) {
  // eslint-disable-next-line react/prop-types
  const {
    setPrice,
    onMenuInputFocus,
    setMenuIsOpen,
    horizontal,
    placeholder,
    min,
    max,
    setMax,
    setMin,
  } = selectProps;

  const setPriceTag = () => {
    if (min && min === max && max) {
      setPrice({
        label: `$${min}`,
        value: `${min}`,
      });
    } else if (min && max) {
      setPrice({
        label: `$${min} - $${max}`,
        value: `${min} - ${max}`,
      });
    } else if (min) {
      setPrice({
        label: `$${min}+`,
        value: `${min}`,
      });
    } else if (max) {
      setPrice({
        label: `up to $${max}`,
        value: `${max}`,
      });
    } else setPrice(null);
  };

  return (
    <div>
      {!horizontal ? (
        <Wrapper>
          <FormInput
            name="min"
            onMouseDown={(e) => {
              e.stopPropagation();
              e.target.focus();
            }}
            onFocus={() => {
              setPriceTag();
              onMenuInputFocus();
            }}
            placeholder="Min"
            value={min}
            onBlur={() => {
              setPriceTag();
              setMenuIsOpen(false);
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 8) {
                setMin(min.slice(0, -1));
              }
            }}
            onChange={(e) => {
              setMin(e.currentTarget.value);
            }}
          />
          <FormInput
            name="max"
            onMouseDown={(e) => {
              e.stopPropagation();
              e.target.focus();
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 8) {
                setMax(max.slice(0, -1));
              }
            }}
            onBlur={() => {
              setPriceTag();
              setMenuIsOpen(false);
            }}
            onFocus={() => {
              setPriceTag();
              onMenuInputFocus();
            }}
            placeholder="Max"
            value={max}
            onChange={(e) => {
              setMax(e.currentTarget.value);
            }}
          />
        </Wrapper>
      ) : (
        <Heading>{placeholder}</Heading>
      )}
      <MenuList {...props} selectProps={selectProps} />
      {!horizontal && (
        <DoneButton
          type="button"
          onClick={(e) => {
            e.target.focus();
            setPriceTag();
            setMenuIsOpen(false);
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
    onMenuInputFocus: PropTypes.func,
    setMenuIsOpen: PropTypes.func,
    setPrice: PropTypes.func,
    horizontal: PropTypes.bool,
    placeholder: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    setMax: PropTypes.func,
    setMin: PropTypes.func,
  }),
};

CustomMenuList.defaultProps = {
  selectProps: () => {},
};

export default CustomMenuList;
