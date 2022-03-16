import searchImages from 'assets/images/search-no-data.png';
import Map from 'components/shared/Map';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getListingsBySearchKey } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import MapCard from '../MapCard';
import SearchHeader from '../SearchHeader';
import {
  Container,
  Message,
  MessageContainer,
} from '../SearchList/search-list.style';
import ListingSearch from '../SearchResults';
import { ListingPage, MapContainer, SearchBody } from './listing-search.style';
/**
 * renderCards component.
 * @param  {object} data to render card on map.
 *
 * @return {JSX.Element}
 */
function renderCards({ data }) {
  return <MapCard data={data} lng={data} lat={data} />;
}

/**
 * ListingSearch page component.
 *
 * @return {JSX.Element}
 */
function ListingSearchPage() {
  const [keyWord, setKeyWord] = useState(useLocation().search?.split('=')[1]);
  const [cardData, setCardData] = useState([]);
  const navigate = useNavigate();

  const fetchListingDataBySearchKey = async (searchWord, filter) => {
    const listingData = await getListingsBySearchKey(
      searchWord || null,
      filter
    );
    setCardData(listingData);
    navigate(`${listingPaths?.search}?key=${searchWord}`);
  };

  useEffect(() => {
    if (keyWord) fetchListingDataBySearchKey(decodeURI(keyWord));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);
  return (
    <ListingPage>
      <SearchHeader
        keyWord={keyWord}
        setKeyWord={setKeyWord}
        fetchListingDataBySearchKey={fetchListingDataBySearchKey}
      />
      {cardData?.length > 0 ? (
        <SearchBody>
          <ListingSearch cardData={cardData} keyWord={keyWord} />
          <MapContainer>
            <Map
              ComponentOnMap={renderCards}
              listings={cardData?.length > 0 ? cardData : []}
              isMarkerShown
            />
          </MapContainer>
        </SearchBody>
      ) : (
        <Container>
          <img src={searchImages} alt="No search results found" />
          <MessageContainer>
            <Message>
              {`We did not find listings for: "${decodeURI(
                keyWord
              )}", edit or remove these filters for best results.`}
            </Message>
          </MessageContainer>
        </Container>
      )}
    </ListingPage>
  );
}

export default ListingSearchPage;
