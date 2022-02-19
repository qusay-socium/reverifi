import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Card from '../Card';
import {
  CardsContainer,
  Message,
  MessageContainer,
  ResultCountContainer,
  ResultNumber,
  ResultText,
  SuggestedListing,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      {dataCard?.length ? (
        <>
          <ResultCountContainer>
            <ResultNumber>{`${decodeURI(
              wordKey
            )} Listings For Sale`}</ResultNumber>
            <ResultText>{`${dataCard.length} listings available on reverifi`}</ResultText>
          </ResultCountContainer>
          <CardsContainer>
            {dataCard?.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </CardsContainer>
        </>
      ) : (
        <>
          <MessageContainer>
            <Message>
              {`We did not find listings for: ${decodeURI(
                wordKey
              )}, Edit or remove these filters for best results.`}
            </Message>
          </MessageContainer>
          <SuggestedListing>Suggested Listings you may like</SuggestedListing>
        </>
      )}
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
