import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { toUpperCaseFirstLetter } from 'utils/helpers';
import Card from '../Card';
import {
  CardsContainer,
  ResultCountContainer,
  ResultNumber,
  ResultText,
} from './search-list.style';

/**
 * SearchList  component.
 *
 * @return {JSX.Element}
 */
function SearchList({ data, wordKey }) {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    if (data) {
      setDataCard(data);
    }
  }, [data]);

  return (
    <div>
      <ResultCountContainer>
        <ResultNumber>{`${toUpperCaseFirstLetter(
          decodeURI(wordKey)
        )} Listings For Sale`}</ResultNumber>
        <ResultText>{`${dataCard.length} listings available on reverifi`}</ResultText>
      </ResultCountContainer>
      <CardsContainer>
        {dataCard?.map(
          (item, index) => index < 3 && <Card data={item} key={item.id} />
        )}
      </CardsContainer>
    </div>
  );
}

SearchList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  wordKey: PropTypes.string.isRequired,
};

SearchList.defaultProps = {
  data: null,
};

export default SearchList;
