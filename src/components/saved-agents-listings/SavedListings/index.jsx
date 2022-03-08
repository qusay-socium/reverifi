import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import listingNoData from 'assets/images/saved-listing-no-data.svg';
import agentImage from 'assets/listing-agent-image.png';
import listingImage from 'assets/listing-image.png';
import Pagination from 'components/shared/Pagination';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import useEffectOnce from 'hooks/use-effect-once';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getUserSavedUsersOrListings,
  saveUserOrListing,
} from '../../../services/social-statistics';
import NoDataComponent from '../NoDataComponent';
import {
  AgentImage,
  AgentInfoContainer,
  AgentName,
  IconContainer,
  ListingImage,
  ListingImageContainer,
} from './saved-listings.styles';

/**
 * Saved Listings component.
 *
 * @return {JSX.Element}
 */
function SavedListings() {
  const { isLoggedIn, userInfo: authInfo } = useUser();
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  /**
   * handle fetch Saved Listings
   */
  const fetchSavedListings = async (page) => {
    if (!isLoggedIn) navigate('/sign-up');

    if (authInfo?.id) {
      const listingData = await getUserSavedUsersOrListings(
        authInfo?.id,
        'listing',
        page,
        8
      );

      setListings(listingData);
    }
  };

  useEffectOnce(() => {
    fetchSavedListings(1);
  });

  useEffect(() => {
    fetchSavedListings(pageNumber + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, authInfo]);

  /**
   * handle delete saved user
   */
  const handleDelete = async (id) => {
    await saveUserOrListing({ listingId: id });
    fetchSavedListings(1);
    setPageNumber(0);
  };

  return (
    <div>
      {listings?.data?.length > 0 ? (
        <>
          <Table
            headers={[
              'IMAGE',
              'PROPERTY',
              'SELLER',
              'DATE',
              'PROPERTY TYPE',
              'LISTING TYPE',
              'PRICE',
              '',
            ]}
            fixedLayout
          >
            {listings?.data?.map(
              ({
                savedListing: {
                  address,
                  images,
                  agent,
                  createdAt,
                  id,
                  owner,
                  price,
                  propertyType,
                  listingType,
                },
              }) => (
                <TableRow key={id}>
                  <TableCell>
                    <ListingImageContainer>
                      <ListingImage src={images ? images?.[0] : listingImage} />
                    </ListingImageContainer>
                  </TableCell>

                  <TableCell wordBreak>{address}</TableCell>

                  <TableCell>
                    <AgentInfoContainer>
                      <AgentImage src={agent?.userInfo?.image || agentImage} />
                      <AgentName>
                        {agent?.name || owner?.name || 'N/A'}
                      </AgentName>
                    </AgentInfoContainer>
                  </TableCell>

                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{propertyType?.type}</TableCell>
                  <TableCell>{listingType?.type}</TableCell>
                  <TableCell>${price?.toLocaleString()}</TableCell>
                  <TableCell iconsCell>
                    <IconContainer
                      hoverable
                      onClick={() => {
                        navigate(`/listing/${id}`);
                      }}
                    >
                      <EyeIcon />
                      <Tooltip
                        text="View"
                        arrowPosition="top"
                        position={[2.5, -0.8]}
                      />
                    </IconContainer>
                    <IconContainer hoverable onClick={() => handleDelete(id)}>
                      <DeleteIcon />
                      <Tooltip
                        text="Delete"
                        arrowPosition="top"
                        position={[2.5, -1]}
                      />
                    </IconContainer>
                  </TableCell>
                </TableRow>
              )
            )}
          </Table>
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            dataCount={listings?.count}
          />
        </>
      ) : (
        <NoDataComponent
          image={listingNoData}
          dataFor="listing"
          buttonText="Go to homepage"
        />
      )}
    </div>
  );
}

export default SavedListings;
