import { ReactComponent as ArrowLeft } from 'assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'assets/arrow-right.svg';
import { ReactComponent as EyeIcon } from 'assets/eye-icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ScheduleIcon } from 'assets/icons/schedule.svg';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllListingWithRelations } from 'services/listing';
import {
  AgentContainer,
  AgentImage,
  AgentName,
  CurrentListing,
  IconContainer,
  ListingImage,
  ListingImageContainer,
  MaxListingNumber,
  Pagination,
} from './listing-table.style';

const tableHeaders = ['IMAGE', 'PROPERTY', 'SELLER', 'DATE', 'STATUS', ''];

/**
 * My Listings table component.
 *
 * @return {JSX.Element}
 */
export default function MyListings() {
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();
  const listingPerPage = 8;
  const [listings, setListings] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  const startItem = pageNumber * listingPerPage + 1;
  let endItem = startItem - 1 + listingPerPage;
  if (endItem > listings?.count) {
    endItem = listings?.count;
  }

  const fetchAllListingsForUser = async (page) => {
    const listingData = await getAllListingWithRelations(page);
    setListings(listingData);
  };

  const handleLeftArrowClick = () => {
    if (pageNumber >= 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (pageNumber < Math.floor(listings?.count / listingPerPage)) {
      setPageNumber(pageNumber + 1);
    }
  };

  // const handleHide =()=>{

  // }

  useEffect(() => {
    if (!isLoggedIn) navigate('/sign-up');

    fetchAllListingsForUser(pageNumber + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <>
      <Table headers={tableHeaders}>
        {listings?.data?.map(({ address, images, agent, createdAt, id }) => (
          <TableRow key={id}>
            <TableCell>
              <ListingImageContainer>
                <ListingImage src={images[0]} />
              </ListingImageContainer>
            </TableCell>
            <TableCell>{address}</TableCell>
            <TableCell>
              <AgentContainer>
                <AgentImage src={agent.userInfo.image} />
                <AgentName>{agent.name}</AgentName>
              </AgentContainer>
            </TableCell>
            <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
            <TableCell> </TableCell>
            <TableCell iconsCell>
              <IconContainer hover>
                <EyeIcon />
                <Tooltip
                  text="Hide/Show"
                  arrowPosition="top"
                  position={[3, -1.8]}
                />
              </IconContainer>
              <IconContainer hover>
                <EditIcon
                  onClick={() => {
                    navigate(`/my-listings/edit/${id}`);
                  }}
                />
                <Tooltip text="Edit" arrowPosition="top" position={[3, -0.5]} />
              </IconContainer>
              <IconContainer hover>
                <ScheduleIcon />
                <Tooltip
                  text="Schedule"
                  arrowPosition="top"
                  position={[3, -1.8]}
                />
              </IconContainer>
              <IconContainer hover>
                <DeleteIcon />
                <Tooltip
                  text="Delete"
                  arrowPosition="top"
                  position={[3, -0.8]}
                />
              </IconContainer>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <Pagination>
        <CurrentListing>{startItem} -</CurrentListing>
        <CurrentListing>{endItem}</CurrentListing>
        <MaxListingNumber>of {listings?.count}</MaxListingNumber>
        <ArrowLeft onClick={handleLeftArrowClick} />
        <ArrowRight onClick={handleRightArrowClick} />
      </Pagination>
    </>
  );
}
