import { EditIcon } from 'components/agent-details/AgentRating/agent-rating.style';
import {
  AgentContainer,
  AgentToolTip,
  ArrowLeft,
  ArrowRight,
  CellContainer,
  CurrentListing,
  IconContainer,
  MaxListingNumber,
  Pagination,
  TableIconContainer,
} from 'components/my-listings/ListingsTable/listing-table.style';
import Table from 'components/shared/Table';
import Tooltip from 'components/shared/Tooltip';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserListings } from 'services/listing';
import { Container, TableRow } from './roles-table.style';

/**
 * My Listings page component.
 *
 * @return {JSX.Element}
 */
function RolesTable() {
  const listingPerPage = 8;
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const { userInfo } = useUser();
  const navigate = useNavigate();

  const tableHeaders = ['PROPERTY', 'MY ROLE', ''];

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
    <Container>
      <Table headers={tableHeaders}>
        {listings?.data?.map(({ address, agent, id }) => (
          <TableRow key={id}>
            <CellContainer>{address}</CellContainer>
            <CellContainer>
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
            </CellContainer>

            <CellContainer iconsCell>
              <TableIconContainer hover>
                <EditIcon
                  onClick={() => {
                    navigate(`/my-listings/edit/${id}`);
                  }}
                />
                <Tooltip
                  text="Edit"
                  arrowPosition="top"
                  position={[2.5, -0.5]}
                />
              </TableIconContainer>
            </CellContainer>
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
    </Container>
  );
}

export default RolesTable;
