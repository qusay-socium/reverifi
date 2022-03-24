import Map from 'components/shared/Map';
import ShowModalProvider from 'contexts/ShowModalContext';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getListingsBySearchKey } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import MapCard from '../MapCard';
import SearchHeader from '../SearchHeader';
import ListingSearch from '../SearchResults';
import {
  ListingContainer,
  ListingPage,
  MapContainer,
  SearchBody,
} from './listing-search.style';
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
    navigate(`${listingPaths?.search}?key=${searchWord}`, { replace: true });
  };

  useEffect(() => {
    if (keyWord) fetchListingDataBySearchKey(decodeURI(keyWord));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyWord]);
  return (
    <ListingPage>
      <ShowModalProvider>
        <SearchHeader
          keyWord={keyWord}
          setKeyWord={setKeyWord}
          fetchListingDataBySearchKey={fetchListingDataBySearchKey}
        />
      </ShowModalProvider>
      <SearchBody>
        <ListingContainer>
          <ListingSearch cardData={cardData} keyWord={keyWord} />
        </ListingContainer>
        <MapContainer>
          <Map
            ComponentOnMap={renderCards}
            listings={cardData?.length > 0 ? cardData : []}
            isMarkerShown
          />
        </MapContainer>
      </SearchBody>
    </ListingPage>
  );
}

export default ListingSearchPage;
