import { ReactComponent as AddIcon } from 'assets/add-icon.svg';
import myListingsImage from 'assets/images/my-listings-image.png';
import { useShowModal } from 'contexts/ShowModalContext';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserListings } from 'services/listing';
import DeleteBox from '../DeleteBox';
import MyListingHeader from '../ListingsHeader';
import ListingsTable from '../ListingsTable';
import {
  Container,
  CreateNewListingButton,
  Header,
  MyListingContainer,
  Text,
} from './my-listings';

/**
 * My Listings page component.
 *
 * @return {JSX.Element}
 */
function MyListings() {
  const { isLoggedIn, userInfo: authInfo } = useUser();
  const [deleteId, setDeleteId] = useState(null);
  const [order, setOrder] = useState('DESC');
  const listingPerPage = 8;
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { showModal, setShowModal } = useShowModal();
  const navigate = useNavigate();

  const fetchAllListingsForUser = async (page) => {
    if (authInfo?.id) {
      const listingData = await getUserListings(
        authInfo?.id,
        listingPerPage,
        page,
        order
      );
      setListings(listingData);
    }
  };

  const handleLeftArrowClick = () => {
    if (pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (pageNumber < Math.trunc(listings?.count / listingPerPage)) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleCreateNewListing = () => {
    navigate('/my-listings/create');
  };

  useEffect(() => {
    if (!isLoggedIn) navigate('/sign-up');

    fetchAllListingsForUser(pageNumber + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo, pageNumber, showModal, order]);

  return (
    <MyListingContainer>
      {listings?.count > 0 ? (
        <>
          <MyListingHeader setOrder={setOrder} />
          <ListingsTable
            setDeleteId={setDeleteId}
            handleLeftArrowClick={handleLeftArrowClick}
            handleRightArrowClick={handleRightArrowClick}
            pageNumber={pageNumber}
            listings={listings}
            setShowModal={setShowModal}
          />
          <DeleteBox deleteId={deleteId} />
        </>
      ) : (
        <>
          <Header>My Listings</Header>
          <Container>
            <img src={myListingsImage} alt="No added listings" />
            <Text>You still have no added listings yet!</Text>
            <CreateNewListingButton onClick={handleCreateNewListing}>
              <AddIcon />
              Add new Listing
            </CreateNewListingButton>
          </Container>
        </>
      )}
    </MyListingContainer>
  );
}

export default MyListings;
