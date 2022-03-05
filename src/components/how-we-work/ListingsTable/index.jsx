import {
  AgentContainer,
  AgentToolTip,
  ArrowLeft,
  ArrowRight,
  CurrentListing,
  IconContainer,
  MaxListingNumber,
  Pagination,
} from 'components/my-listings/ListingsTable/listing-table.style';
import Table from 'components/shared/Table';
import { TableCell, TableRow } from 'components/shared/Table/table-styles';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { getUserListings } from 'services/listing';
import { LinkText, ListingsTableContainer } from './listings-table.styles';

/**
 * Listings Table component.
 *
 * @return {JSX.Element}
 */
function ListingsTable() {
  const listingPerPage = 8;
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { userInfo } = useUser();

  const fetchAllListingsForUser = async (page) => {
    if (userInfo?.id) {
      const listingData = await getUserListings(
        userInfo?.id,
        listingPerPage,
        page
      );
      setListings(listingData);
    }
  };

  const startItem = pageNumber * listingPerPage + 1;
  let endItem = startItem - 1 + listingPerPage;
  if (endItem > listings?.count) {
    endItem = listings?.count;
  }

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

  useEffect(() => {
    fetchAllListingsForUser(pageNumber + 1);
  }, [pageNumber, userInfo]);

  return (
    <ListingsTableContainer>
      <Table headers={['property', 'my Role', 'status']}>
        {listings?.data?.map(({ address, agent }, index) => (
          <TableRow key={index.toString()}>
            <TableCell>{address}</TableCell>
            <TableCell>
              <AgentContainer>
                <AgentToolTip>
                  {agent?.roles?.map(({ role }) => (
                    <>{role || 'N/A'},</>
                  ))}

                  <Tooltip
                    text={agent?.roles?.map(({ role }) => `${role}, `)}
                    arrowPosition="top"
                    position={[2.5, 2]}
                    lineBreak
                  />
                </AgentToolTip>
              </AgentContainer>
            </TableCell>
            <TableCell iconsCell>
              <LinkText to="/dashboard">start the process </LinkText>
            </TableCell>
          </TableRow>
        ))}
      </Table>

      <Pagination>
        <CurrentListing>{startItem} -</CurrentListing>
        <CurrentListing>{endItem}</CurrentListing>
        <MaxListingNumber>of {listings?.count}</MaxListingNumber>
        <IconContainer onClick={handleLeftArrowClick}>
          <ArrowLeft />
        </IconContainer>
        <IconContainer onClick={handleRightArrowClick}>
          <ArrowRight />
        </IconContainer>
      </Pagination>
    </ListingsTableContainer>
  );
}

export default ListingsTable;
