import room from 'assets/images/living-room.png';
import Map from 'components/shared/Map';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getListingsBySearchKey } from 'services/listing';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { listingPaths } from 'utils/appPaths';
import MapCard from '../MapCard';
import NearbyListings from '../NearbyListings';
import SearchHeader from '../SearchHeader';
import ListingSearch from '../SearchResults';
import { ListingPage, MapContainer, SearchBody } from './listing-search.style';

const mockData = [
  {
    id: 1,
    image: room,
    listingBy: 'seller',
    location: {
      lat: 35.372,
      lng: 135.83,
    },
    locationStreet: '107 Rose Dr, Knoxville, TN 37918',
    price: '$750-$800',
    services: {
      bathroom: 1,
      bedroom: 2,
    },
    time: 142,
  },
  {
    id: 1,
    image: room,
    listingBy: 'seller',
    location: {
      lat: 35.352,
      lng: 139.83,
    },
    locationStreet: '107 Rose Dr, Knoxville, TN 37918',
    price: '$750-$800',
    services: {
      bathroom: 1,
      bedroom: 2,
    },
    time: 142,
  },
];
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

  const fetchListingDataBySearchKey = async (searchWord) => {
    const listingData = await getListingsBySearchKey(searchWord);
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
      <SearchBody>
        <ListingSearch cardData={cardData} keyWord={keyWord} />
        <MapContainer>
          <Map ComponentOnMap={renderCards} listings={mockData} isMarkerShown />
        </MapContainer>
      </SearchBody>
      <NearbyListings />
    </ListingPage>
  );
}

export default ListingSearchPage;
