import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getFeaturedListings } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { toUpperCaseFirstLetter } from 'utils/helpers';
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
  const [featuredListings, setFeaturedListings] = useState([]);

  const fetchFeaturedListingsData = async () => {
    const listingsData = await getFeaturedListings();
    setFeaturedListings(listingsData);
  };

  useEffect(() => {
    if (data) {
      setDataCard(data);
      if (data.length < 1) {
        fetchFeaturedListingsData();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      {dataCard?.length ? (
        <>
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
        </>
      ) : (
        <>
          <MessageContainer>
            <Message>
              {`We did not find listings for: "${decodeURI(
                wordKey
              )}", edit or remove these filters for best results.`}
            </Message>
          </MessageContainer>
          <SuggestedListing>Suggested listings you may like</SuggestedListing>
          {featuredListings?.length && (
            <CardsContainer>
              {featuredListings?.map(
                (item, index) => index < 3 && <Card data={item} key={item.id} />
              )}
            </CardsContainer>
          )}
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
