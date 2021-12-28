import room from 'assets/images/living-room.png';
import Map from 'components/shared/Map';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import MapCard from '../MapCard';
import ListingSearch from '../SearchResults';
import { ListingPage, MapContainer } from './listing-search.style';

const fakeData = [
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
  return (
    <ListingPage>
      <ListingSearch />
      <MapContainer>
        <Map ComponentOnMap={renderCards} listings={fakeData} isMarkerShown />
      </MapContainer>
    </ListingPage>
  );
}

export default ListingSearchPage;
