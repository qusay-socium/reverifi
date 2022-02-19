import PropTypes from 'prop-types';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SearchList from '../SearchList';
import { ListingSearchContainer } from './listing-search-cards.style';

/**
 * ListingSearch  component.
 *
 * @return {JSX.Element}
 */
function ListingSearch({ cardData, keyWord }) {
  return (
    <ListingSearchContainer>
      <SearchList data={cardData} wordKey={keyWord} />
    </ListingSearchContainer>
  );
}

ListingSearch.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object),
  keyWord: PropTypes.string,
};

ListingSearch.defaultProps = {
  cardData: [],
  keyWord: null,
};

export default ListingSearch;
